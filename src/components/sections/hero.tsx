'use client';

import { useEffect } from 'react';
// import { useAccount, useConnect } from 'wagmi';
// import AITerminal from '@/components/ui/ai-terminal';

const HEADLINE_TOP = 'AI Terminal for BSC.';
const HEADLINE_BOTTOM = (
  <>
    {'Real-time Alpha.'}
    <span className="animate-blink ml-1 text-xl">█</span>
  </>
);
const SUBHEADLINE =
  'Ask natural questions about BSC data and get instant AI-powered insights. No dashboards, just terminal-style answers for degens.';
const CTA = 'Connect Wallet';

const Hero = () => {
  // const { connect, connectors } = useConnect();
  // const { isConnected } = useAccount();
  const isConnected = false;

  useEffect(() => {
    // Placeholder for any future effects
  }, []);

  return (
    <section 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Matrix/ASCII background animation */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="h-full w-full animate-pulse opacity-30"
          style={{
            background:
              'repeating-linear-gradient(180deg, #00ff88 0 1px, transparent 1px 20px)',
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-neon-green animate-fade-in mb-6 font-mono text-4xl font-bold md:text-6xl lg:text-7xl">
          {HEADLINE_TOP}
          <br />
          {HEADLINE_BOTTOM}
        </h1>
        <p className="text-neon-cyan animate-fade-in-slow mb-10 max-w-2xl font-mono text-xl md:text-2xl">
          {SUBHEADLINE}
        </p>
        <a href="/terminal">
          <button 
            className="bg-neon-green px-8 py-4 font-mono text-lg text-black shadow-lg transition hover:bg-white"
            role="button"
          >
            {isConnected ? 'Open Terminal' : CTA}
          </button>
        </a>
        {/* Simulated terminal window (animated) */}
        <div 
          className="border-neon-green/40 text-neon-green animate-fade-in-slow mx-auto mt-16 w-full max-w-2xl overflow-hidden rounded-lg border bg-black/80 text-left font-mono text-sm shadow-lg"
          role="complementary"
          aria-label="Terminal preview"
        >
          <div className="border-neon-green/20 border-b bg-black/60 px-6 py-4">
            <span className="text-neon-cyan">degen@bsc</span>:
            <span className="text-neon-green">~</span>${' '}
            <span className="text-white">zirc.ai terminal ready</span>
          </div>
          <div className="h-32 overflow-y-auto bg-black/70 px-6 py-4">
            <div className="animate-blink">
              &gt; show top BNB holders
            </div>
            <div className="text-neon-cyan">[AI] Top 5 BNB holders:</div>
            <div className="text-gray-300">1. 0x8894...a1b2 - 1,234,567 BNB</div>
            <div className="text-gray-300">2. 0x4567...c3d4 - 987,654 BNB</div>
            <div className="text-gray-300">3. 0x7890...e5f6 - 654,321 BNB</div>
            <div className="text-gray-400">...</div>
            <div className="animate-blink">
              &gt; what's CAKE price?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
