const INFRA_LOGOS = [
  { src: '/logos/ipfs.svg', alt: 'IPFS' },
  { src: '/logos/libp2p.svg', alt: 'libp2p' },
  { src: '/logos/walletconnect.svg', alt: 'WalletConnect' },
  // Add more as needed
];

export default function Community() {
  return (
    <section className="py-16 md:py-28 lg:py-32 bg-black border-b border-neon-green/20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-mono font-bold text-white mb-12">
          Community & Infra
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {INFRA_LOGOS.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          ))}
          <div className="flex flex-col items-center justify-center ml-8">
            <div className="text-neon-green font-mono text-lg">★ 1,337</div>
            <div className="text-gray-400 font-mono text-xs">GitHub Stars</div>
          </div>
        </div>
        <div className="text-center mb-8">
          <a href="https://matrix.to/#/#yourroom:matrix.org" target="_blank" rel="noopener noreferrer" className="inline-block bg-neon-green text-black font-mono px-6 py-3 rounded shadow hover:bg-white transition">
            Join the Dev Chat
          </a>
        </div>
        <div className="text-center mt-8">
          <div className="inline-block bg-black border border-neon-green/40 rounded-lg px-6 py-4 font-mono text-lg text-neon-green">
            Join our geek army. Fork, patch, or write docs. No gatekeeping here.
          </div>
        </div>
      </div>
    </section>
  );
} 