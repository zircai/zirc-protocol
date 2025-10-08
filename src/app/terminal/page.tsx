'use client';

import { useAccount } from 'wagmi';
import AITerminal from '@/components/ui/ai-terminal';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Terminal, Zap, TrendingUp } from 'lucide-react';

export default function TerminalPage() {
  const { isConnected } = useAccount();

  return (
    <section className="min-h-screen bg-black pt-20 pb-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="h-full w-full animate-pulse opacity-20"
          style={{
            background:
              'repeating-linear-gradient(180deg, #00ff88 0 1px, transparent 1px 20px)',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="h-8 w-8 text-neon-green" />
            <h1 className="font-mono text-3xl md:text-5xl font-bold text-neon-green">
              BSC AI Terminal
            </h1>
          </div>
          <p className="text-neon-cyan font-mono text-lg mb-6">
            Natural language queries for real-time BSC data
          </p>

          {/* Connection Status */}
          <div className="flex items-center justify-center gap-4">
            <WalletConnectButton />
            {isConnected && (
              <div className="flex items-center gap-2 text-neon-green font-mono text-sm">
                <div className="h-2 w-2 bg-neon-green rounded-full animate-pulse" />
                Connected to BSC
              </div>
            )}
          </div>
        </div>

        {/* Features Banner */}
        {!isConnected && (
          <div className="mb-8 bg-black/60 border border-neon-green/30 rounded-lg p-6">
            <h2 className="text-neon-green font-mono font-semibold mb-4 text-center">
              What you can do with BSC AI Terminal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-neon-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">Price Queries</h3>
                  <p className="text-gray-400 text-sm font-mono">
                    "CAKE price", "show BNB value", "ETH cost"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-neon-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">Wallet Analytics</h3>
                  <p className="text-gray-400 text-sm font-mono">
                    "my balance", "top BNB holders", "check holdings"
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-neon-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-mono font-semibold mb-1">Market Data</h3>
                  <p className="text-gray-400 text-sm font-mono">
                    "CAKE volume", "BSC stats", "trading volume"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal Component */}
        <div className="flex justify-center">
          <AITerminal />
        </div>

        {/* Quick Commands Reference */}
        <div className="mt-8 bg-black/40 border border-neon-green/20 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-neon-green font-mono font-semibold mb-3">🚀 Enhanced Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
            <div>
              <div className="text-neon-cyan mb-2">💰 Portfolio</div>
              <div className="space-y-1 text-gray-300">
                <div>/portfolio - Complete overview</div>
                <div>/balance - BNB balance</div>
                <div>/approvals - Security check</div>
              </div>
            </div>
            <div>
              <div className="text-neon-cyan mb-2">📊 Market</div>
              <div className="space-y-1 text-gray-300">
                <div>/top - Top performers</div>
                <div>/trending - Trending tokens</div>
                <div>/gas - Gas prices</div>
                <div>/market - Market overview</div>
              </div>
            </div>
            <div>
              <div className="text-neon-cyan mb-2">🔄 DeFi</div>
              <div className="space-y-1 text-gray-300">
                <div>/pools - Liquidity pools</div>
                <div>/farms - Yield farming</div>
                <div>/staking - Staking rewards</div>
                <div>/swap [token1] [token2]</div>
              </div>
            </div>
            <div>
              <div className="text-neon-cyan mb-2">🐋 Analytics</div>
              <div className="space-y-1 text-gray-300">
                <div>/whale - Whale movements</div>
                <div>/history [token] - Price history</div>
                <div>/convert [amount] [from] [to]</div>
                <div>/status - System status</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-neon-green/10">
            <p className="text-gray-500 text-xs">
              💡 Enhanced Natural Language: "What's my portfolio worth?", "Show me top performing tokens", "Current gas prices", "Best yield farming opportunities"
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-xs font-mono">
            Data is provided for informational purposes only. Always DYOR (Do Your Own Research).
          </p>
        </div>
      </div>
    </section>
  );
}
