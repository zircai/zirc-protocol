import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import KeyFeatures from '@/components/sections/key-features';
import TokenPreview from '@/components/sections/token-preview';
import Roadmap from '@/components/sections/roadmap';
import WhyUs from '@/components/sections/why-us';
import Script from 'next/script';

export default function Home() {
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'zIRC.ai BSC AI Terminal',
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web Browser',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '250'
    },
    'description': 'AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data and get instant insights. 30+ commands for portfolio tracking, DeFi analytics, whale monitoring, and more.',
    'url': 'https://zirc.ai',
    'screenshot': 'https://zirc.ai/og-image3.png',
    'featureList': [
      'Natural language BSC data queries',
      '30+ AI-powered commands',
      'Real-time portfolio tracking',
      'DeFi analytics and yield optimization',
      'Whale movement monitoring',
      'Gas price optimization',
      'Token approval security checks'
    ],
    'creator': {
      '@type': 'Organization',
      'name': 'zIRC',
      'url': 'https://zirc.ai'
    }
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <TokenPreview />
      <Roadmap />
      <WhyUs />
      <FAQ />
    </>
  );
}
