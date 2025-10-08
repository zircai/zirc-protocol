'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Coins, Network, Code, ArrowLeft } from 'lucide-react';

const FeaturesPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const upcomingFeatures = [
    {
      icon: Terminal,
      title: 'AI-Powered Queries',
      description: 'Ask natural questions: "show CAKE price", "top BNB holders", "my balance". Get instant terminal-style answers.',
      status: 'Beta Testing',
      examples: ['show CAKE price', 'top BNB holders', 'my balance'],
    },
    {
      icon: Coins,
      title: 'Real-time BSC Data',
      description: 'Live prices, wallet balances, transaction details, and market insights from Binance Smart Chain.',
      status: 'Live',
      examples: ['BNB price now', 'wallet balance 0x123...', 'CAKE volume today'],
    },
    {
      icon: Network,
      title: 'Degen-Friendly Interface',
      description: 'No complex dashboards. Just terminal commands and AI responses. Built for crypto natives.',
      status: 'Operational',
      examples: ['Simple CLI commands', 'No learning curve', 'Instant responses'],
    },
    {
      icon: Code,
      title: 'Terminal Aesthetic',
      description: 'Retro CLI vibes meet modern blockchain data. Fast, direct, and no-nonsense.',
      status: 'Live',
      examples: ['Hacker aesthetic', 'Monospace fonts', 'Neon green theme'],
    },
  ];

  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <Link 
            href="/"
            className="text-neon-cyan hover:text-neon-green mb-8 inline-flex items-center gap-2 font-mono text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Terminal
          </Link>

          {/* Header */}
          <div className="border-neon-green/30 mb-12 border-b pb-8">
            <div className="text-neon-green mb-2 font-mono text-sm">
              {'>'} SYSTEM_FEATURES_LOADING...
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              BSC AI Terminal
              <br />
              <span className="text-neon-green">Features</span>
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Ask natural questions about BSC data and get instant AI-powered insights. No dashboards, just terminal-style answers for degens.
            </p>
          </div>

          {/* Terminal Status */}
          <div className="border-neon-green/30 mb-12 border bg-black/50 p-6 font-mono">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-neon-cyan text-sm">SYSTEM STATUS</div>
              <div className="text-gray-400 text-xs">
                {currentTime.toLocaleTimeString()} UTC
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-neon-green h-2 w-2 animate-pulse rounded-full"></span>
                <span className="text-gray-300">Core Terminal: </span>
                <span className="text-neon-green">OPERATIONAL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-500 h-2 w-2 animate-pulse rounded-full"></span>
                <span className="text-gray-300">AI Engine: </span>
                <span className="text-yellow-500">BETA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-neon-cyan h-2 w-2 animate-pulse rounded-full"></span>
                <span className="text-gray-300">BSC Data Feed: </span>
                <span className="text-neon-cyan">LIVE</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="border-neon-green/30 hover:border-neon-green/60 group border bg-black/30 p-6 transition-all"
              >
                <div className="mb-4 flex items-start justify-between">
                  <feature.icon className="text-neon-green h-8 w-8" />
                  <span className="text-neon-cyan rounded border border-neon-cyan/30 px-2 py-1 font-mono text-xs">
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-neon-green mb-2 font-mono text-xl">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="border-neon-green/30 mb-12 border-t pt-12">
            <h2 className="text-neon-green mb-8 text-center font-mono text-3xl">
              How BSC AI Terminal Works
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Connect Wallet',
                  description: 'Link your MetaMask or Coinbase wallet to access BSC data.',
                },
                {
                  step: '2',
                  title: 'Ask Questions',
                  description: 'Type natural queries: "CAKE price", "top BNB holders", "BNB volume today".',
                },
                {
                  step: '3',
                  title: 'Get AI Insights',
                  description: 'Receive instant, formatted responses with real-time BSC data.',
                },
                {
                  step: '4',
                  title: 'Trade Smarter',
                  description: 'Make informed decisions with AI-powered BSC analytics at your fingertips.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="border-neon-green/30 border bg-black/30 p-6 text-center"
                >
                  <div className="text-neon-green mb-2 font-mono text-4xl">{step.step}</div>
                  <h3 className="text-neon-green mb-2 font-mono text-xl">{step.title}</h3>
                  <p className="font-mono text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="border-neon-cyan/50 border bg-black/50 p-8 text-center">
            <div className="text-neon-cyan mb-4 font-mono text-sm">
              {'>'} FULL_FEATURE_DOCUMENTATION_LOADING...
            </div>
            <h2 className="text-neon-green mb-4 font-mono text-3xl">
              Detailed Docs Coming Soon
            </h2>
            <p className="mb-6 font-mono text-gray-300">
              We're building comprehensive documentation for all features.
              <br />
              Join our community to get early access and updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://x.com/zircai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-green hover:bg-neon-cyan px-6 py-3 font-mono text-black transition-colors"
              >
                Follow on X/Twitter
              </Link>
              <Link
                href="/"
                className="border-neon-green text-neon-green hover:bg-neon-green border px-6 py-3 font-mono transition-colors hover:text-black"
              >
                Back to Terminal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
