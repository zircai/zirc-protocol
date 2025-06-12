import { VenetianMask, Network, Terminal, Gamepad2, Coins, MessageSquare, Code } from 'lucide-react';

const FEATURES = [
  {
    icon: Coins,
    title: 'Built for Degens',
    description: 'Meme Market Feeds, Shitcoin Scanner, and Degens-Only Watchlist.',
  },
  {
    icon: MessageSquare,
    title: 'Alpha Terminal',
    description: 'Fully Decentralised, Anon Insider Rooms, /leak Command, Bridge Alerts.',
  },
  {
    icon: VenetianMask,
    title: 'Anonymity-First Tools',
    description: 'Pseudonym Rotation, Hidden Wallet Mode, Chat as anon, and many more.',
  },
  {
    icon: Gamepad2,
    title: 'Retro Core, Future Proof',
    description: 'It feels like 1999. It works like 2049.',
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
          Key Features
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
