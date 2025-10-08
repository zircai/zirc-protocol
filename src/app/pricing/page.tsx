'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Zap, Rocket, Crown, ArrowLeft } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Free Tier',
      icon: Zap,
      price: '$0',
      period: 'forever',
      description: 'Perfect for casual BSC users',
      features: [
        '10 AI queries per day',
        'Basic token price data',
        'Wallet balance checks',
        'Community support',
        'Terminal access',
      ],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Pro',
      icon: Rocket,
      price: '$TBD',
      period: '/month',
      description: 'For serious BSC degens',
      features: [
        'Unlimited AI queries',
        'Real-time BSC data',
        'Advanced analytics',
        'Portfolio tracking',
        'Priority support',
        'Custom alerts',
        'API access',
      ],
      cta: 'Coming Soon',
      highlight: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'For institutions & DAOs',
      features: [
        'Everything in Pro',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        'Team accounts',
      ],
      cta: 'Contact Us',
      highlight: false,
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
          <div className="border-neon-green/30 mb-12 border-b pb-8 text-center">
            <div className="text-neon-green mb-2 font-mono text-sm">
              {'>'} PRICING_TIERS_LOADING...
            </div>
            <h1 className="mb-4 font-mono text-4xl text-white md:text-6xl">
              Simple, Transparent
              <br />
              <span className="text-neon-green">Pricing</span>
            </h1>
            <p className="mx-auto max-w-2xl font-mono text-xl leading-relaxed text-gray-300">
              Start free, upgrade when you need more. No hidden fees, no complex tiers.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border bg-black/30 p-8 ${
                  plan.highlight
                    ? 'border-neon-green scale-105 transform'
                    : 'border-neon-green/30'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-neon-green -mt-12 mb-4 px-4 py-1 text-center font-mono text-sm text-black">
                    MOST POPULAR
                  </div>
                )}
                
                <plan.icon
                  className={`mb-4 h-12 w-12 ${
                    plan.highlight ? 'text-neon-green' : 'text-neon-cyan'
                  }`}
                />
                
                <h3 className="text-neon-green mb-2 font-mono text-2xl">
                  {plan.name}
                </h3>
                
                <div className="mb-4">
                  <span className="font-mono text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-mono text-lg">
                    {plan.period}
                  </span>
                </div>
                
                <p className="mb-6 font-mono text-sm text-gray-400">
                  {plan.description}
                </p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2 font-mono text-sm text-gray-300"
                    >
                      <Check className="text-neon-green mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 font-mono transition-colors ${
                    plan.highlight
                      ? 'bg-neon-green text-black hover:bg-neon-cyan'
                      : 'border-neon-green text-neon-green hover:bg-neon-green border hover:text-black'
                  }`}
                  disabled={plan.cta === 'Coming Soon'}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="border-neon-cyan/50 mb-12 border bg-black/50 p-8">
            <h2 className="text-neon-cyan mb-4 font-mono text-2xl">
              How We Compare
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="font-mono text-sm">
                <div className="text-neon-green mb-2">vs Nansen</div>
                <div className="text-gray-400">
                  They charge $150-$1,800/month
                  <br />
                  We start at $0
                </div>
              </div>
              <div className="font-mono text-sm">
                <div className="text-neon-green mb-2">vs Dune Analytics</div>
                <div className="text-gray-400">
                  They require SQL knowledge
                  <br />
                  We use natural language
                </div>
              </div>
              <div className="font-mono text-sm">
                <div className="text-neon-green mb-2">vs BSCScan</div>
                <div className="text-gray-400">
                  They're a block explorer
                  <br />
                  We're an AI assistant
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="border-neon-green/30 border bg-black/30 p-8">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Pricing FAQ
            </h2>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <div className="text-neon-cyan mb-1">
                  Q: When will Pro pricing be announced?
                </div>
                <div className="text-gray-400">
                  A: We'll announce Pro pricing before launch. It will be significantly cheaper than Nansen ($150/mo) or Dune Pro ($390/mo).
                </div>
              </div>
              <div>
                <div className="text-neon-cyan mb-1">
                  Q: Can I upgrade/downgrade anytime?
                </div>
                <div className="text-gray-400">
                  A: Yes! Change plans anytime. No lock-in contracts.
                </div>
              </div>
              <div>
                <div className="text-neon-cyan mb-1">
                  Q: What payment methods do you accept?
                </div>
                <div className="text-gray-400">
                  A: We'll accept crypto (BNB, USDT, BUSD) and credit cards.
                </div>
              </div>
              <div>
                <div className="text-neon-cyan mb-1">
                  Q: Is there a discount for $ZIRC holders?
                </div>
                <div className="text-gray-400">
                  A: Yes! $ZIRC holders will get special pricing. Details coming soon.
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="bg-neon-green hover:bg-neon-cyan inline-block px-8 py-4 font-mono text-lg text-black transition-colors"
            >
              Start with Free Tier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
