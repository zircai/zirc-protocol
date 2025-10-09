'use client';

import { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { Wallet, ChevronDown, X, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from './button';
import { SessionSecurity } from '@/lib/session-security';
import { SecurityLogger } from '@/lib/security-logger';

export function WalletConnectButton() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sessionWarning, setSessionWarning] = useState(false);
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  // Session security with auto-disconnect
  useEffect(() => {
    if (!isConnected || !address) return;

    // Log wallet connection
    SecurityLogger.walletConnected(address, connector?.name);

    // Run security checks
    const securityCheck = SessionSecurity.runSecurityChecks(['zirc.ai', 'localhost']);
    if (!securityCheck.passed) {
      securityCheck.errors.forEach(error => {
        console.error(error);
        alert(error); // Show critical warnings to user
      });
    }

    // Start session timeout
    const cleanup = SessionSecurity.startInactivityTimer(
      () => {
        // Auto-disconnect on timeout
        disconnect();
        setSessionWarning(false);
        console.log('[Security] Auto-disconnected due to inactivity');
      },
      () => {
        // Warning before timeout
        setSessionWarning(true);
      }
    );

    return () => {
      cleanup();
      SessionSecurity.sanitizeLocalStorage();
    };
  }, [isConnected, address, connector, disconnect]);

  const handleConnect = (connectorItem: any) => {
    try {
      connect({ connector: connectorItem });
      setShowModal(false);
    } catch (error) {
      SecurityLogger.error('wallet_connection_failed', error);
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = () => {
    if (address) {
      SecurityLogger.walletDisconnected(address);
    }
    disconnect();
    setShowModal(false);
    setSessionWarning(false);
    SessionSecurity.clearStorageOnDisconnect(['theme', 'preferences']);
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const getWalletIcon = (connectorId: string) => {
    // You can add custom wallet icons here
    return <Wallet className="h-5 w-5" />;
  };

  if (isConnected && address) {
    return (
      <div className="relative">
        <Button
          onClick={() => setShowModal(!showModal)}
          className="bg-neon-green text-black hover:bg-neon-green/90 font-mono flex items-center gap-2"
        >
          <Wallet className="h-4 w-4" />
          <span className="hidden md:inline">{formatAddress(address)}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>

        {showModal && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setShowModal(false)}
            />
            
            {/* Modal */}
            <div className="absolute right-0 mt-2 z-50 w-80 bg-black border border-neon-green/40 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-black/80 border-b border-neon-green/20 p-4 flex items-center justify-between">
                <h3 className="text-neon-green font-mono font-semibold">Account</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Session Warning */}
                {sessionWarning && (
                  <div className="bg-yellow-500/10 border border-yellow-500/40 rounded p-3 mb-2">
                    <p className="text-yellow-400 text-xs font-mono">
                      ⚠️ Session expiring soon. Activity will keep you connected.
                    </p>
                  </div>
                )}

                {/* Wallet Info */}
                <div className="bg-black/60 border border-neon-green/20 rounded p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 font-mono">Connected with {connector?.name}</span>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-center justify-between">
                    <span className="text-white font-mono">{formatAddress(address)}</span>
                    <div className="flex gap-2">
                      <button
                        onClick={copyAddress}
                        className="text-neon-cyan hover:text-neon-green transition"
                        title="Copy address"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                      <a
                        href={`https://bscscan.com/address/${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-cyan hover:text-neon-green transition"
                        title="View on BSCScan"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Balance */}
                  {balance && (
                    <div className="pt-2 border-t border-neon-green/10">
                      <p className="text-sm text-gray-400 font-mono">Balance</p>
                      <p className="text-neon-green font-mono font-semibold">
                        {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
                      </p>
                    </div>
                  )}
                </div>

                {/* Disconnect Button */}
                <Button
                  onClick={handleDisconnect}
                  variant="outline"
                  className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 font-mono"
                >
                  Disconnect Wallet
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-neon-green text-black hover:bg-neon-green/90 font-mono flex items-center gap-2"
      >
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>

      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-black border border-neon-green/40 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-black/80 border-b border-neon-green/20 p-4 flex items-center justify-between">
                <h3 className="text-neon-green font-mono font-semibold text-lg">Connect Wallet</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Wallet Options */}
              <div className="p-4 space-y-2">
                <p className="text-gray-400 text-sm font-mono mb-4">
                  Connect to Binance Smart Chain (BSC)
                </p>

                {connectors.map((connector) => (
                  <button
                    key={connector.id}
                    onClick={() => handleConnect(connector)}
                    disabled={isPending}
                    className="w-full bg-black/60 border border-neon-green/30 hover:border-neon-green/60 hover:bg-black/80 rounded-lg p-4 flex items-center justify-between transition font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3">
                      {getWalletIcon(connector.id)}
                      <span className="text-white font-medium">{connector.name}</span>
                    </div>
                    {isPending && <span className="text-neon-cyan text-sm">Connecting...</span>}
                  </button>
                ))}

                <div className="mt-4 pt-4 border-t border-neon-green/10">
                  <p className="text-gray-500 text-xs font-mono text-center">
                    By connecting, you agree to our Terms of Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
