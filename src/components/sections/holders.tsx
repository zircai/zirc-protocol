'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Starter',
    tokenAmount: '100 $ZIRC',
    features: [
      '10 AI queries per day',
      'Basic BSC price data',
      'Community voting rights',
      'Wallet balance checks',
      'View public analytics',
    ],
    cta: 'Stake Tokens',
  },
  {
    name: 'Active',
    tokenAmount: '1,000 $ZIRC',
    features: [
      'All Starter features',
      '100 queries per day',
      'Advanced token analytics',
      'Portfolio tracking',
      'Custom price alerts',
      'Priority support',
      'Historical data access',
    ],
    cta: 'Stake Tokens',
  },
  {
    name: 'Elite',
    tokenAmount: '10,000 $ZIRC',
    features: [
      'All Active features',
      'Unlimited AI queries',
      'Whale wallet tracking',
      'Advanced BSC analytics',
      'Real-time alerts',
      'API access (1,000 calls/day)',
      'Governance proposal rights',
      'Revenue sharing (5%)',
    ],
    cta: 'Stake Tokens',
    popular: true,
  },
  {
    name: 'Whale',
    tokenAmount: '50,000 $ZIRC',
    features: [
      'All Elite features',
      'Unlimited API access',
      'Custom data feeds',
      'Priority governance rights',
      'White-label options',
      'Protocol revenue sharing (15%)',
      'Direct dev support',
      'Early feature access',
    ],
    cta: 'Stake Tokens',
  },
];

export default function Holders({
  headerTag = 'h2',
}: {
  headerTag?: 'h1' | 'h2';
}) {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          {headerTag === 'h1' ? (
            <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Token Holder Benefits
            </h1>
          ) : (
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Token Holder Benefits
            </h2>
          )}
          <p className="text-muted-foreground text-lg text-balance">
            Stake your $ZIRC tokens to unlock unlimited BSC queries, premium data access, advanced analytics, and exclusive features.
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                tier.popular &&
                  'from-mint/70 to-sand-100 scale-[1.075] rounded-3xl bg-linear-to-b p-3',
              )}
            >
              <Card
                className={cn(
                  'h-full border-none bg-zinc-100 dark:bg-zinc-900',
                  tier.popular && 'bg-background relative ring-2 ring-black',
                )}
              >
                <CardHeader className="h-[120px]">
                  <h3 className="text-2xl font-semibold">{tier.name}</h3>
                  <div className="mt-2">
                    <p className="text-muted-foreground text-lg font-medium">
                      {tier.tokenAmount}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6">
                  <Button
                    variant={tier.popular ? 'default' : 'outline'}
                    size="lg"
                    className="h-14"
                  >
                    {tier.cta}
                  </Button>

                  <div className="space-y-4">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 