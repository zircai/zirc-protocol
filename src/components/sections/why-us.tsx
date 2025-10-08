import React from 'react';
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react';

type Status = 'yes' | 'no' | 'partial';

interface Feature {
  feature: string;
  zirc: { value: string; status: Status };
  bscscan: { value: string; status: Status };
  dune: { value: string; status: Status };
  nansen: { value: string; status: Status };
  defillama: { value: string; status: Status };
}

const WhyUs = () => {
  const features: Feature[] = [
    {
      feature: 'Natural Language Queries',
      zirc: { value: 'Ask in plain English', status: 'yes' },
      bscscan: { value: 'Manual navigation', status: 'no' },
      dune: { value: 'Requires SQL', status: 'no' },
      nansen: { value: 'Dashboard-based', status: 'partial' },
      defillama: { value: 'No query interface', status: 'no' },
    },
    {
      feature: 'AI-Powered Analysis',
      zirc: { value: 'AI interprets queries', status: 'yes' },
      bscscan: { value: 'No AI features', status: 'no' },
      dune: { value: 'SQL-based only', status: 'no' },
      nansen: { value: 'Smart labels only', status: 'partial' },
      defillama: { value: 'No AI features', status: 'no' },
    },
    {
      feature: 'BSC-Specific Focus',
      zirc: { value: 'Built for BSC ecosystem', status: 'yes' },
      bscscan: { value: 'BSC explorer', status: 'yes' },
      dune: { value: 'Multi-chain (complex)', status: 'partial' },
      nansen: { value: 'Multi-chain', status: 'partial' },
      defillama: { value: 'Multi-chain', status: 'partial' },
    },
    {
      feature: 'Terminal Interface',
      zirc: { value: 'CLI-style for degens', status: 'yes' },
      bscscan: { value: 'Web explorer', status: 'no' },
      dune: { value: 'Dashboard UI', status: 'no' },
      nansen: { value: 'Dashboard UI', status: 'no' },
      defillama: { value: 'Web dashboard', status: 'no' },
    },
    {
      feature: 'Learning Curve',
      zirc: { value: 'Just ask questions', status: 'yes' },
      bscscan: { value: 'Moderate complexity', status: 'partial' },
      dune: { value: 'High (SQL required)', status: 'no' },
      nansen: { value: 'Moderate', status: 'partial' },
      defillama: { value: 'Simple UI', status: 'yes' },
    },
    {
      feature: 'Pricing',
      zirc: { value: 'Free tier available', status: 'yes' },
      bscscan: { value: 'Free (with ads)', status: 'yes' },
      dune: { value: 'Free + $390/mo Pro', status: 'partial' },
      nansen: { value: '$150-$1,800/month', status: 'no' },
      defillama: { value: 'Completely free', status: 'yes' },
    },
    {
      feature: 'Real-time Price Data',
      zirc: { value: 'Live BSC token prices', status: 'yes' },
      bscscan: { value: 'Token prices available', status: 'yes' },
      dune: { value: 'Depends on queries', status: 'partial' },
      nansen: { value: 'Real-time data', status: 'yes' },
      defillama: { value: 'Real-time TVL', status: 'yes' },
    },
    {
      feature: 'Wallet Integration',
      zirc: { value: 'Connect & query wallet', status: 'yes' },
      bscscan: { value: 'View-only', status: 'partial' },
      dune: { value: 'No wallet connection', status: 'no' },
      nansen: { value: 'Wallet tracking', status: 'yes' },
      defillama: { value: 'Portfolio tracking', status: 'yes' },
    },
    {
      feature: 'Target User',
      zirc: { value: 'BSC degens & traders', status: 'yes' },
      bscscan: { value: 'Developers & users', status: 'partial' },
      dune: { value: 'Data analysts', status: 'no' },
      nansen: { value: 'Institutions & whales', status: 'no' },
      defillama: { value: 'DeFi users', status: 'partial' },
    },
    {
      feature: 'Data Sources',
      zirc: { value: 'BSC API + CoinGecko', status: 'yes' },
      bscscan: { value: 'Direct blockchain', status: 'yes' },
      dune: { value: 'Blockchain data', status: 'yes' },
      nansen: { value: 'Blockchain + enriched', status: 'yes' },
      defillama: { value: 'Protocol aggregation', status: 'yes' },
    },
  ];

  const StatusIcon = ({ status }: { status: Status }) => {
    switch (status) {
      case 'yes':
        return <CheckCircle className="w-5 h-5 text-neon-green" />;
      case 'no':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'partial':
        return <MinusCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="text-neon-green mb-2 font-mono text-sm">
              WHY CHOOSE zIRC
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              The Future of
              <br />
              BSC Data Access
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              zIRC.ai is the <span className="text-neon-green font-bold">first AI-powered terminal for Binance Smart Chain</span>. Ask questions in plain English—no SQL, no complex dashboards, no $150/month subscriptions. Built for BSC degens who want instant on-chain insights without the learning curve.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neon-green/30">
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Feature</th>
                  <th className="p-4 text-left font-mono text-sm text-neon-green">zIRC.ai 🟢</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">BSCScan</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Dune Analytics</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Nansen</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">DeFiLlama</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-neon-green/10 hover:bg-black/50 transition-colors">
                    <td className="p-4 font-mono text-sm text-gray-300">{row.feature}</td>
                    <td className="p-4 font-mono text-sm text-neon-green font-bold">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.zirc.status} />
                        {row.zirc.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.bscscan.status} />
                        {row.bscscan.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.dune.status} />
                        {row.dune.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.nansen.status} />
                        {row.nansen.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.defillama.status} />
                        {row.defillama.value}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 