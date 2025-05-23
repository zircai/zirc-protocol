import { ShieldCheck, Network, Terminal, Gamepad2 } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Zero-Knowledge Chat Protocol',
    description: 'Every line encrypted before it leaves your machine.',
  },
  {
    icon: Network,
    title: 'P2P Mesh Network',
    description:
      'Decentralised by design. Runs without servers or central points.',
  },
  {
    icon: Terminal,
    title: 'Built for Devs',
    description: 'CLI interface, plugin architecture, fully open source.',
  },
  {
    icon: Gamepad2,
    title: 'Retro Core, Future Proof',
    description: 'It feels like 1999. It works like 2049.',
  },
];

export default function KeyFeatures() {
  return (
    <section className="border-neon-green/20 border-t border-b bg-black py-16 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-white md:text-5xl">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="border-neon-green/30 flex flex-col items-center rounded-lg border bg-black/60 p-6 text-center shadow-lg"
            >
              <feature.icon className="text-neon-green mb-4 h-12 w-12" />
              <h3 className="text-neon-green mb-2 font-mono text-xl">
                {feature.title}
              </h3>
              <p className="font-mono text-base text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
