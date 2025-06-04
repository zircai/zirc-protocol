'use client';

import { useEffect, useState } from 'react';

const manifesto = {
  title: "zIRC Manifesto",
  content: `Encrypted hearts and neon dreams.
Through the pixels we've always grown.
This isn't a product. It's a pulse.
zIRC is the song of the stream.`
};

const cards = [
  {
    type: 'phrase',
    content: 'No server, no leash',
    ascii: `
    ╔══════════════╗
    ║  NO SERVER   ║
    ║  NO LEASH    ║
    ╚══════════════╝`
  },
  {
    type: 'phrase',
    content: 'Echoes from the terminal',
    ascii: `
    ╔════════════════╗
    ║    ECHOES     ║
    ║    TERMINAL   ║
    ╚════════════════╝`
  },
  {
    type: 'phrase',
    content: '/join the glitch',
    ascii: `
    ╔══════════════╗
    ║  /JOIN THE   ║
    ║    GLITCH    ║
    ╚══════════════╝`
  },
  {
    type: 'meme',
    title: 'decentralized drainer vs. zIRC degen',
    content: 'Two paths diverged in a digital wood...',
    ascii: `
    ╔══════════════╗
    ║    DRAINER   ║
    ║     VS      ║
    ║    ZIRC     ║
    ╚══════════════╝`
  },
  {
    type: 'poster',
    title: 'The Protocol',
    content: 'Coming soon...',
    ascii: `
    ╔══════════════╗
    ║   PROTOCOL   ║
    ║    POSTER    ║
    ╚══════════════╝`
  },
  {
    type: 'poster',
    title: 'The Network',
    content: 'Coming soon...',
    ascii: `
    ╔══════════════╗
    ║   NETWORK    ║
    ║    POSTER    ║
    ╚══════════════╝`
  }
];

export default function ZinePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Manifesto Section */}
        <div className="mb-12 text-center">
          <h1 className="text-[#00ff00] font-mono text-2xl md:text-3xl mb-6 glitch-text">
            {manifesto.title}
          </h1>
          <div className="text-[#00ff00]/80 font-mono whitespace-pre-line">
            {manifesto.content}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-300
                ${hoveredCard === index ? 'scale-105' : 'scale-100'}
                hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]
                border border-[#00ff00]/30 p-6 h-full
                flex flex-col`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent bg-[length:100%_8px] animate-scan-line"></div>
              </div>

              {/* Static Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[url('data:image/png;base64,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')] opacity-20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-[#00ff00] font-mono">
                  {card.title && (
                    <h3 className="text-xl mb-4">{card.title}</h3>
                  )}
                  <div className="whitespace-pre-line font-mono text-sm mb-4">
                    {card.ascii}
                  </div>
                </div>
                <div className="mt-auto text-[#00ff00]/60 font-mono text-sm">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 