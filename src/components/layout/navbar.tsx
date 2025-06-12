'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Activity } from 'lucide-react';
import AudioPlayer from '../ui/audio-player';

const ASCII_BORDER = '═══════════════════════════════════════════════';

// Memecoin pricing data that scrolls across the top
const memecoinPricing = [
  {
    coin: 'DOGE',
    price: '$0.1234',
    change: '+2.3%',
    volume: '$1.2B',
    mcap: '$17.8B',
    details:
      'Dogecoin - The original memecoin, started as a joke, now a major player.',
  },
  {
    coin: 'SHIB',
    price: '$0.00001234',
    change: '-1.2%',
    volume: '$856M',
    mcap: '$7.2B',
    details: 'Shiba Inu - The Dogecoin killer, with its own ecosystem.',
  },
  {
    coin: 'PEPE',
    price: '$0.0000001234',
    change: '+5.6%',
    volume: '$234M',
    mcap: '$1.1B',
    details: 'Pepe - The frog-themed memecoin that took the market by storm.',
  },
  {
    coin: 'FLOKI',
    price: '$0.0001234',
    change: '-0.8%',
    volume: '$98M',
    mcap: '$892M',
    details: "Floki - Named after Elon Musk's dog, with a Viking theme.",
  },
  {
    coin: 'BONK',
    price: '$0.0000000234',
    change: '+3.4%',
    volume: '$45M',
    mcap: '$156M',
    details:
      "Bonk - Solana's first dog coin, gaining traction in the ecosystem.",
  },
  {
    coin: 'WOJAK',
    price: '$0.0000000123',
    change: '-2.1%',
    volume: '$12M',
    mcap: '$89M',
    details: 'Wojak - Based on the popular internet meme character.',
  },
  {
    coin: 'SAMO',
    price: '$0.01234',
    change: '+4.5%',
    volume: '$34M',
    mcap: '$445M',
    details: 'Samoyedcoin - The unofficial mascot of Solana.',
  },
  {
    coin: 'MYRO',
    price: '$0.0000000345',
    change: '-1.8%',
    volume: '$23M',
    mcap: '$67M',
    details: 'Myro - Another Solana-based dog coin gaining popularity.',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tickerOffset, setTickerOffset] = useState(0);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [coinModal, setCoinModal] = useState<
    null | (typeof memecoinPricing)[0]
  >(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tickerPaused) return;
    const tickerTimer = setInterval(() => {
      setTickerOffset((prev) => prev - 1);
    }, 50);
    return () => clearInterval(tickerTimer);
  }, [tickerPaused]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // Handlers for pausing ticker on menu hover
  const handleTickerMouseEnter = () => setTickerPaused(true);
  const handleTickerMouseLeave = () => setTickerPaused(false);

  return (
    <>
      {/* Memecoin Pricing Ticker */}
      <div
        className="text-neon-green border-neon-green/30 overflow-hidden border-b bg-black py-1 font-mono text-xs"
        onMouseEnter={handleTickerMouseEnter}
        onMouseLeave={handleTickerMouseLeave}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${tickerOffset}px)` }}
        >
          {[...memecoinPricing, ...memecoinPricing].map((coin, index) => (
            <button
              key={index}
              className="hover:text-neon-cyan mr-8 flex items-center bg-transparent hover:underline focus:outline-none"
              style={{ cursor: 'pointer' }}
              onClick={() => setCoinModal(coin)}
              tabIndex={0}
              aria-label={`Show info for ${coin.coin}`}
            >
              <span className="text-neon-cyan mr-2">{coin.coin}</span>
              <span className="text-neon-green mr-2">{coin.price}</span>
              <span
                className={
                  coin.change.startsWith('+')
                    ? 'text-green-500'
                    : 'text-red-500'
                }
              >
                {coin.change}
              </span>
              <span className="mr-2 text-gray-400">Vol: {coin.volume}</span>
              <span className="mr-2 text-gray-400">MCap: {coin.mcap}</span>
              <span className="mr-4 text-gray-600">|</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <header className="border-neon-green sticky top-0 z-50 border-b bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="border-neon-green group-hover:border-neon-cyan flex h-8 w-8 items-center justify-center border-2 transition-colors">
                  <Activity className="text-neon-green group-hover:text-neon-cyan h-4 w-4" />
                </div>
                <div className="bg-neon-green absolute -top-1 -right-1 h-2 w-2 animate-ping rounded-full"></div>
              </div>
              <div className="font-mono">
                <div className="text-lg font-bold text-white">
                  z<span className="text-neon-green italic">IRC</span>
                </div>
              </div>
            </Link>

            {/* Right side items */}
            <div className="hidden items-center gap-6 font-mono text-sm lg:flex">
              <Link 
                href="/token" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 min-w-12 items-center justify-center border transition-all duration-300 px-2 font-mono text-base font-bold"
                title="$ZIRC Token"
              >
                $ZIRC
              </Link>
              <Link 
                href="https://github.com/zircai/zirc-protocol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 w-8 items-center justify-center border transition-all duration-300"
                title="GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link 
                href="https://x.com/zircai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 w-8 items-center justify-center border transition-all duration-300"
                title="Twitter"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://app.zirc.ai/">
                <button 
                  className="hover:bg-neon-green flex items-center gap-2 bg-white px-4 py-2 font-mono text-sm text-black transition-colors"
                  title="Launch zIRC App"
                >
                  Launch zIRC
                  <span>→</span>
                </button>
              </Link>
              <div title="Audio Player">
                <AudioPlayer />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="border-neon-green text-neon-green hover:bg-neon-green flex h-10 w-10 items-center justify-center border transition-all duration-300 hover:text-black lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Memecoin Info Modal */}
      {coinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="border-neon-green relative max-w-xs min-w-[320px] rounded-lg border-2 bg-black p-8 font-mono text-white">
            <button
              className="text-neon-green absolute top-2 right-2 hover:text-white"
              onClick={() => setCoinModal(null)}
              aria-label="Close coin info dialog"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-4">
              <div className="text-neon-cyan text-lg font-bold">
                {coinModal.coin}
              </div>
              <div className="text-neon-green mb-2 text-sm">
                {coinModal.price} • {coinModal.change}
              </div>
              <div className="text-neon-green mb-2 text-xs">
                Volume: {coinModal.volume}
              </div>
              <div className="text-neon-green mb-2 text-xs">
                Market Cap: {coinModal.mcap}
              </div>
              <div className="mb-2 text-sm text-gray-300">
                {coinModal.details}
              </div>
            </div>
            <button
              className="bg-neon-green mt-2 w-full rounded py-2 font-bold text-black transition hover:bg-white"
              onClick={() => setCoinModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center lg:hidden">
          <div
            className="absolute inset-0 bg-black/90 transition-opacity duration-300 opacity-100"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="border-neon-green relative w-full max-w-sm mx-auto border-2 bg-black p-6 font-mono animate-fade-in-up" style={{zIndex: 50}}>
            {/* Mobile Menu Header */}
            <div className="border-neon-green/30 mb-6 border-b pb-4">
              <div className="text-neon-cyan mb-2 text-sm">
                {ASCII_BORDER.slice(0, 25)}
              </div>
              <div className="text-neon-green text-lg font-bold">
                MOBILE_INTERFACE
              </div>
              <div className="text-neon-cyan mt-2 text-sm">
                {ASCII_BORDER.slice(0, 25)}
              </div>
            </div>

            {/* Main Navigation Links (Mobile) - now in a single row */}
            <div className="flex items-center justify-between gap-3 mb-6">
              <Link 
                href="/token" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 min-w-12 items-center justify-center border transition-all duration-300 px-2 font-mono text-base font-bold"
                title="$ZIRC Token"
                onClick={() => setIsMenuOpen(false)}
              >
                $ZIRC
              </Link>
              <Link 
                href="https://github.com/zircai/zirc-protocol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 w-8 items-center justify-center border transition-all duration-300"
                title="GitHub Repository"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://x.com/zircai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black flex h-8 w-8 items-center justify-center border transition-all duration-300"
                title="Twitter"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <div title="Audio Player">
                <AudioPlayer />
              </div>
            </div>

            {/* Launch zIRC Button with Green Lines */}
            <div className="my-8">
              <div className="border-t border-neon-green mb-4"></div>
              <a
                href="https://app.zirc.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-neon-green flex items-center gap-2 bg-white px-4 py-2 font-mono text-sm text-black transition-colors"
                title="Launch zIRC App"
              >
                Launch zIRC
                <span>→</span>
              </a>
              <div className="border-t border-neon-green mt-4"></div>
            </div>

            {/* Mobile Status */}
            <div className="border-neon-green/30 text-neon-green mt-6 border-t pt-4 text-xs">
              <div>
                STATUS: MOBILE_MODE | TIME: {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
