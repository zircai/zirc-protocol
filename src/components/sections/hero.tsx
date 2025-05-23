'use client';
import { useState, useEffect } from 'react';
import { Terminal, Zap, Database, Cpu } from 'lucide-react';

const ASCII_DIVIDER = "═══════════════════════════════════════════════════════════";

const terminalCommands = [
  "DOGE: $0.1234 ▲ 2.3% | Vol: $1.2B | MCap: $17.8B",
  "SHIB: $0.00001234 ▼ 1.2% | Vol: $856M | MCap: $7.2B", 
  "PEPE: $0.0000001234 ▲ 5.6% | Vol: $234M | MCap: $1.1B",
  "FLOKI: $0.0001234 ▼ 0.8% | Vol: $98M | MCap: $892M",
  "BONK: $0.0000000234 ▲ 3.4% | Vol: $45M | MCap: $156M",
  "WOJAK: $0.0000000123 ▼ 2.1% | Vol: $12M | MCap: $89M",
  "SAMO: $0.01234 ▲ 4.5% | Vol: $34M | MCap: $445M",
  "MYRO: $0.0000000345 ▼ 1.8% | Vol: $23M | MCap: $67M"
];

const features = [
  {
    title: "SCALABLE_COMPUTE",
    description: "Distributed GPU infrastructure",
    icon: Cpu,
    color: "text-neon-green",
  },
  {
    title: "AI_TRAINING", 
    description: "Large-scale model development",
    icon: Zap,
    color: "text-neon-cyan",
  },
  {
    title: "RESEARCH_TOOLS",
    description: "Collaborative research platform",
    icon: Database,
    color: "text-neon-blue",
  },
  {
    title: "PROTOCOL_LAYER",
    description: "Decentralized compute protocol",
    icon: Terminal,
    color: "text-neon-purple",
  },
];

const HEADLINE_TOP = 'Chat Meets PumpFun.';
const HEADLINE_BOTTOM = <>{'Minus the BS'}<span className="animate-blink ml-1 text-xl">█</span></>;
const SUBHEADLINE =
  'Fully autonomous. End-to-end encrypted. No servers. No ads. Just raw, retro messaging — for the new web.';
const CTA = 'Enter the Terminal';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [prices, setPrices] = useState({
    DOGE: 0.1234,
    SHIB: 0.00001234,
    PEPE: 0.0000001234,
    FLOKI: 0.0001234,
    BONK: 0.0000000234,
    WOJAK: 0.0000000123,
    SAMO: 0.01234,
    MYRO: 0.0000000345
  });

  useEffect(() => {
    const commandInterval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % terminalCommands.length);
      // Simulate price updates with more frequent changes
      setPrices(prev => ({
        DOGE: prev.DOGE * (1 + (Math.random() * 0.06 - 0.03)),
        SHIB: prev.SHIB * (1 + (Math.random() * 0.06 - 0.03)),
        PEPE: prev.PEPE * (1 + (Math.random() * 0.06 - 0.03)),
        FLOKI: prev.FLOKI * (1 + (Math.random() * 0.06 - 0.03)),
        BONK: prev.BONK * (1 + (Math.random() * 0.06 - 0.03)),
        WOJAK: prev.WOJAK * (1 + (Math.random() * 0.06 - 0.03)),
        SAMO: prev.SAMO * (1 + (Math.random() * 0.06 - 0.03)),
        MYRO: prev.MYRO * (1 + (Math.random() * 0.06 - 0.03))
      }));
    }, 1000); // Updated every second instead of 2 seconds

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(commandInterval);
      clearInterval(progressInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const renderLoadingBar = (progress: number) => {
    const filled = Math.floor((progress / 100) * 40);
    const empty = 40 - filled;
    return `[${"█".repeat(filled)}${"░".repeat(empty)}] ${progress}%`;
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Matrix/ASCII background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full opacity-30 animate-pulse" style={{background: 'repeating-linear-gradient(180deg, #00ff88 0 1px, transparent 1px 20px)'}} />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-neon-green mb-6 animate-fade-in">
          {HEADLINE_TOP}<br />{HEADLINE_BOTTOM}
        </h1>
        <p className="font-mono text-xl md:text-2xl text-neon-cyan mb-10 max-w-2xl animate-fade-in-slow">
          {SUBHEADLINE}
        </p>
        <button className="bg-neon-green text-black font-mono px-8 py-4 rounded-lg text-lg shadow-lg hover:bg-white transition">
          {CTA}
        </button>
        {/* Simulated terminal window (animated) */}
        <div className="mt-16 w-full max-w-2xl mx-auto bg-black/80 border border-neon-green/40 rounded-lg shadow-lg overflow-hidden font-mono text-left text-neon-green text-sm animate-fade-in-slow">
          <div className="px-6 py-4 border-b border-neon-green/20 bg-black/60">
            <span className="text-neon-cyan">user@matrix</span>:<span className="text-neon-green">~</span>$ <span className="text-white">connecting...</span>
          </div>
          <div className="px-6 py-4 h-32 overflow-y-auto bg-black/70">
            <div className="animate-blink">[12:00] &lt;anon42&gt; joined #cyberpunk</div>
            <div>[12:00] &lt;anon42&gt; hello world</div>
            <div>[12:01] &lt;cybercat&gt; welcome to the future</div>
            <div>[12:01] &lt;anon42&gt; is this really p2p?</div>
            <div>[12:01] &lt;cybercat&gt; no servers, no ads, just chat</div>
            <div>[12:02] &lt;anon42&gt; love it</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
