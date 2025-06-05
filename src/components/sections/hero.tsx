'use client';

import { useEffect } from 'react';

const HEADLINE_TOP = 'Chat Meets PumpFun.';
const HEADLINE_BOTTOM = (
  <>
    {'Plus the Alpha.'}
    <span className="animate-blink ml-1 text-xl">█</span>
  </>
);
const SUBHEADLINE =
  'Experience secure, serverless communication with a nostalgic touch. zIRC brings back the essence of IRC with modern privacy.';
const CTA = 'Launch zIRC';

const Hero = () => {
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
        <a 
          href="https://app.zirc.ai/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-green px-8 py-4 font-mono text-lg text-black shadow-lg transition hover:bg-white"
          role="button"
        >
          {CTA}
        </a>
        {/* Simulated terminal window (animated) */}
        <div 
          className="border-neon-green/40 text-neon-green animate-fade-in-slow mx-auto mt-16 w-full max-w-2xl overflow-hidden rounded-lg border bg-black/80 text-left font-mono text-sm shadow-lg"
          role="complementary"
          aria-label="Terminal preview"
        >
          <div className="border-neon-green/20 border-b bg-black/60 px-6 py-4">
            <span className="text-neon-cyan">user@matrix</span>:
            <span className="text-neon-green">~</span>${' '}
            <span className="text-white">connecting...</span>
          </div>
          <div className="h-32 overflow-y-auto bg-black/70 px-6 py-4">
            <div className="animate-blink">
              [12:00] &lt;anon42&gt; joined #cyberpunk
            </div>
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
