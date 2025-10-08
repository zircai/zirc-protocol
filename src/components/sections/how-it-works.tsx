const STEPS = [
  {
    step: '1',
    title: 'Connect Wallet',
    description: 'Link your MetaMask or Coinbase wallet to access BSC data.',
  },
  {
    step: '2',
    title: 'Ask Questions',
    description: 'Type natural queries: "CAKE price", "top BNB holders", "BNB volume today".',
  },
  {
    step: '3',
    title: 'Get AI Insights',
    description: 'Receive instant, formatted responses with real-time BSC data.',
  },
  {
    step: '4',
    title: 'Trade Smarter',
    description: 'Make informed decisions with AI-powered BSC analytics at your fingertips.',
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
          How BSC AI Terminal Works
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
