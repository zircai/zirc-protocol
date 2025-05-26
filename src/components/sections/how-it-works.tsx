const STEPS = [
  {
    step: '1',
    title: 'Open the app',
    description: 'Launch the terminal or web dApp.',
  },
  {
    step: '2',
    title: 'Connect wallet or generate anon key',
    description: 'Choose privacy: connect your wallet or use a throwaway key.',
  },
  {
    step: '3',
    title: 'Join rooms or start private chats',
    description: 'Jump into public rooms or create encrypted private chats.',
  },
  {
    step: '4',
    title: 'Fork it, build on it, own your comms',
    description: 'Hack, extend, or self-host. The protocol is yours.',
  },
];

export default function HowItWorks() {
  return (
    <section 
      className="border-neon-green/20 border-b bg-black py-16 md:py-28 lg:py-32"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="how-it-works-heading"
          className="mb-12 text-center font-mono text-3xl font-bold text-white md:text-5xl"
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <article
              key={i}
              className="border-neon-green/30 flex flex-col items-center rounded-lg border bg-black/60 p-6 text-center font-mono shadow-lg"
            >
              <div className="text-neon-green mb-2 text-4xl" aria-hidden="true">{step.step}</div>
              <h3 className="text-neon-green mb-2 text-xl">{step.title}</h3>
              <p className="text-base text-gray-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
