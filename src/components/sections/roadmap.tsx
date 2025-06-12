import React from 'react';

const Roadmap = () => {
  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="text-neon-green mb-2 font-mono text-sm">
              ROADMAP
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              Building the Future
              <br />
              of Decentralized Chat
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Our journey to revolutionize decentralized communication through zIRC
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Timeline Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 1 - Q2 2025</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Foundation & Launch</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• $ZIRC launch on Solana</li>
                    <li>• $ZIRC Utility 1.0</li>
                    <li>• Messaging App Beta on ETH</li>
                    <li>• Initial token distribution and airdrop</li>
                    <li>• Core chat functionality implementation</li>
                    <li>• Basic room creation and management</li>
                    <li>• Community building initiatives</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 2 - Q3 2025</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Ecosystem Growth</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Degen features pack 1</li>
                    <li>• EVM ready</li>
                    <li>• Staking mechanism implementation</li>
                    <li>• Enhanced room features and moderation tools</li>
                    <li>• Integration with major wallets</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 3 - Q4 2025</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Advanced Features</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Messaging App on Solana</li>
                    <li>• Degen features pack 2</li>
                    <li>• Governance system launch</li>
                    <li>• Premium features marketplace</li>
                    <li>• Developer API and SDK</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 4 - 2026</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Expansion & Innovation</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• DAO governance implementation</li>
                    <li>• Advanced analytics and insights</li>
                    <li>• Enterprise solutions</li>
                    <li>• Global community expansion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 