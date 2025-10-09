/**
 * Session security utilities
 * Auto-disconnect on inactivity, prevent sensitive data storage
 */

export class SessionSecurity {
  private static readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private static readonly WARNING_BEFORE_TIMEOUT = 2 * 60 * 1000; // 2 minutes before timeout

  /**
   * Start inactivity timer that triggers callback on timeout
   * Returns cleanup function
   */
  static startInactivityTimer(
    onTimeout: () => void,
    onWarning?: () => void
  ): () => void {
    let timeoutTimer: NodeJS.Timeout;
    let warningTimer: NodeJS.Timeout | null = null;
    let lastActivity = Date.now();

    const resetTimers = () => {
      lastActivity = Date.now();
      
      // Clear existing timers
      clearTimeout(timeoutTimer);
      if (warningTimer) {
        clearTimeout(warningTimer);
      }

      // Set warning timer (2 minutes before timeout)
      if (onWarning) {
        warningTimer = setTimeout(() => {
          onWarning();
        }, this.SESSION_TIMEOUT - this.WARNING_BEFORE_TIMEOUT);
      }

      // Set timeout timer
      timeoutTimer = setTimeout(() => {
        console.log('[SessionSecurity] Session timed out due to inactivity');
        onTimeout();
      }, this.SESSION_TIMEOUT);
    };

    // Events that indicate user activity
    const activityEvents = [
      'mousedown',
      'mousemove',
      'keypress',
      'keydown',
      'scroll',
      'touchstart',
      'click',
    ];

    // Throttle activity detection to avoid excessive resets
    let throttleTimeout: NodeJS.Timeout | null = null;
    const handleActivity = () => {
      if (!throttleTimeout) {
        resetTimers();
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
        }, 1000); // Throttle to once per second
      }
    };

    // Add event listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    // Start initial timers
    resetTimers();

    // Return cleanup function
    return () => {
      activityEvents.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      clearTimeout(timeoutTimer);
      if (warningTimer) {
        clearTimeout(warningTimer);
      }
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }

  /**
   * Sanitize localStorage - remove any sensitive data that shouldn't be there
   */
  static sanitizeLocalStorage(): void {
    const sensitiveKeywords = [
      'private',
      'key',
      'seed',
      'mnemonic',
      'password',
      'secret',
      'token',
      'auth',
    ];

    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (!key) continue;

        const lowerKey = key.toLowerCase();
        
        // Check if key contains sensitive keywords
        if (sensitiveKeywords.some(keyword => lowerKey.includes(keyword))) {
          console.warn(`[SessionSecurity] Removing potentially sensitive key: ${key}`);
          localStorage.removeItem(key);
        }

        // Check if value looks like a private key (0x + 64 hex chars)
        try {
          const value = localStorage.getItem(key);
          if (value && /^0x[a-fA-F0-9]{64}$/.test(value)) {
            console.error(`[SessionSecurity] CRITICAL: Private key found in localStorage! Removing...`);
            localStorage.removeItem(key);
          }
        } catch (e) {
          // Skip if we can't read the value
        }
      }
    } catch (error) {
      console.error('[SessionSecurity] Error sanitizing localStorage:', error);
    }
  }

  /**
   * Sanitize sessionStorage similarly
   */
  static sanitizeSessionStorage(): void {
    const sensitiveKeywords = [
      'private',
      'key',
      'seed',
      'mnemonic',
      'password',
      'secret',
    ];

    try {
      for (let i = sessionStorage.length - 1; i >= 0; i--) {
        const key = sessionStorage.key(i);
        if (!key) continue;

        const lowerKey = key.toLowerCase();
        
        if (sensitiveKeywords.some(keyword => lowerKey.includes(keyword))) {
          console.warn(`[SessionSecurity] Removing potentially sensitive key from sessionStorage: ${key}`);
          sessionStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.error('[SessionSecurity] Error sanitizing sessionStorage:', error);
    }
  }

  /**
   * Clear all storage on disconnect
   */
  static clearStorageOnDisconnect(keysToKeep: string[] = []): void {
    try {
      const keysToRemove: string[] = [];

      // Collect keys to remove (except those in keysToKeep)
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && !keysToKeep.includes(key)) {
          keysToRemove.push(key);
        }
      }

      // Remove collected keys
      keysToRemove.forEach(key => localStorage.removeItem(key));

      console.log(`[SessionSecurity] Cleared ${keysToRemove.length} items from localStorage`);
    } catch (error) {
      console.error('[SessionSecurity] Error clearing storage:', error);
    }
  }

  /**
   * Detect if running in iframe (potential phishing attempt)
   */
  static isInIframe(): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      // If we can't determine, assume we're in an iframe for safety
      return true;
    }
  }

  /**
   * Check if page is loaded over HTTPS (required for production)
   */
  static isSecureContext(): boolean {
    return window.isSecureContext;
  }

  /**
   * Validate the current domain (prevent phishing)
   */
  static validateDomain(expectedDomains: string[]): boolean {
    const currentDomain = window.location.hostname.toLowerCase();
    
    // In development, allow localhost
    if (currentDomain === 'localhost' || currentDomain === '127.0.0.1') {
      return true;
    }

    return expectedDomains.some(domain => 
      currentDomain === domain.toLowerCase() || 
      currentDomain.endsWith(`.${domain.toLowerCase()}`)
    );
  }

  /**
   * Run all security checks
   */
  static runSecurityChecks(expectedDomains: string[] = ['zirc.ai']): {
    passed: boolean;
    warnings: string[];
    errors: string[];
  } {
    const warnings: string[] = [];
    const errors: string[] = [];

    // Check if in iframe
    if (this.isInIframe()) {
      errors.push('⚠️ Application is running in an iframe. This could be a phishing attempt!');
    }

    // Check if HTTPS (in production)
    if (process.env.NODE_ENV === 'production' && !this.isSecureContext()) {
      errors.push('🚨 Not running over HTTPS. Your connection is not secure!');
    }

    // Validate domain
    if (!this.validateDomain(expectedDomains)) {
      errors.push(`🚨 Suspicious domain detected! Expected: ${expectedDomains.join(', ')}`);
    }

    // Sanitize storage
    this.sanitizeLocalStorage();
    this.sanitizeSessionStorage();

    return {
      passed: errors.length === 0,
      warnings,
      errors,
    };
  }

  /**
   * Get time until session timeout (in milliseconds)
   */
  static getTimeUntilTimeout(lastActivityTime: number): number {
    const elapsed = Date.now() - lastActivityTime;
    return Math.max(0, this.SESSION_TIMEOUT - elapsed);
  }

  /**
   * Format timeout duration for display
   */
  static formatTimeRemaining(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

/**
 * React hook for session security
 */
export function useSessionSecurity(
  onTimeout: () => void,
  onWarning?: () => void,
  enabled: boolean = true
) {
  if (typeof window === 'undefined') {
    return null; // SSR safety
  }

  if (!enabled) {
    return null;
  }

  // Start inactivity timer
  const cleanup = SessionSecurity.startInactivityTimer(onTimeout, onWarning);

  // Run initial security checks
  const securityCheck = SessionSecurity.runSecurityChecks();
  
  if (!securityCheck.passed) {
    console.error('[SessionSecurity] Security checks failed:', securityCheck.errors);
  }

  return cleanup;
}

