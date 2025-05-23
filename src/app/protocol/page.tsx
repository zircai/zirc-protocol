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
              Decentralized Protocols
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Built on decentralized infrastructure ensuring transparency,
              security, and collective ownership.
            </p>
          </div>

          {/* Protocol Features */}
          <div className="mb-16 space-y-8">
            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                Decentralized Compute Network
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                A peer-to-peer network of compute providers enabling trustless
                resource sharing and distributed AI training.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">
                    • Trustless Execution
                  </div>
                  <div className="text-gray-400">
                    Smart contracts ensure fair execution and payment
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">
                    • Resource Discovery
                  </div>
                  <div className="text-gray-400">
                    Automated matching of compute requirements
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Fault Tolerance</div>
                  <div className="text-gray-400">
                    Redundancy and automatic failover mechanisms
                  </div>
                </div>
              </div>
            </div>

            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                Tokenized Model Ownership
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Revolutionary token-based system for collective ownership and
                governance of AI models.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">• Ownership Tokens</div>
                  <div className="text-gray-400">
                    Stake-based ownership of trained models
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Revenue Sharing</div>
                  <div className="text-gray-400">
                    Automatic distribution of model earnings
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Governance Rights</div>
                  <div className="text-gray-400">
                    Democratic decision-making for model usage
                  </div>
                </div>
              </div>
            </div>

            <div className="border-neon-green/30 border bg-black/50 p-8">
              <h3 className="text-neon-green mb-4 font-mono text-xl">
                Open Source Infrastructure
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Fully open source protocol ensuring transparency and
                community-driven development.
              </p>
              <div className="grid gap-4 font-mono text-xs md:grid-cols-3">
                <div>
                  <div className="text-neon-cyan mb-1">• Open Protocol</div>
                  <div className="text-gray-400">
                    All protocol code is publicly available
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">
                    • Community Governed
                  </div>
                  <div className="text-gray-400">
                    Token holders vote on protocol upgrades
                  </div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Permissionless</div>
                  <div className="text-gray-400">
                    Anyone can join and contribute to the network
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
                    Consensus Layer: Proof of Compute
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-green h-2 w-2"></div>
                  <span className="text-gray-300">
                    Smart Contracts: Training & Payment
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-green h-2 w-2"></div>
                  <span className="text-gray-300">
                    Storage: IPFS Distributed Storage
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Communication: Peer-to-Peer Network
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Security: Multi-Party Computation
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="bg-neon-cyan h-2 w-2"></div>
                  <span className="text-gray-300">
                    Governance: DAO Framework
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="hover:bg-neon-green mx-auto mb-8 flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              JOIN PROTOCOL
              <span>→</span>
            </button>
            <p className="font-mono text-sm text-gray-400">
              Become part of the decentralized AI revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolPage;
