import { NextRequest, NextResponse } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';
import { SecurityLogger } from '@/lib/security-logger';
import axios from 'axios';

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

    // Fetch gas prices using Etherscan V2 Multichain API
    const response = await axios.get('https://api.etherscan.io/v2/api', {
      params: {
        chainid: 56, // BSC Chain ID
        module: 'gastracker',
        action: 'gasoracle',
        apikey: process.env.BSC_API_KEY
      },
      timeout: 5000
    });

    if (response.data.status === '1') {
      SecurityLogger.log('gas_query_success', { ip });

      return NextResponse.json(
        response.data.result,
        { 
          headers: { 
            'X-RateLimit-Remaining': remaining.toString(),
            'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=30'
          }
        }
      );
    }

    throw new Error('Failed to fetch gas prices');

  } catch (error: any) {
    SecurityLogger.error('gas_query_failed', error);

    return NextResponse.json(
      { error: 'Failed to fetch gas prices' },
      { status: 500 }
    );
  }
}

