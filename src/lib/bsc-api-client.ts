/**
 * Client-side API wrapper for BSC data
 * Uses secure server-side API routes instead of exposing API keys
 */

export interface BSCBalance {
  balance: string;
  address: string;
}

export interface TokenPrice {
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
}

export interface GasPrice {
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
}

export interface Holder {
  address: string;
  balance: string;
  symbol: string;
  name: string;
}

export class BSCApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/bsc') {
    this.baseUrl = baseUrl;
  }

  /**
   * Get BNB balance for an address
   */
  async getBalance(address: string): Promise<BSCBalance> {
    const response = await fetch(`${this.baseUrl}/balance?address=${encodeURIComponent(address)}`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch balance');
    }

    return response.json();
  }

  /**
   * Get token price
   */
  async getPrice(symbol: string): Promise<TokenPrice> {
    const response = await fetch(`${this.baseUrl}/price?symbol=${encodeURIComponent(symbol)}`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch price');
    }

    return response.json();
  }

  /**
   * Get current gas prices
   */
  async getGasPrice(): Promise<GasPrice> {
    const response = await fetch(`${this.baseUrl}/gas`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch gas prices');
    }

    return response.json();
  }

  /**
   * Get top holders for a token
   */
  async getHolders(tokenAddress: string = 'bnb', limit: number = 10): Promise<Holder[]> {
    const params = new URLSearchParams({
      address: tokenAddress,
      limit: limit.toString()
    });

    const response = await fetch(`${this.baseUrl}/holders?${params}`);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch holders');
    }

    const data = await response.json();
    return data.holders;
  }

  /**
   * Helper to check rate limit status from response headers
   */
  private getRateLimitInfo(response: Response) {
    return {
      remaining: response.headers.get('X-RateLimit-Remaining'),
      retryAfter: response.headers.get('Retry-After'),
    };
  }
}

// Export singleton instance
export const bscApiClient = new BSCApiClient();

/**
 * React hooks for BSC data (with built-in error handling)
 */

export function useBSCBalance(address: string | undefined) {
  const [balance, setBalance] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!address) {
      setBalance(null);
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    bscApiClient
      .getBalance(address)
      .then((data) => {
        if (mounted) {
          setBalance(data.balance);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [address]);

  return { balance, loading, error };
}

export function useBSCPrice(symbol: string | undefined) {
  const [price, setPrice] = React.useState<TokenPrice | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!symbol) {
      setPrice(null);
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    bscApiClient
      .getPrice(symbol)
      .then((data) => {
        if (mounted) {
          setPrice(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [symbol]);

  return { price, loading, error };
}

export function useBSCGasPrice() {
  const [gasPrice, setGasPrice] = React.useState<GasPrice | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const refetch = React.useCallback(() => {
    setLoading(true);
    setError(null);

    bscApiClient
      .getGasPrice()
      .then((data) => {
        setGasPrice(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return { gasPrice, loading, error, refetch };
}

// Need to import React for hooks
import * as React from 'react';

