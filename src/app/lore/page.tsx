'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const entries = [
  {
    path: '/matrix',
    title: 'The Philosophy',
    description: 'Decentralization isn\'t the future. It\'s the default.',
    status: 'discovered',
    icon: '🌐',
    glitchText: ['PHILOSOPHY', 'MATRIX', 'TRUTH']
  },
  {
    path: '/root',
    title: 'Developer Logs',
    description: 'Whisper channels go live. Only the ones who need to hear will hear.',
    status: 'discovered',
    icon: '📝',
    glitchText: ['LOGS', 'ROOT', 'ACCESS']
  },
  {
    path: '/zine',
    title: 'Visual Manifesto',
    description: 'This isn\'t a product. It\'s a pulse.',
    status: 'discovered',
    icon: '🎨',
    glitchText: ['VISUAL', 'PULSE', 'ART']
  },
  {
    path: '/whoami',
    title: 'Identity Console',
    description: 'Your words, your keys, your channel.',
    status: 'discovered',
    icon: '💻',
    glitchText: ['IDENTITY', 'CONSOLE', 'SELF']
  }
];

export default function LorePage() {
  const [hoveredEntry, setHoveredEntry] = useState<number | null>(null);
  const [glitchIndex, setGlitchIndex] = useState<number[]>(Array(entries.length).fill(0));
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');

  // Typing animation for the header
  useEffect(() => {
    const text = 'Discover the hidden layers of the protocol';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  // Glitch effect for titles
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIndex(prev => 
        prev.map((_, i) => 
          Math.floor(Math.random() * entries[i].glitchText.length)
        )
      );
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Animated Scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent bg-[length:100%_8px] animate-scan-line"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#00ff00] font-mono text-3xl md:text-4xl mb-4 relative">
            <span className="glitch-text">zIRC Lore Terminal</span>
            <span className="absolute top-0 left-0 w-full h-full bg-[#00ff00]/10 animate-pulse"></span>
          </h1>
          <p className="text-[#00ff00]/60 font-mono h-6">
            {isTyping ? (
              <span className="inline-block">
                {typedText}
                <span className="animate-blink">_</span>
              </span>
            ) : (
              <span className="inline-block animate-fade-in">{typedText}</span>
            )}
          </p>
        </div>

        {/* Grid of Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry, index) => (
            <Link
              key={entry.path}
              href={entry.path}
              className={`group relative border border-[#00ff00]/30 p-6 transition-all duration-300
                ${hoveredEntry === index ? 'scale-105' : 'scale-100'}
                hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]
                hover:border-[#00ff00]/60`}
              onMouseEnter={() => setHoveredEntry(index)}
              onMouseLeave={() => setHoveredEntry(null)}
            >
              {/* Glitch Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[#00ff00]/5 animate-glitch"></div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent bg-[length:100%_8px] animate-scan-line"></div>
              </div>

              {/* Static Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-[url('data:image/png;base64,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')] opacity-20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">{entry.icon}</span>
                  <div className="relative">
                    <h2 className="text-[#00ff00] font-mono text-xl group-hover:glitch-text">
                      {entry.title}
                    </h2>
                    <span className="absolute top-0 left-0 text-[#00ff00]/30 font-mono text-xl pointer-events-none">
                      {entry.glitchText[glitchIndex[index]]}
                    </span>
                  </div>
                </div>
                <p className="text-[#00ff00]/60 font-mono group-hover:text-[#00ff00]/80 transition-colors duration-300">
                  {entry.description}
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-[#00ff00]/40 font-mono text-sm">Status:</span>
                  <span className="text-[#00ff00] font-mono text-sm group-hover:animate-pulse">
                    {entry.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-[#00ff00]/40 font-mono text-sm animate-pulse">
            More entries await discovery...
          </p>
        </div>
      </div>
    </div>
  );
} 