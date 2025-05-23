import { ShieldCheck, Network, Terminal, Gamepad2 } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Zero-Knowledge Chat Protocol',
    description: 'Every line encrypted before it leaves your machine.'
  },
  {
    icon: Network,
    title: 'P2P Mesh Network',
    description: 'Decentralised by design. Runs without servers or central points.'
  },
  {
    icon: Terminal,
    title: 'Built for Devs',
    description: 'CLI interface, plugin architecture, fully open source.'
  },
  {
    icon: Gamepad2,
    title: 'Retro Core, Future Proof',
    description: 'It feels like 1999. It works like 2049.'
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-16 md:py-28 lg:py-32 bg-black border-t border-b border-neon-green/20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-mono font-bold text-white mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-neon-green/30 bg-black/60 rounded-lg shadow-lg">
              <feature.icon className="w-12 h-12 mb-4 text-neon-green" />
              <h3 className="font-mono text-xl text-neon-green mb-2">{feature.title}</h3>
              <p className="text-gray-300 font-mono text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 