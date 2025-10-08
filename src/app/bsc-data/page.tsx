'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Database, TrendingUp, Wallet, Search, ArrowLeft, Activity } from 'lucide-react';

const BSCDataPage = () => {
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const dataTypes = [
    {
      icon: TrendingUp,
      title: 'Token Prices',
      description: 'Real-time prices for BNB, CAKE, and all BSC tokens',
      queries: [
        '> show CAKE price',
        '> BNB price now',
        '> what\'s BUSD worth?',
      ],
      status: 'LIVE',
    },
    {
      icon: Wallet,
      title: 'Wallet Balances',
      description: 'Check your BNB and token balances instantly',
      queries: [
        '> my balance',
        '> check wallet 0x123...',
        '> show my tokens',
      ],
      status: 'LIVE',
    },
    {
      icon: Database,
      title: 'Top Holders',
      description: 'Find whale wallets and top token holders',
      queries: [
        '> top BNB holders',
        '> CAKE whale wallets',
        '> show rich list',
      ],
      status: 'BETA',
    },
    {
      icon: Activity,
      title: 'Market Insights',
      description: 'Trading volume, market cap, and transaction details',
      queries: [
        '> BNB volume today',
        '> CAKE market cap',
        '> explain transaction 0xabc...',
      ],
      status: 'COMING SOON',
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
              {'>'} BSC_DATA_STREAM_INITIALIZING{loadingDots}
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              Real-time
              <br />
              <span className="text-neon-green">BSC Data Queries</span>
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Live prices, wallet balances, transaction details, and market insights from Binance Smart Chain. Query everything with natural language.
            </p>
          </div>

          {/* Data Types Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {dataTypes.map((dataType, index) => (
              <div
                key={index}
                className="border-neon-green/30 group border bg-black/30 p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <dataType.icon className="text-neon-green h-8 w-8" />
                  <span
                    className={`rounded border px-2 py-1 font-mono text-xs ${
                      dataType.status === 'LIVE'
                        ? 'border-neon-green/30 text-neon-green'
                        : dataType.status === 'BETA'
                        ? 'border-yellow-500/30 text-yellow-500'
                        : 'border-neon-cyan/30 text-neon-cyan'
                    }`}
                  >
                    {dataType.status}
                  </span>
                </div>
                <h3 className="text-neon-green mb-2 font-mono text-xl">
                  {dataType.title}
                </h3>
                <p className="mb-4 font-mono text-xs text-gray-500">
                  {dataType.description}
                </p>
                <div className="space-y-2">
                  {dataType.queries.map((query, qIndex) => (
                    <div
                      key={qIndex}
                      className="text-neon-cyan border-neon-green/20 border-l-2 bg-black/50 py-2 pl-4 font-mono text-sm"
                    >
                      {query}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Example Terminal */}
          <div className="border-neon-green/40 mb-12 border bg-black/80 font-mono text-sm">
            <div className="border-neon-green/20 border-b bg-black/60 px-4 py-2">
              <span className="text-neon-cyan">degen@bsc</span>:
              <span className="text-neon-green">~</span>$ 
              <span className="text-white ml-2">zirc.ai terminal</span>
            </div>
            <div className="space-y-2 p-4">
              <div className="text-neon-green">
                {'>'} show CAKE price
              </div>
              <div className="text-neon-cyan">
                [AI] CAKE Price: $1.89 (-1.23% 24h)
              </div>
              <div className="text-gray-500">
                Market Cap: $450M | Volume: $45M
              </div>
              <div className="mt-4 text-neon-green">
                {'>'} top BNB holders
              </div>
              <div className="text-neon-cyan">
                [AI] Top 5 BNB Holders:
              </div>
              <div className="text-gray-400">
                1. Binance Hot Wallet - 1,385,795 BNB
                <br />
                2. 0x28C6...1d60 - 987,654 BNB
                <br />
                3. 0x21a3...8549 - 654,321 BNB
              </div>
              <div className="mt-4 text-neon-green">
                {'>'} BNB volume today
              </div>
              <div className="text-neon-cyan">
                [AI] Today&apos;s BNB trading volume: $2.1B (+15.2%)
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-neon-green">{'>'}</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-neon-cyan/50 border bg-black/50 p-8 text-center">
            <Search className="text-neon-cyan mx-auto mb-4 h-12 w-12" />
            <h2 className="text-neon-green mb-4 font-mono text-3xl">
              Query BSC Like Never Before
            </h2>
            <p className="mb-6 font-mono text-gray-300">
              Full BSC data access coming soon. Connect your wallet and start querying.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="bg-neon-green hover:bg-neon-cyan px-6 py-3 font-mono text-black transition-colors"
              >
                Launch Terminal
              </Link>
              <Link
                href="/docs"
                className="border-neon-green text-neon-green hover:bg-neon-green border px-6 py-3 font-mono transition-colors hover:text-black"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BSCDataPage;
