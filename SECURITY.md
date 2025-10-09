# 🔒 zIRC Protocol - Security Documentation

## Security Architecture

zIRC implements enterprise-grade security practices at **zero cost**, protecting users and their assets while maintaining transparency.

## 🛡️ Implemented Security Measures

### 1. **API Key Protection** ✅ CRITICAL

**Problem:** Exposing API keys in client-side JavaScript allows anyone to steal and abuse them.

**Solution:** 
- All API keys are now **server-side only** (removed `NEXT_PUBLIC_` prefix)
- Client code uses secure API proxy routes at `/api/bsc/*`
- Keys never appear in browser DevTools or network requests

**Files:**
- API Routes: `src/app/api/bsc/*/route.ts`
- Client Wrapper: `src/lib/bsc-api-client.ts`
- Environment: `.env.example`

**Impact:** 🔒 API keys cannot be stolen from your website

---

### 2. **Input Validation & Sanitization** ✅ HIGH

**Problem:** User inputs can contain malicious data leading to injection attacks.

**Solution:**
- Comprehensive validation using Zod schemas
- Address format validation (0x + 40 hex)
- Transaction hash validation
- Amount overflow protection
- XSS prevention through sanitization

**Files:**
- `src/lib/validators.ts`

**Protected Against:**
- SQL Injection
- XSS (Cross-Site Scripting)
- SSRF (Server-Side Request Forgery)
- Integer overflow attacks
- Malformed addresses

**Impact:** 🛡️ Prevents malicious data from compromising your system

---

### 3. **Rate Limiting** ✅ HIGH

**Problem:** Attackers can abuse your API endpoints, causing DoS and high costs.

**Solution:**
- In-memory rate limiter (50 requests/minute per IP)
- Automatic cleanup to prevent memory leaks
- Returns 429 status with retry-after headers
- Separate limits for different endpoint types

**Files:**
- `src/lib/rate-limiter.ts`

**Impact:** 🚦 Prevents API abuse and protects your quota

---

### 4. **Security Headers** ✅ HIGH

**Problem:** Missing security headers leave applications vulnerable to attacks.

**Solution:** Comprehensive HTTP security headers:

```typescript
✅ Content-Security-Policy (CSP)    // Prevents XSS, injection
✅ X-Frame-Options: DENY            // Prevents clickjacking
✅ X-Content-Type-Options: nosniff  // Prevents MIME attacks
✅ Referrer-Policy                   // Privacy protection
✅ Permissions-Policy                // Disables unnecessary APIs
✅ Strict-Transport-Security         // Forces HTTPS
✅ X-XSS-Protection                  // Legacy XSS protection
```

**Files:**
- `next.config.ts`

**Impact:** 🔐 Multi-layered browser security

---

### 5. **Session Security** ✅ MEDIUM

**Problem:** Unattended wallets can be exploited if session is hijacked.

**Solution:**
- Auto-disconnect after 30 minutes of inactivity
- Warning 2 minutes before timeout
- Domain validation (prevents phishing)
- Iframe detection (prevents clickjacking)
- HTTPS enforcement in production
- Automatic localStorage sanitization

**Files:**
- `src/lib/session-security.ts`
- `src/components/ui/wallet-connect-button.tsx`

**Impact:** 🔑 Protects idle sessions from unauthorized access

---

### 6. **Transaction Validation** ✅ MEDIUM

**Problem:** Users can unknowingly sign malicious transactions.

**Solution:**
- Pre-signing transaction analysis
- Risk scoring (0-100)
- Known scam address detection
- Unlimited approval warnings
- Large transfer alerts
- Function signature identification

**Files:**
- `src/lib/transaction-validator.ts`

**Warning Levels:**
- 🟢 INFO: Normal operations
- 🟡 WARNING: Review carefully
- 🔴 DANGER: High risk
- ⛔ CRITICAL: Do not proceed

**Impact:** ⚠️ Users are warned before signing dangerous transactions

---

### 7. **Security Logging & Monitoring** ✅ MEDIUM

**Problem:** Without logging, attacks go unnoticed until damage is done.

**Solution:**
- Structured security event logging
- Automatic sensitive data redaction
- Wallet connection/disconnection tracking
- Failed authentication logging
- Rate limit violation tracking
- Integration with Vercel Analytics (free)

**Files:**
- `src/lib/security-logger.ts`

**Logged Events:**
- Wallet connections
- API requests & errors
- Rate limit violations
- Invalid inputs
- Suspicious activity

**Impact:** 📊 Complete visibility into security events

---

### 8. **WalletConnect Security** ✅ MEDIUM

**Problem:** Users connect to fake domains or malicious wallets.

**Solution:**
- WalletConnect Verify API integration
- Domain verification
- Recommended verified wallets only
- QR code safety
- Secure WebSocket (WSS) connections

**Files:**
- `src/components/providers/wagmi-provider.tsx`

**Impact:** ✅ Users connect only to legitimate applications

---

## 🔐 Best Practices We Follow

### For Users
- ✅ Always verify you're on the correct domain (zirc.ai)
- ✅ Never share your seed phrase or private keys
- ✅ Review transactions before signing
- ✅ Use hardware wallets for large amounts
- ✅ Keep software updated
- ❌ Never approve unlimited token spending
- ❌ Don't connect to apps in iframes
- ❌ Don't ignore security warnings

### For Developers
- ✅ API keys are server-side only
- ✅ All inputs are validated
- ✅ Rate limiting is enforced
- ✅ Security headers are enabled
- ✅ Dependencies are kept updated
- ✅ Sensitive data is never logged
- ✅ HTTPS is enforced in production
- ❌ Never expose private keys
- ❌ Never skip input validation
- ❌ Never trust client-side data

---

## 🚨 Incident Response

### If You Suspect a Security Issue

1. **Do NOT** create a public GitHub issue
2. **Email:** security@zirc.ai (if available)
3. **Include:**
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Your contact information

### Response Timeline
- Initial response: 24-48 hours
- Assessment: 3-5 business days
- Fix & deploy: 7-14 days (depending on severity)

### Responsible Disclosure
We follow responsible disclosure practices:
- We will acknowledge your report within 48 hours
- We will keep you updated on our progress
- We will credit you (if desired) when we publish a fix

---

## 📋 Security Checklist

### Before Deployment
- [ ] API keys are server-side only (no `NEXT_PUBLIC_`)
- [ ] All environment variables are set correctly
- [ ] Security headers are enabled
- [ ] Rate limiting is active
- [ ] Domain validation is configured
- [ ] Dependencies are up to date (`npm audit`)
- [ ] SSL/TLS certificate is valid
- [ ] CSP allows only trusted domains

### Regular Maintenance
- [ ] Review security logs weekly
- [ ] Update dependencies monthly (`npm audit fix`)
- [ ] Rotate API keys every 6 months
- [ ] Review access permissions quarterly
- [ ] Test security measures quarterly
- [ ] Update known scam addresses

---

## 🔍 Security Testing

### Manual Testing

```bash
# 1. Check API key exposure
# Open browser DevTools -> Network tab
# Connect wallet and make requests
# Verify API keys don't appear in requests

# 2. Test rate limiting
# Make 60+ rapid requests to /api/bsc/balance
# Should receive 429 after limit

# 3. Test input validation
# Try invalid addresses: "0x123", "invalid", "<script>alert('xss')</script>"
# Should receive 400 Bad Request

# 4. Test session timeout
# Connect wallet and wait 30 minutes without activity
# Should auto-disconnect
```

### Automated Testing

```bash
# Dependency security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Check for outdated packages
npm outdated
```

---

## 🔧 Tools & Resources

### Free Security Tools
1. **GitHub Security**
   - Dependabot (automatic updates)
   - Code Scanning (vulnerability detection)
   - Secret Scanning (exposed keys)

2. **Vercel Security**
   - Automatic HTTPS
   - DDoS protection
   - Web Analytics
   - Preview Protection

3. **Community Tools**
   - [Socket.dev](https://socket.dev) - Dependency scanner
   - [Snyk](https://snyk.io) - Vulnerability database
   - [OWASP](https://owasp.org) - Security guidelines

### Monitoring (Production)
- Vercel Analytics (free tier)
- Console logs → Vercel Function Logs
- Error tracking via browser DevTools

---

## 📚 Further Reading

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web3 Security Best Practices](https://consensys.github.io/smart-contract-best-practices/)
- [WalletConnect Security](https://docs.walletconnect.com/2.0/advanced/security)
- [Next.js Security Headers](https://nextjs.org/docs/advanced-features/security-headers)
- [BSC Security Guidelines](https://www.bnbchain.org/en/blog/best-practices-for-security-in-web3)

---

## 🎯 Security Status

**Current Status:** ✅ **PRODUCTION READY**

All critical security measures are implemented:
- ✅ API key protection
- ✅ Input validation
- ✅ Rate limiting
- ✅ Security headers
- ✅ Session security
- ✅ Transaction validation
- ✅ Security logging
- ✅ WalletConnect security

**Last Updated:** January 2025

**Security Contact:** security@zirc.ai

---

## 📄 License

This security implementation is part of the zIRC Protocol and follows the same license.

**Remember:** Security is an ongoing process, not a one-time implementation. Stay vigilant! 🛡️

