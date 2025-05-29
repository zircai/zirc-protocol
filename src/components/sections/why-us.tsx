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
      feature: 'Fully Decentralized',
      zirc: { value: 'Yes (infra + tokens)', status: 'yes' },
      status: { value: 'Yes', status: 'yes' },
      farcaster: { value: 'Yes', status: 'yes' },
      xmtp: { value: 'Yes', status: 'yes' },
      irc: { value: 'Federated', status: 'partial' },
    },
    {
      feature: 'Onchain Token Utility',
      zirc: { value: 'Earn, tip, stake', status: 'yes' },
      status: { value: 'SNT (limited)', status: 'yes' },
      farcaster: { value: 'No token yet', status: 'no' },
      xmtp: { value: 'Infra only', status: 'no' },
      irc: { value: 'None', status: 'no' },
    },
    {
      feature: 'Degen Culture',
      zirc: { value: 'Deeply integrated', status: 'yes' },
      status: { value: 'None', status: 'no' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'None', status: 'no' },
      irc: { value: 'By accident', status: 'yes' },
    },
    {
      feature: 'Terminal-Inspired UI',
      zirc: { value: 'Retro CLI vibes', status: 'yes' },
      status: { value: 'None', status: 'no' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'None', status: 'no' },
      irc: { value: 'Yes', status: 'yes' },
    },
    {
      feature: 'Encrypted Rooms & Access',
      zirc: { value: 'Token-gated + secure', status: 'yes' },
      status: { value: 'Yes', status: 'yes' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'Yes', status: 'yes' },
      irc: { value: 'None', status: 'no' },
    },
    {
      feature: 'Modular Bot & Plugin Support',
      zirc: { value: 'Dev monetization built-in', status: 'yes' },
      status: { value: 'None', status: 'no' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'Indirectly', status: 'yes' },
      irc: { value: 'Manual only', status: 'yes' },
    },
    {
      feature: 'Onchain Governance',
      zirc: { value: 'DAO voting with $ZIRC', status: 'yes' },
      status: { value: 'Yes', status: 'yes' },
      farcaster: { value: 'Yes', status: 'yes' },
      xmtp: { value: 'None', status: 'no' },
      irc: { value: 'None', status: 'no' },
    },
    {
      feature: 'Community Rewards',
      zirc: { value: 'Chat-to-earn model', status: 'yes' },
      status: { value: 'None', status: 'no' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'None', status: 'no' },
      irc: { value: 'None', status: 'no' },
    },
    {
      feature: 'Real-time Chat Experience',
      zirc: { value: 'Focused core', status: 'yes' },
      status: { value: 'Yes', status: 'yes' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'Yes', status: 'yes' },
      irc: { value: 'Yes', status: 'yes' },
    },
    {
      feature: 'Privacy by Design',
      zirc: { value: 'No data collection', status: 'yes' },
      status: { value: 'Yes', status: 'yes' },
      farcaster: { value: 'None', status: 'no' },
      xmtp: { value: 'Yes', status: 'yes' },
      irc: { value: 'Yes', status: 'yes' },
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
              Decentralized Chat
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
            zIRC combines the best of IRC’s simplicity, Web3’s incentives, and crypto-native culture. While others focus on infra, feeds, or privacy alone, zIRC builds a living, earning, degen-native chat layer.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neon-green/30">
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Feature / Focus</th>
                  <th className="p-4 text-left font-mono text-sm text-neon-green">zIRC 🟢</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Status.im</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">Farcaster</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">XMTP</th>
                  <th className="p-4 text-left font-mono text-sm text-gray-400">IRC Clients</th>
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