/**
 * Zero-cost in-memory rate limiter
 * Protects API endpoints from abuse and DoS attacks
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export class RateLimiter {
  private store = new Map<string, RateLimitEntry>();
  private readonly limit: number;
  private readonly windowMs: number;
  private cleanupInterval: NodeJS.Timeout | null = null;

  /**
   * Create a new rate limiter
   * @param limit - Maximum number of requests allowed
   * @param windowMs - Time window in milliseconds
   */
  constructor(limit: number = 50, windowMs: number = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
    
    // Cleanup old entries every 5 minutes to prevent memory leaks
    this.cleanupInterval = setInterval(() => this.cleanup(), 300000);
  }

  /**
   * Check if a request is allowed
   * @param identifier - Unique identifier (e.g., IP address, user ID)
   * @returns Object with allowed status and remaining requests
   */
  check(identifier: string): { allowed: boolean; remaining: number; resetAt?: number } {
    const now = Date.now();
    const entry = this.store.get(identifier);

    // No entry or window expired - allow and create new entry
    if (!entry || now > entry.resetAt) {
      const newEntry = { 
        count: 1, 
        resetAt: now + this.windowMs 
      };
      this.store.set(identifier, newEntry);
      
      return { 
        allowed: true, 
        remaining: this.limit - 1,
        resetAt: newEntry.resetAt
      };
    }

    // Limit exceeded
    if (entry.count >= this.limit) {
      return { 
        allowed: false, 
        remaining: 0,
        resetAt: entry.resetAt
      };
    }

    // Increment count and allow
    entry.count++;
    
    return { 
      allowed: true, 
      remaining: this.limit - entry.count,
      resetAt: entry.resetAt
    };
  }

  /**
   * Reset rate limit for a specific identifier
   * Useful for whitelisting or manual resets
   */
  reset(identifier: string): void {
    this.store.delete(identifier);
  }

  /**
   * Get current status for an identifier
   */
  getStatus(identifier: string): { count: number; remaining: number; resetAt: number } | null {
    const entry = this.store.get(identifier);
    if (!entry) {
      return null;
    }

    const now = Date.now();
    if (now > entry.resetAt) {
      return null;
    }

    return {
      count: entry.count,
      remaining: Math.max(0, this.limit - entry.count),
      resetAt: entry.resetAt
    };
  }

  /**
   * Clean up expired entries to prevent memory leaks
   */
  private cleanup(): void {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, value] of this.store.entries()) {
      if (now > value.resetAt) {
        this.store.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      console.log(`[RateLimiter] Cleaned ${cleaned} expired entries`);
    }
  }

  /**
   * Get current store size (for monitoring)
   */
  getSize(): number {
    return this.store.size;
  }

  /**
   * Clear all entries (use with caution)
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Stop cleanup interval (call when shutting down)
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.clear();
  }
}

// Create singleton instances for different use cases
export const rateLimiter = new RateLimiter(50, 60000); // 50 requests per minute (general)
export const strictRateLimiter = new RateLimiter(10, 60000); // 10 requests per minute (strict)
export const apiRateLimiter = new RateLimiter(100, 60000); // 100 requests per minute (for authenticated users)

/**
 * Helper function to get IP from request headers
 */
export function getClientIP(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    headers.get('x-real-ip') ||
    headers.get('cf-connecting-ip') || // Cloudflare
    'unknown'
  );
}

