import { NextRequest, NextResponse } from 'next/server';
import { addressSchema } from '@/lib/validators';
import { rateLimiter } from '@/lib/rate-limiter';
import { SecurityLogger } from '@/lib/security-logger';
import { BSCDataService } from '@/lib/bsc-data';

// Server-side only
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

    // Get parameters
    const { searchParams } = new URL(request.url);
    const tokenAddress = searchParams.get('address') || 'bnb';
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50); // Max 50

    // Validate address if not 'bnb'
    let validatedAddress = tokenAddress;
    if (tokenAddress.toLowerCase() !== 'bnb') {
      validatedAddress = addressSchema.parse(tokenAddress);
    }

    // Fetch holders
    const holders = await bscService.getTopHolders(validatedAddress, limit);

    SecurityLogger.log('holders_query_success', { 
      address: validatedAddress,
      limit,
      ip 
    });

    return NextResponse.json(
      { holders, count: holders.length },
      { 
        headers: { 
          'X-RateLimit-Remaining': remaining.toString(),
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
        }
      }
    );

  } catch (error: any) {
    SecurityLogger.error('holders_query_failed', error);

    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid address format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch holders' },
      { status: 500 }
    );
  }
}

