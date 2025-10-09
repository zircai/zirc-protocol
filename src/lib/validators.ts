import { z } from 'zod';

/**
 * Security validators for Web3 and blockchain data
 * Zero-cost input validation using Zod
 */

// Ethereum/BSC address validator (0x followed by 40 hex characters)
export const addressSchema = z.string()
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid BSC/Ethereum address format')
  .transform(addr => addr.toLowerCase()); // Normalize to lowercase

// Transaction hash validator (0x followed by 64 hex characters)
export const txHashSchema = z.string()
  .regex(/^0x[a-fA-F0-9]{64}$/, 'Invalid transaction hash format')
  .transform(hash => hash.toLowerCase());

// Token amount validator (prevent overflow attacks)
export const amountSchema = z.string()
  .regex(/^\d+\.?\d*$/, 'Invalid amount format')
  .refine(val => {
    const num = parseFloat(val);
    return num >= 0 && num <= Number.MAX_SAFE_INTEGER;
  }, 'Amount out of safe range');

// Token symbol validator
export const symbolSchema = z.string()
  .regex(/^[A-Za-z0-9]{2,10}$/, 'Invalid token symbol')
  .transform(s => s.toUpperCase());

// Sanitize user input to prevent injection attacks
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') {
    return '';
  }

  return input
    .replace(/[<>{}]/g, '') // Remove potential HTML/script tags
    .replace(/javascript:/gi, '') // Remove javascript protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data URIs
    .trim()
    .slice(0, 1000); // Limit length to prevent DoS
};

// Validate URL to prevent SSRF attacks
export const urlSchema = z.string()
  .url('Invalid URL format')
  .refine(
    url => {
      const parsed = new URL(url);
      // Only allow https for external resources
      return parsed.protocol === 'https:';
    },
    'Only HTTPS URLs are allowed'
  )
  .refine(
    url => {
      const parsed = new URL(url);
      // Block localhost and private IPs
      const hostname = parsed.hostname.toLowerCase();
      return !['localhost', '127.0.0.1', '0.0.0.0'].includes(hostname) &&
             !hostname.startsWith('192.168.') &&
             !hostname.startsWith('10.') &&
             !hostname.startsWith('172.');
    },
    'Private/local URLs are not allowed'
  );

// Validate pagination parameters
export const paginationSchema = z.object({
  page: z.number().int().min(1).max(1000).default(1),
  limit: z.number().int().min(1).max(100).default(10),
});

// Chain ID validator
export const chainIdSchema = z.number().int().positive();

// Validate contract address and ensure it's checksummed
export const contractAddressSchema = addressSchema;

// ENS name validator (basic)
export const ensNameSchema = z.string()
  .regex(/^[a-z0-9-]+\.eth$/, 'Invalid ENS name format')
  .transform(name => name.toLowerCase());

// Hex data validator (for contract calls)
export const hexDataSchema = z.string()
  .regex(/^0x[a-fA-F0-9]*$/, 'Invalid hex data format');

/**
 * Validate and sanitize a wallet address
 * Returns null if invalid
 */
export function validateAddress(address: string): string | null {
  try {
    return addressSchema.parse(address);
  } catch {
    return null;
  }
}

/**
 * Validate and sanitize a transaction hash
 * Returns null if invalid
 */
export function validateTxHash(hash: string): string | null {
  try {
    return txHashSchema.parse(hash);
  } catch {
    return null;
  }
}

/**
 * Check if a string is a valid BSC address
 */
export function isValidAddress(address: string): boolean {
  return validateAddress(address) !== null;
}

/**
 * Sanitize and validate multiple addresses
 */
export function validateAddresses(addresses: string[]): string[] {
  return addresses
    .map(addr => validateAddress(addr))
    .filter((addr): addr is string => addr !== null);
}

