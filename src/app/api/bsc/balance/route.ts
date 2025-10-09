import { NextRequest, NextResponse } from 'next/server';
import { addressSchema } from '@/lib/validators';
import { rateLimiter } from '@/lib/rate-limiter';
import { SecurityLogger } from '@/lib/security-logger';
import { BSCDataService } from '@/lib/bsc-data';

// Server-side only - API key never exposed to client
const bscService = new BSCDataService(process.env.BSC_API_KEY || '');

export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const { allowed, remaining } = rateLimiter.check(ip);

    if (!allowed) {
      SecurityLogger.warn('rate_limit_exceeded', { ip });
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { 
          status: 429,
          headers: { 
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60'
          }
        }
      );
    }

    // Get and validate address
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');

    if (!address) {
      return NextResponse.json(
        { error: 'Address parameter is required' },
        { status: 400 }
      );
    }

    // Validate address format
    const validatedAddress = addressSchema.parse(address);

    // Fetch balance
    const balance = await bscService.getBNBBalance(validatedAddress);

    SecurityLogger.log('balance_query_success', { 
      address: validatedAddress,
      ip 
    });

    return NextResponse.json(
      { balance, address: validatedAddress },
      { 
        headers: { 
          'X-RateLimit-Remaining': remaining.toString(),
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60'
        }
      }
    );

  } catch (error: any) {
    SecurityLogger.error('balance_query_failed', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid address format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch balance' },
      { status: 500 }
    );
  }
}

