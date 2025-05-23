const INFRA_LOGOS = [
  { src: '/logos/ipfs.svg', alt: 'IPFS' },
  { src: '/logos/libp2p.svg', alt: 'libp2p' },
  { src: '/logos/walletconnect.svg', alt: 'WalletConnect' },
  // Add more as needed
];

export default function Community() {
  return (
    <section className="border-neon-green/20 border-b bg-black py-16 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-white md:text-5xl">
          Community & Infra
        </h2>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
          {INFRA_LOGOS.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto grayscale transition hover:grayscale-0"
            />
          ))}
          <div className="ml-8 flex flex-col items-center justify-center">
            <div className="text-neon-green font-mono text-lg">★ 1,337</div>
            <div className="font-mono text-xs text-gray-400">GitHub Stars</div>
          </div>
        </div>
        <div className="mb-8 text-center">
          <a
            href="https://matrix.to/#/#yourroom:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-green inline-block rounded px-6 py-3 font-mono text-black shadow transition hover:bg-white"
          >
            Join the Dev Chat
          </a>
        </div>
        <div className="mt-8 text-center">
          <div className="border-neon-green/40 text-neon-green inline-block rounded-lg border bg-black px-6 py-4 font-mono text-lg">
            Join our geek army. Fork, patch, or write docs. No gatekeeping here.
          </div>
        </div>
      </div>
    </section>
  );
}
