import React from 'react';
import { CheckCircle, XCircle, MinusCircle } from 'lucide-react';

type Status = 'yes' | 'no' | 'partial';

interface Feature {
  feature: string;
  zirc: { value: string; status: Status };
  status: { value: string; status: Status };
  farcaster: { value: string; status: Status };
  xmtp: { value: string; status: Status };
  irc: { value: string; status: Status };
}

const WhyUs = () => {
  const features: Feature[] = [
    {
      feature: 'AI-Powered Analysis',
      zirc: { value: 'Natural language queries', status: 'yes' },
      status: { value: 'Basic charts only', status: 'no' },
      farcaster: { value: 'No data tools', status: 'no' },
      xmtp: { value: 'No data tools', status: 'no' },
      irc: { value: 'No data tools', status: 'no' },
    },
    {
      feature: 'Real-time BSC Data',
      zirc: { value: 'Live prices & balances', status: 'yes' },
      status: { value: 'Limited data', status: 'partial' },
      farcaster: { value: 'No blockchain data', status: 'no' },
      xmtp: { value: 'No blockchain data', status: 'no' },
      irc: { value: 'No blockchain data', status: 'no' },
    },
    {
      feature: 'Terminal Interface',
      zirc: { value: 'CLI-style responses', status: 'yes' },
      status: { value: 'Web dashboards', status: 'no' },
      farcaster: { value: 'Social feeds', status: 'no' },
      xmtp: { value: 'Chat interface', status: 'no' },
      irc: { value: 'Text-based', status: 'yes' },
    },
    {
      feature: 'Degen-Focused',
      zirc: { value: 'Built for crypto natives', status: 'yes' },
      status: { value: 'General purpose', status: 'no' },
      farcaster: { value: 'Social platform', status: 'no' },
      xmtp: { value: 'Communication', status: 'no' },
      irc: { value: 'General chat', status: 'no' },
    },
    {
      feature: 'BSC Integration',
      zirc: { value: 'Native BSC support', status: 'yes' },
      status: { value: 'Limited BSC', status: 'partial' },
      farcaster: { value: 'No BSC support', status: 'no' },
      xmtp: { value: 'No BSC support', status: 'no' },
      irc: { value: 'No BSC support', status: 'no' },
    },
    {
      feature: 'Query Limits',
      zirc: { value: '10 free, unlimited Pro', status: 'yes' },
      status: { value: 'Unlimited', status: 'yes' },
      farcaster: { value: 'No data queries', status: 'no' },
      xmtp: { value: 'No data queries', status: 'no' },
      irc: { value: 'No data queries', status: 'no' },
    },
    {
      feature: 'Wallet Integration',
      zirc: { value: 'MetaMask + Coinbase', status: 'yes' },
      status: { value: 'Basic wallet', status: 'partial' },
      farcaster: { value: 'No wallet needed', status: 'no' },
      xmtp: { value: 'No wallet needed', status: 'no' },
      irc: { value: 'No wallet needed', status: 'no' },
    },
    {
      feature: 'Data Accuracy',
      zirc: { value: 'Real-time BSC data', status: 'yes' },
      status: { value: 'Delayed data', status: 'partial' },
      farcaster: { value: 'No blockchain data', status: 'no' },
      xmtp: { value: 'No blockchain data', status: 'no' },
      irc: { value: 'No blockchain data', status: 'no' },
    },
    {
      feature: 'User Experience',
      zirc: { value: 'Terminal-focused', status: 'yes' },
      status: { value: 'Dashboard-heavy', status: 'no' },
      farcaster: { value: 'Social-focused', status: 'no' },
      xmtp: { value: 'Chat-focused', status: 'no' },
      irc: { value: 'Chat-focused', status: 'no' },
    },
    {
      feature: 'Privacy & Security',
      zirc: { value: 'Wallet-only data access', status: 'yes' },
      status: { value: 'Data collection', status: 'no' },
      farcaster: { value: 'Public posts', status: 'no' },
      xmtp: { value: 'Encrypted messages', status: 'yes' },
      irc: { value: 'Public channels', status: 'no' },
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
            zIRC.ai combines AI-powered queries with real-time BSC data in a terminal interface. While others focus on complex dashboards or social feeds, zIRC builds a direct, degen-friendly BSC intelligence layer.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neon-green/30">
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Feature / Focus</th>
                  <th className="p-4 text-left font-mono text-sm text-neon-green">zIRC.ai 🟢</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">TradingView</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">DeFiPulse</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Dune Analytics</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">BSCScan</th>
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
                        <StatusIcon status={row.status.status} />
                        {row.status.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.farcaster.status} />
                        {row.farcaster.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.xmtp.status} />
                        {row.xmtp.value}
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <StatusIcon status={row.irc.status} />
                        {row.irc.value}
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