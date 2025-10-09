/**
 * Transaction validation and warning system
 * Helps users identify suspicious transactions before signing
 */

import { validateAddress, isValidAddress } from './validators';

export enum WarningLevel {
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
  CRITICAL = 'critical',
}

export interface TransactionWarning {
  level: WarningLevel;
  message: string;
  icon?: string;
  details?: string;
}

export interface TransactionData {
  to?: string;
  from?: string;
  value?: string | bigint;
  data?: string;
  gasLimit?: string | bigint;
  gasPrice?: string | bigint;
  maxFeePerGas?: string | bigint;
  maxPriorityFeePerGas?: string | bigint;
}

// Known scam addresses (community-sourced)
// In production, fetch from a maintained API/database
const KNOWN_SCAMS: string[] = [
  // Add known scam addresses here
  // These would typically come from a security service
];

// Known safe contracts (verified by community)
const KNOWN_SAFE_CONTRACTS: string[] = [
  '0x10ed43c718714eb63d5aa57b78b54704e256024e', // PancakeSwap Router
  '0x05ff2b0db69458a0750badebc4f9e13add608c7f', // PancakeSwap BNB/BUSD
  '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16', // PancakeSwap BNB/CAKE
  // Add more verified contracts
];

// Function signatures for common operations
const FUNCTION_SIGNATURES: Record<string, string> = {
  '0x095ea7b3': 'approve(address,uint256)',
  '0xa9059cbb': 'transfer(address,uint256)',
  '0x23b872dd': 'transferFrom(address,address,uint256)',
  '0x7ff36ab5': 'swapExactETHForTokens(...)',
  '0x38ed1739': 'swapExactTokensForTokens(...)',
  '0x18cbafe5': 'swapExactTokensForETH(...)',
};

export class TransactionValidator {
  /**
   * Validate a transaction and return warnings
   */
  static validateTransaction(tx: TransactionData): TransactionWarning[] {
    const warnings: TransactionWarning[] = [];

    // Validate recipient address
    if (tx.to) {
      const addressWarnings = this.validateRecipient(tx.to);
      warnings.push(...addressWarnings);
    }

    // Check transaction value
    if (tx.value) {
      const valueWarnings = this.validateValue(tx.value);
      warnings.push(...valueWarnings);
    }

    // Check transaction data (contract interaction)
    if (tx.data && tx.data !== '0x') {
      const dataWarnings = this.validateData(tx.data, tx.to);
      warnings.push(...dataWarnings);
    }

    // Check gas settings
    if (tx.gasLimit || tx.gasPrice || tx.maxFeePerGas) {
      const gasWarnings = this.validateGas(tx);
      warnings.push(...gasWarnings);
    }

    return warnings;
  }

  /**
   * Validate recipient address
   */
  private static validateRecipient(address: string): TransactionWarning[] {
    const warnings: TransactionWarning[] = [];

    // Check if valid address
    if (!isValidAddress(address)) {
      warnings.push({
        level: WarningLevel.CRITICAL,
        message: '🚨 INVALID ADDRESS',
        icon: '🚨',
        details: 'The recipient address is not a valid BSC address. Do not proceed!',
      });
      return warnings;
    }

    const normalizedAddress = address.toLowerCase();

    // Check against known scams
    if (KNOWN_SCAMS.includes(normalizedAddress)) {
      warnings.push({
        level: WarningLevel.CRITICAL,
        message: '🚨 KNOWN SCAM ADDRESS',
        icon: '🚨',
        details: 'This address has been reported as a scam. DO NOT PROCEED!',
      });
      return warnings;
    }

    // Check if it's a known safe contract
    if (KNOWN_SAFE_CONTRACTS.includes(normalizedAddress)) {
      warnings.push({
        level: WarningLevel.INFO,
        message: '✅ Verified Contract',
        icon: '✅',
        details: 'This is a verified and commonly used contract.',
      });
    }

    return warnings;
  }

  /**
   * Validate transaction value
   */
  private static validateValue(value: string | bigint): TransactionWarning[] {
    const warnings: TransactionWarning[] = [];
    
    const valueBigInt = typeof value === 'string' ? BigInt(value) : value;
    const valueInBNB = Number(valueBigInt) / 1e18;

    // Warn on large transfers
    if (valueInBNB > 10) {
      warnings.push({
        level: WarningLevel.WARNING,
        message: '⚠️ Large Transfer',
        icon: '⚠️',
        details: `You are transferring ${valueInBNB.toFixed(4)} BNB. Please verify the recipient.`,
      });
    }

    // Warn on very large transfers
    if (valueInBNB > 100) {
      warnings.push({
        level: WarningLevel.DANGER,
        message: '🔴 VERY LARGE TRANSFER',
        icon: '🔴',
        details: `You are transferring ${valueInBNB.toFixed(4)} BNB. Double-check everything!`,
      });
    }

    // Info on zero value (contract interaction)
    if (valueInBNB === 0) {
      warnings.push({
        level: WarningLevel.INFO,
        message: 'ℹ️ Contract Interaction',
        icon: 'ℹ️',
        details: 'This transaction involves a smart contract interaction with no BNB transfer.',
      });
    }

    return warnings;
  }

  /**
   * Validate transaction data (contract calls)
   */
  private static validateData(data: string, recipient?: string): TransactionWarning[] {
    const warnings: TransactionWarning[] = [];

    // Get function signature (first 10 characters: 0x + 8 hex chars)
    const signature = data.slice(0, 10);
    const functionName = FUNCTION_SIGNATURES[signature] || 'Unknown function';

    // Check for token approvals
    if (signature === '0x095ea7b3') {
      warnings.push({
        level: WarningLevel.WARNING,
        message: '⚠️ Token Approval',
        icon: '⚠️',
        details: `You are approving a contract to spend your tokens. Review the amount carefully.`,
      });

      // Check if approval is for max uint256 (unlimited)
      if (data.includes('f'.repeat(64))) {
        warnings.push({
          level: WarningLevel.DANGER,
          message: '🔴 UNLIMITED APPROVAL',
          icon: '🔴',
          details: 'This approval is for UNLIMITED tokens. Only approve trusted contracts!',
        });
      }
    }

    // Check for token transfers
    if (signature === '0xa9059cbb' || signature === '0x23b872dd') {
      warnings.push({
        level: WarningLevel.INFO,
        message: 'ℹ️ Token Transfer',
        icon: 'ℹ️',
        details: `Function: ${functionName}`,
      });
    }

    // Check for DEX swaps
    if (signature.startsWith('0x7ff36ab5') || signature.startsWith('0x38ed1739') || signature.startsWith('0x18cbafe5')) {
      warnings.push({
        level: WarningLevel.INFO,
        message: '🔄 Token Swap',
        icon: '🔄',
        details: 'You are performing a token swap. Review slippage settings.',
      });
    }

    return warnings;
  }

  /**
   * Validate gas settings
   */
  private static validateGas(tx: TransactionData): TransactionWarning[] {
    const warnings: TransactionWarning[] = [];

    // Check for unusually high gas price
    if (tx.gasPrice || tx.maxFeePerGas) {
      const gasPrice = tx.maxFeePerGas || tx.gasPrice;
      const gasPriceBigInt = typeof gasPrice === 'string' ? BigInt(gasPrice) : gasPrice;
      const gasPriceGwei = Number(gasPriceBigInt) / 1e9;

      if (gasPriceGwei > 20) {
        warnings.push({
          level: WarningLevel.WARNING,
          message: '⚠️ High Gas Price',
          icon: '⚠️',
          details: `Gas price is ${gasPriceGwei.toFixed(2)} Gwei. Consider waiting for lower fees.`,
        });
      }

      if (gasPriceGwei > 50) {
        warnings.push({
          level: WarningLevel.DANGER,
          message: '🔴 VERY HIGH GAS',
          icon: '🔴',
          details: `Gas price is ${gasPriceGwei.toFixed(2)} Gwei. This transaction will be expensive!`,
        });
      }
    }

    return warnings;
  }

  /**
   * Quick check if transaction looks suspicious
   */
  static isSuspicious(tx: TransactionData): boolean {
    const warnings = this.validateTransaction(tx);
    return warnings.some(w => w.level === WarningLevel.CRITICAL || w.level === WarningLevel.DANGER);
  }

  /**
   * Get a simple risk score (0-100, higher = more risky)
   */
  static getRiskScore(tx: TransactionData): number {
    const warnings = this.validateTransaction(tx);
    
    let score = 0;
    
    for (const warning of warnings) {
      switch (warning.level) {
        case WarningLevel.CRITICAL:
          score += 100;
          break;
        case WarningLevel.DANGER:
          score += 50;
          break;
        case WarningLevel.WARNING:
          score += 25;
          break;
        case WarningLevel.INFO:
          score += 0;
          break;
      }
    }

    return Math.min(score, 100);
  }
}

/**
 * Hook for React components to validate transactions
 */
export function useTransactionValidator(tx: TransactionData | null) {
  if (!tx) {
    return { warnings: [], riskScore: 0, isSuspicious: false };
  }

  const warnings = TransactionValidator.validateTransaction(tx);
  const riskScore = TransactionValidator.getRiskScore(tx);
  const isSuspicious = TransactionValidator.isSuspicious(tx);

  return { warnings, riskScore, isSuspicious };
}

