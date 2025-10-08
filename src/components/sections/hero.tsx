'use client';

import { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import AITerminal from '@/components/ui/ai-terminal';

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
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

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
        <button 
          className="bg-neon-green px-8 py-4 font-mono text-lg text-black shadow-lg transition hover:bg-white"
          role="button"
          onClick={() => !isConnected && connect({ connector: connectors[0] })}
        >
          {isConnected ? 'Terminal Ready' : CTA}
        </button>
        {/* AI Terminal */}
        <div className="mt-16 w-full">
          <AITerminal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
