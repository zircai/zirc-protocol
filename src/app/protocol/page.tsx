import React from 'react';

const ProtocolPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green font-mono text-sm mb-2">PROTOCOL</div>
            <h1 className="text-4xl md:text-6xl font-mono text-white mb-6">
              Decentralized Protocols
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              Built on decentralized infrastructure ensuring transparency, security, and collective ownership.
            </p>
          </div>

          {/* Protocol Features */}
          <div className="space-y-8 mb-16">
            <div className="border border-neon-green/30 bg-black/50 p-8">
              <h3 className="text-xl font-mono text-neon-green mb-4">Decentralized Compute Network</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                A peer-to-peer network of compute providers enabling trustless resource sharing and distributed AI training.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-neon-cyan mb-1">• Trustless Execution</div>
                  <div className="text-gray-400">Smart contracts ensure fair execution and payment</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Resource Discovery</div>
                  <div className="text-gray-400">Automated matching of compute requirements</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Fault Tolerance</div>
                  <div className="text-gray-400">Redundancy and automatic failover mechanisms</div>
                </div>
              </div>
            </div>

            <div className="border border-neon-green/30 bg-black/50 p-8">
              <h3 className="text-xl font-mono text-neon-green mb-4">Tokenized Model Ownership</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Revolutionary token-based system for collective ownership and governance of AI models.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-neon-cyan mb-1">• Ownership Tokens</div>
                  <div className="text-gray-400">Stake-based ownership of trained models</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Revenue Sharing</div>
                  <div className="text-gray-400">Automatic distribution of model earnings</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Governance Rights</div>
                  <div className="text-gray-400">Democratic decision-making for model usage</div>
                </div>
              </div>
            </div>

            <div className="border border-neon-green/30 bg-black/50 p-8">
              <h3 className="text-xl font-mono text-neon-green mb-4">Open Source Infrastructure</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Fully open source protocol ensuring transparency and community-driven development.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <div className="text-neon-cyan mb-1">• Open Protocol</div>
                  <div className="text-gray-400">All protocol code is publicly available</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Community Governed</div>
                  <div className="text-gray-400">Token holders vote on protocol upgrades</div>
                </div>
                <div>
                  <div className="text-neon-cyan mb-1">• Permissionless</div>
                  <div className="text-gray-400">Anyone can join and contribute to the network</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-mono text-white mb-8">Technical Architecture</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-green"></div>
                  <span className="text-gray-300">Consensus Layer: Proof of Compute</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-green"></div>
                  <span className="text-gray-300">Smart Contracts: Training & Payment</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-green"></div>
                  <span className="text-gray-300">Storage: IPFS Distributed Storage</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-cyan"></div>
                  <span className="text-gray-300">Communication: Peer-to-Peer Network</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-cyan"></div>
                  <span className="text-gray-300">Security: Multi-Party Computation</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-2 h-2 bg-neon-cyan"></div>
                  <span className="text-gray-300">Governance: DAO Framework</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-white text-black px-8 py-4 font-mono text-lg hover:bg-neon-green transition-all duration-300 flex items-center gap-2 mx-auto mb-8">
              JOIN PROTOCOL
              <span>→</span>
            </button>
            <p className="text-gray-400 font-mono text-sm">
              Become part of the decentralized AI revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolPage; 