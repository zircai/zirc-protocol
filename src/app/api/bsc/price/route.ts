import { NextRequest, NextResponse } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';
import { SecurityLogger } from '@/lib/security-logger';
import { BSCDataService } from '@/lib/bsc-data';
import { sanitizeInput } from '@/lib/validators';

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

    // Get and sanitize symbol
    const { searchParams } = new URL(request.url);
    const rawSymbol = searchParams.get('symbol');

    if (!rawSymbol) {
      return NextResponse.json(
        { error: 'Symbol parameter is required' },
        { status: 400 }
      );
    }

    const symbol = sanitizeInput(rawSymbol);

    // Validate symbol length and characters
    if (!/^[A-Za-z0-9]{2,10}$/.test(symbol)) {
      return NextResponse.json(
        { error: 'Invalid symbol format' },
        { status: 400 }
      );
    }

    // Fetch price
    const priceData = await bscService.getTokenPrice(symbol);

    if (!priceData) {
      return NextResponse.json(
        { error: `Price data not available for ${symbol}` },
        { status: 404 }
      );
    }

    SecurityLogger.log('price_query_success', { symbol, ip });

    return NextResponse.json(
      priceData,
      { 
        headers: { 
          'X-RateLimit-Remaining': remaining.toString(),
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60'
        }
      }
    );

  } catch (error: any) {
    SecurityLogger.error('price_query_failed', error);

    return NextResponse.json(
      { error: 'Failed to fetch price data' },
      { status: 500 }
    );
  }
}

