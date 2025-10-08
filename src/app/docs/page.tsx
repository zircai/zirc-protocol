'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Code, Terminal, Zap, ArrowLeft, ChevronRight } from 'lucide-react';

const DocsPage = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const docCategories = [
    {
      id: 'getting-started',
      icon: Zap,
      title: 'Getting Started',
      items: [
        'Quick Start Guide',
        'Connect Your Wallet',
        'First Query',
        'Understanding Responses',
      ],
    },
    {
      id: 'terminal-commands',
      icon: Terminal,
      title: 'Terminal Commands',
      items: [
        'Price Queries',
        'Balance Checks',
        'Transaction Lookup',
        'Holder Analysis',
      ],
    },
    {
      id: 'api-reference',
      icon: Code,
      title: 'API Reference',
      items: [
        'Authentication',
        'Endpoints',
        'Rate Limits',
        'Error Codes',
      ],
    },
    {
      id: 'guides',
      icon: Book,
      title: 'Guides & Tutorials',
      items: [
        'Track Your Portfolio',
        'Find Whale Wallets',
        'Set Up Alerts',
        'Advanced Queries',
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
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
              {'>'} DOCUMENTATION_SYSTEM_LOADING...
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              BSC AI Terminal
              <br />
              <span className="text-neon-green">Documentation</span>
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Everything you need to master the BSC AI Terminal. Guides, tutorials, and API docs.
            </p>
          </div>

          {/* Doc Categories */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {docCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`border p-6 text-left transition-all ${
                  activeCategory === category.id
                    ? 'border-neon-green bg-black/50'
                    : 'border-neon-green/30 hover:border-neon-green/60 bg-black/30'
                }`}
              >
                <category.icon
                  className={`mb-4 h-8 w-8 ${
                    activeCategory === category.id
                      ? 'text-neon-green'
                      : 'text-neon-cyan'
                  }`}
                />
                <h3 className="text-neon-green mb-3 font-mono text-lg">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 font-mono text-xs text-gray-400"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          {/* Example Documentation Preview */}
          <div className="border-neon-green/40 mb-12 border bg-black/80">
            <div className="border-neon-green/20 border-b bg-black/60 px-6 py-4">
              <h2 className="text-neon-green font-mono text-xl">
                Quick Start Example
              </h2>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-4 text-gray-400">
                # Connect your wallet and start querying BSC data
              </div>
              <div className="border-neon-green/20 space-y-2 border-l-2 bg-black/50 p-4">
                <div className="text-neon-cyan">
                  {'>'} show BNB price
                </div>
                <div className="text-gray-400">
                  [AI] BNB Price: $1,319.78 (+2.34% 24h)
                </div>
                <div className="mt-4 text-neon-cyan">
                  {'>'} my wallet balance
                </div>
                <div className="text-gray-400">
                  [AI] Your BNB balance: 12.5 BNB ($16,497.25)
                </div>
                <div className="mt-4 text-neon-cyan">
                  {'>'} top CAKE holders
                </div>
                <div className="text-gray-400">
                  [AI] Top 5 CAKE holders:
                  <br />
                  1. 0x8894...a1b2 - 1,234,567 CAKE
                  <br />
                  2. 0x4567...c3d4 - 987,654 CAKE
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="border-neon-cyan/50 border bg-black/50 p-8 text-center">
            <Book className="text-neon-cyan mx-auto mb-4 h-12 w-12" />
            <h2 className="text-neon-green mb-4 font-mono text-3xl">
              Full Documentation Coming Soon
            </h2>
            <p className="mb-6 font-mono text-gray-300">
              We're writing comprehensive docs covering every feature, command, and API endpoint.
              <br />
              Join our community for early access and updates.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://x.com/zircai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-green hover:bg-neon-cyan px-6 py-3 font-mono text-black transition-colors"
              >
                Follow for Updates
              </Link>
              <Link
                href="https://github.com/zircai/zirc-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="border-neon-green text-neon-green hover:bg-neon-green border px-6 py-3 font-mono transition-colors hover:text-black"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocsPage;
