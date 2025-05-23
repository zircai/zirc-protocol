const STEPS = [
  {
    step: '1',
    title: 'Open the app',
    description: 'Launch the terminal or web dApp.'
  },
  {
    step: '2',
    title: 'Connect wallet or generate anon key',
    description: 'Choose privacy: connect your wallet or use a throwaway key.'
  },
  {
    step: '3',
    title: 'Join rooms or start private chats',
    description: 'Jump into public rooms or create encrypted private chats.'
  },
  {
    step: '4',
    title: 'Fork it, build on it, own your comms',
    description: 'Hack, extend, or self-host. The protocol is yours.'
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-28 lg:py-32 bg-black border-b border-neon-green/20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-mono font-bold text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-neon-green/30 bg-black/60 rounded-lg shadow-lg font-mono">
              <div className="text-neon-green text-4xl mb-2">{step.step}</div>
              <h3 className="text-xl text-neon-green mb-2">{step.title}</h3>
              <p className="text-gray-300 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 