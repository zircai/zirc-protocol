import { VenetianMask, Network, Terminal, Gamepad2, Coins, MessageSquare, Code } from 'lucide-react';

const FEATURES = [
  {
    icon: Terminal,
    title: 'AI-Powered Queries',
    description: 'Ask natural questions: "show CAKE price", "top BNB holders", "my balance". Get instant terminal-style answers.',
  },
  {
    icon: Coins,
    title: 'Real-time BSC Data',
    description: 'Live prices, wallet balances, transaction details, and market insights from Binance Smart Chain.',
  },
  {
    icon: Network,
    title: 'Degen-Friendly Interface',
    description: 'No complex dashboards. Just terminal commands and AI responses. Built for crypto natives.',
  },
  {
    icon: Code,
    title: 'Terminal Aesthetic',
    description: 'Retro CLI vibes meet modern blockchain data. Fast, direct, and no-nonsense.',
  },
];

export default function KeyFeatures() {
  return (
    <section 
      className="border-neon-green/20 border-t border-b bg-black py-16 md:py-28 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="features-heading"
          className="mb-12 text-center font-mono text-3xl font-bold text-white md:text-5xl"
        >
          BSC AI Terminal Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <article
              key={i}
              className="border-neon-green/30 flex flex-col items-center rounded-lg border bg-black/60 p-6 text-center shadow-lg"
            >
              <feature.icon className="text-neon-green mb-4 h-12 w-12" aria-hidden="true" />
              <h3 className="text-neon-green mb-2 font-mono text-xl">
                {feature.title}
              </h3>
              <p className="font-mono text-base text-gray-300">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
