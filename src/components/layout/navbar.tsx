'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Menu, X } from 'lucide-react';

const ASCII_BORDER = "═══════════════════════════════════════════════";

// Memecoin pricing data that scrolls across the top
const memecoinPricing = [
  { coin: "DOGE", price: "$0.1234", change: "+2.3%", volume: "$1.2B", mcap: "$17.8B", details: "Dogecoin - The original memecoin, started as a joke, now a major player." },
  { coin: "SHIB", price: "$0.00001234", change: "-1.2%", volume: "$856M", mcap: "$7.2B", details: "Shiba Inu - The Dogecoin killer, with its own ecosystem." },
  { coin: "PEPE", price: "$0.0000001234", change: "+5.6%", volume: "$234M", mcap: "$1.1B", details: "Pepe - The frog-themed memecoin that took the market by storm." },
  { coin: "FLOKI", price: "$0.0001234", change: "-0.8%", volume: "$98M", mcap: "$892M", details: "Floki - Named after Elon Musk's dog, with a Viking theme." },
  { coin: "BONK", price: "$0.0000000234", change: "+3.4%", volume: "$45M", mcap: "$156M", details: "Bonk - Solana's first dog coin, gaining traction in the ecosystem." },
  { coin: "WOJAK", price: "$0.0000000123", change: "-2.1%", volume: "$12M", mcap: "$89M", details: "Wojak - Based on the popular internet meme character." },
  { coin: "SAMO", price: "$0.01234", change: "+4.5%", volume: "$34M", mcap: "$445M", details: "Samoyedcoin - The unofficial mascot of Solana." },
  { coin: "MYRO", price: "$0.0000000345", change: "-1.8%", volume: "$23M", mcap: "$67M", details: "Myro - Another Solana-based dog coin gaining popularity." },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [tickerOffset, setTickerOffset] = useState(0);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [coinModal, setCoinModal] = useState<null | typeof memecoinPricing[0]>(null);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (tickerPaused) return;
    const tickerTimer = setInterval(() => {
      setTickerOffset(prev => prev - 1);
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
        className="bg-black text-neon-green font-mono text-xs py-1 overflow-hidden border-b border-neon-green/30"
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
              className="flex items-center mr-8 focus:outline-none hover:underline hover:text-neon-cyan bg-transparent"
              style={{ cursor: 'pointer' }}
              onClick={() => setCoinModal(coin)}
              tabIndex={0}
              aria-label={`Show info for ${coin.coin}`}
            >
              <span className="text-neon-cyan mr-2">{coin.coin}</span>
              <span className="text-neon-green mr-2">{coin.price}</span>
              <span className={coin.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{coin.change}</span>
              <span className="text-gray-400 mr-2">Vol: {coin.volume}</span>
              <span className="text-gray-400 mr-2">MCap: {coin.mcap}</span>
              <span className="text-gray-600 mr-4">|</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-neon-green sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-neon-green flex items-center justify-center group-hover:border-neon-cyan transition-colors">
                  <div className="text-neon-green text-sm font-bold group-hover:text-neon-cyan">Λ</div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
              </div>
              <div className="font-mono">
                <div className="text-lg font-bold text-white">PRIME<span className="text-neon-green italic">Intellect</span></div>
              </div>
            </Link>

            {/* Right side items */}
            <div className="hidden lg:flex items-center gap-6 font-mono text-sm">
              <Link href="/login" className="text-white hover:text-neon-green transition-colors">Terminal</Link>
              <Link href="/signup">
                <button className="bg-white text-black px-4 py-2 font-mono text-sm hover:bg-neon-green transition-colors flex items-center gap-2">
               Connect Wallet
                  <span>→</span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Memecoin Info Modal */}
      {coinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-black border-2 border-neon-green rounded-lg p-8 min-w-[320px] max-w-xs font-mono text-white relative">
            <button
              className="absolute top-2 right-2 text-neon-green hover:text-white"
              onClick={() => setCoinModal(null)}
              aria-label="Close coin info dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="mb-4">
              <div className="text-neon-cyan text-lg font-bold">{coinModal.coin}</div>
              <div className="text-neon-green text-sm mb-2">{coinModal.price} • {coinModal.change}</div>
              <div className="text-neon-green text-xs mb-2">Volume: {coinModal.volume}</div>
              <div className="text-neon-green text-xs mb-2">Market Cap: {coinModal.mcap}</div>
              <div className="text-gray-300 text-sm mb-2">{coinModal.details}</div>
            </div>
            <button
              className="w-full mt-2 bg-neon-green text-black py-2 rounded font-bold hover:bg-white transition"
              onClick={() => setCoinModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/90" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative bg-black border-2 border-neon-green m-4 p-6 font-mono">
            {/* Mobile Menu Header */}
            <div className="border-b border-neon-green/30 pb-4 mb-6">
              <div className="text-neon-cyan text-sm mb-2">{ASCII_BORDER.slice(0, 25)}</div>
              <div className="text-lg font-bold text-neon-green">MOBILE_INTERFACE</div>
              <div className="text-neon-cyan text-sm mt-2">{ASCII_BORDER.slice(0, 25)}</div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-3 border-t border-neon-green/30 pt-4">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full border border-neon-green text-neon-green py-3 font-mono uppercase hover:bg-neon-green hover:text-black transition-all">
                  LOGIN
                </button>
              </Link>
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-white text-black py-3 font-mono uppercase hover:bg-neon-green transition-all">
                  GET STARTED
                </button>
              </Link>
            </div>

            {/* Mobile Status */}
            <div className="mt-6 pt-4 border-t border-neon-green/30 text-xs text-neon-green">
              <div>STATUS: MOBILE_MODE | TIME: {currentTime.toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
