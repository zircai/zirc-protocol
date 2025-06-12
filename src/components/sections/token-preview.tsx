'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TokenPreview = () => {
  return (
    <section className="relative border-neon-green/20 border-y bg-black py-16 md:py-28">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
        style={{
          backgroundPosition: '-1px -1px',
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="text-neon-green mb-2 font-mono text-sm">
              $ZIRC
            </div>
            <h2 className="mb-6 font-mono text-3xl text-white md:text-5xl">
              Powering the Terminal
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-mono text-xl text-gray-300">
              The native token enabling decentralized governance, rewards, and premium features.
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Earn
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Earn $ZIRC through active participation, hosting rooms, and community contributions.
              </p>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Govern
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Vote on protocol upgrades, feature proposals, and treasury management.
              </p>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Access
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Unlock premium features, encrypted rooms, and advanced tools with $ZIRC.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/token">
              <Button className="bg-[#61D040] text-black hover:bg-[#61D040]/90">
                Learn More About $ZIRC
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenPreview; 