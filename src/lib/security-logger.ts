/**
 * Security event logging system
 * Zero-cost logging using console (captured by Vercel/production platforms)
 */

export enum SecurityEventType {
  WALLET_CONNECTED = 'wallet_connected',
  WALLET_DISCONNECTED = 'wallet_disconnected',
  TRANSACTION_INITIATED = 'transaction_initiated',
  TRANSACTION_COMPLETED = 'transaction_completed',
  TRANSACTION_FAILED = 'transaction_failed',
  API_REQUEST = 'api_request',
  API_ERROR = 'api_error',
  RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
  INVALID_INPUT = 'invalid_input',
  SUSPICIOUS_ACTIVITY = 'suspicious_activity',
  AUTHENTICATION_FAILED = 'authentication_failed',
  UNAUTHORIZED_ACCESS = 'unauthorized_access',
  CONTRACT_INTERACTION = 'contract_interaction',
}

export enum SecurityLevel {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  CRITICAL = 'critical',
}

interface SecurityLogData {
  timestamp: string;
  level: SecurityLevel;
  event: string;
  message?: string;
  metadata?: Record<string, any>;
  userAgent?: string;
  ip?: string;
}

export class SecurityLogger {
  private static isDevelopment = process.env.NODE_ENV === 'development';

  /**
   * Log an informational security event
   */
  static log(event: string, metadata?: Record<string, any>): void {
    this.writeLog(SecurityLevel.INFO, event, undefined, metadata);
  }

  /**
   * Log a security warning
   */
  static warn(event: string, metadata?: Record<string, any>): void {
    this.writeLog(SecurityLevel.WARNING, event, undefined, metadata);
  }

  /**
   * Log a security error
   */
  static error(event: string, error: any, metadata?: Record<string, any>): void {
    const errorData = {
      ...metadata,
      error: error?.message || String(error),
      stack: error?.stack,
    };
    this.writeLog(SecurityLevel.ERROR, event, undefined, errorData);
  }

  /**
   * Log a critical security event
   */
  static critical(event: string, message: string, metadata?: Record<string, any>): void {
    this.writeLog(SecurityLevel.CRITICAL, event, message, metadata);
  }

  /**
   * Log wallet connection event
   */
  static walletConnected(address: string, connector?: string): void {
    this.log(SecurityEventType.WALLET_CONNECTED, {
      address: this.maskAddress(address),
      connector,
    });
  }

  /**
   * Log wallet disconnection event
   */
  static walletDisconnected(address?: string): void {
    this.log(SecurityEventType.WALLET_DISCONNECTED, {
      address: address ? this.maskAddress(address) : undefined,
    });
  }

  /**
   * Log transaction event
   */
  static transaction(
    type: 'initiated' | 'completed' | 'failed',
    txHash?: string,
    metadata?: Record<string, any>
  ): void {
    const eventType = {
      initiated: SecurityEventType.TRANSACTION_INITIATED,
      completed: SecurityEventType.TRANSACTION_COMPLETED,
      failed: SecurityEventType.TRANSACTION_FAILED,
    }[type];

    this.log(eventType, {
      txHash,
      ...metadata,
    });
  }

  /**
   * Log suspicious activity
   */
  static suspicious(reason: string, metadata?: Record<string, any>): void {
    this.warn(SecurityEventType.SUSPICIOUS_ACTIVITY, {
      reason,
      ...metadata,
    });
  }

  /**
   * Log rate limit exceeded
   */
  static rateLimitExceeded(ip: string, endpoint?: string): void {
    this.warn(SecurityEventType.RATE_LIMIT_EXCEEDED, {
      ip,
      endpoint,
    });
  }

  /**
   * Main logging function
   */
  private static writeLog(
    level: SecurityLevel,
    event: string,
    message?: string,
    metadata?: Record<string, any>
  ): void {
    const logData: SecurityLogData = {
      timestamp: new Date().toISOString(),
      level,
      event,
      message,
      metadata: this.sanitizeMetadata(metadata),
    };

    // Format for better readability
    const prefix = `[SECURITY:${level.toUpperCase()}]`;
    const eventStr = `${event}${message ? `: ${message}` : ''}`;

    // Use appropriate console method based on level
    switch (level) {
      case SecurityLevel.INFO:
        console.log(prefix, eventStr, logData);
        break;
      case SecurityLevel.WARNING:
        console.warn(prefix, eventStr, logData);
        break;
      case SecurityLevel.ERROR:
      case SecurityLevel.CRITICAL:
        console.error(prefix, eventStr, logData);
        break;
    }

    // In production, you could send to external monitoring services
    if (!this.isDevelopment && level === SecurityLevel.CRITICAL) {
      // Example: Send to monitoring service
      // this.sendToMonitoring(logData);
    }
  }

  /**
   * Sanitize metadata to remove sensitive information
   */
  private static sanitizeMetadata(metadata?: Record<string, any>): Record<string, any> | undefined {
    if (!metadata) return undefined;

    const sanitized = { ...metadata };

    // Remove sensitive keys
    const sensitiveKeys = ['privateKey', 'mnemonic', 'seed', 'password', 'secret', 'apiKey'];
    
    for (const key of Object.keys(sanitized)) {
      const lowerKey = key.toLowerCase();
      if (sensitiveKeys.some(sensitive => lowerKey.includes(sensitive))) {
        sanitized[key] = '[REDACTED]';
      }
    }

    return sanitized;
  }

  /**
   * Mask wallet address for privacy (show first 6 and last 4 characters)
   */
  private static maskAddress(address: string): string {
    if (!address || address.length < 10) return '[INVALID]';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }

  /**
   * Create a security audit trail entry
   */
  static audit(action: string, userId?: string, metadata?: Record<string, any>): void {
    this.log('audit_trail', {
      action,
      userId,
      ...metadata,
    });
  }

  /**
   * Log API request for monitoring
   */
  static apiRequest(
    method: string,
    endpoint: string,
    statusCode: number,
    duration?: number
  ): void {
    this.log(SecurityEventType.API_REQUEST, {
      method,
      endpoint,
      statusCode,
      duration: duration ? `${duration}ms` : undefined,
    });
  }
}

// Export convenience functions
export const logSecurity = SecurityLogger.log.bind(SecurityLogger);
export const warnSecurity = SecurityLogger.warn.bind(SecurityLogger);
export const errorSecurity = SecurityLogger.error.bind(SecurityLogger);

