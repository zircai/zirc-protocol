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
              of BSC Intelligence
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Our journey to revolutionize BSC data access through AI-powered terminal interface
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
                  <h3 className="mb-4 font-mono text-lg text-white">Core BSC Data Integration</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• $ZIRC launch on BSC</li>
                    <li>• Basic BSC data queries</li>
                    <li>• AI Terminal MVP</li>
                    <li>• Wallet connection (MetaMask, Coinbase)</li>
                    <li>• Price tracking for BNB, CAKE</li>
                    <li>• Balance queries</li>
                    <li>• Community building initiatives</li>
                  </ul>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 2 - Q3 2025</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Advanced AI Analytics</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Advanced BSC analytics</li>
                    <li>• Multi-token support</li>
                    <li>• Transaction analysis</li>
                    <li>• Portfolio tracking</li>
                    <li>• Custom alerts and notifications</li>
                    <li>• Pro tier with unlimited queries</li>
                  </ul>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 3 - Q4 2025</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Multi-Chain Expansion</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Ethereum integration</li>
                    <li>• Polygon support</li>
                    <li>• Cross-chain analytics</li>
                    <li>• Advanced trading signals</li>
                    <li>• Developer API and SDK</li>
                  </ul>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative">
                <div className="border-neon-green/30 border bg-black/50 p-6 rounded-lg hover:border-neon-green transition-colors duration-300 h-full">
                  <div className="text-neon-green mb-2 font-mono text-sm">PHASE 4 - 2026</div>
                  <h3 className="mb-4 font-mono text-lg text-white">Institutional Features</h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Institutional dashboard</li>
                    <li>• Advanced risk analytics</li>
                    <li>• White-label solutions</li>
                    <li>• Global BSC ecosystem integration</li>
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