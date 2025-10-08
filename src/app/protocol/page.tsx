import React from 'react';

const ProtocolPage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green mb-2 font-mono text-sm">
              PROTOCOL
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              BSC AI Terminal Protocol
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Built on Binance Smart Chain with AI-powered natural language processing,
              ensuring real-time data access and degen-friendly intelligence.
            </p>
          </div>

          {/* Protocol Features */}
          <div className="mb-16 space-y-8">
            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                AI Query Engine
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Natural language processing that converts plain English questions
                into BSC blockchain queries with instant AI-powered responses.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">
                    • Natural Language
                  </div>
                  <div className="text-gray-400">
                    Ask questions in plain English, no SQL needed
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">
                    • AI Processing
                  </div>
                  <div className="text-gray-400">
                    Intelligent query interpretation and response formatting
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Instant Responses</div>
                  <div className="text-gray-400">
                    Terminal-style answers in milliseconds
                  </div>
                </div>
              </div>
            </div>

            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                BSC Data Integration
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Direct integration with Binance Smart Chain via Etherscan V2 Multichain API
                and CoinGecko for real-time prices and on-chain data.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">• Real-time Prices</div>
                  <div className="text-gray-400">
                    Live token prices via CoinGecko API
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• On-chain Data</div>
                  <div className="text-gray-400">
                    Balances, transactions via Etherscan V2
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Multi-chain Ready</div>
                  <div className="text-gray-400">
                    Supports 60+ chains with same API key
                  </div>
                </div>
              </div>
            </div>

            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                Open Source & Community Governed
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Fully open source protocol with transparent development and
                $ZIRC token holder governance over features and upgrades.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">• Open Protocol</div>
                  <div className="text-gray-400">
                    All code publicly available on GitHub
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">
                    • DAO Governance
                  </div>
                  <div className="text-gray-400">
                    $ZIRC holders vote on protocol upgrades
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Permissionless</div>
                  <div className="text-gray-400">
                    Anyone can query, build, and contribute
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mb-16">
            <h3 className="mb-8 font-mono text-2xl text-white">
              Technical Architecture
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-green h-2 w-2"></div>
                  <span className="text-gray-300">
                    Blockchain: Binance Smart Chain (BSC)
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-green h-2 w-2"></div>
                  <span className="text-gray-300">
                    Data APIs: Etherscan V2 + CoinGecko
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-green h-2 w-2"></div>
                  <span className="text-gray-300">
                    AI Engine: Natural Language Processing
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Interface: Terminal-style CLI
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Wallet: MetaMask + Coinbase integration
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Governance: $ZIRC DAO Framework
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="hover:bg-neon-green mx-auto mb-8 flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              LAUNCH TERMINAL
              <span>→</span>
            </button>
            <p className="font-mono text-sm text-gray-400">
              Start querying BSC data with AI-powered intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolPage;
