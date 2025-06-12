import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple Tokenomics | zIRC',
  description: 'Learn about $ZIRC token economics, distribution, utility, and governance. Powering the future of decentralized communication.',
  keywords: [
    'zIRC',
    'Tokenomics',
    'Cryptocurrency',
    'Token Distribution',
    'Governance',
    'DeFi',
    'Decentralized',
    'Blockchain',
    'Token Utility',
  ],
  openGraph: {
    title: 'zIRC Simple Tokenomics – Powering the Terminal',
    description: 'Learn about $ZIRC token economics, distribution, utility, and governance. Powering the future of decentralized communication.',
    type: 'website',
  },
};

const SimpleTokenomicsPage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green mb-2 font-mono text-sm">
              $ZIRC
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              Token Economics
              <br />
              Powering the Terminal
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              $ZIRC token enables decentralized governance, rewards participation, and powers the zIRC ecosystem.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Token Utility
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                $ZIRC powers core platform features and enables user participation in the ecosystem.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Access to premium features</li>
                <li>• Governance voting rights</li>
                <li>• Staking rewards</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Distribution
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Fair and transparent token distribution ensuring long-term sustainability.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Community & Airdrop: 30%</li>
                <li>• Team & Devs: 20%</li>
                <li>• Treasury: 20%</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Earning Mechanisms
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Multiple ways to earn $ZIRC through active participation and contribution.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Chat participation rewards</li>
                <li>• Room hosting incentives</li>
                <li>• Community contributions</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Governance
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Decentralized decision-making through token-based voting and proposals.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Protocol upgrades</li>
                <li>• Feature proposals</li>
                <li>• Treasury management</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="hover:bg-neon-green mx-auto mb-8 flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              CLAIM AIRDROP
              <span>→</span>
            </button>
            <p className="font-mono text-sm text-gray-400">
              Join the zIRC ecosystem and be part of the future of decentralized communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTokenomicsPage; 