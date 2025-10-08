import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - BSC AI Terminal | Free Forever, Pro Plans Available',
  description: 'Start free with 10 daily queries. Pro tier coming soon with unlimited queries, real-time BSC data, and advanced analytics. Much cheaper than Nansen ($150/mo) or Dune ($390/mo).',
  keywords: ['BSC pricing', 'AI terminal cost', 'free BSC data', 'crypto analytics pricing', 'BSC subscription'],
  openGraph: {
    title: 'BSC AI Terminal Pricing - Free Tier Available',
    description: 'Start free, upgrade when you need more. No hidden fees, no lock-in contracts.',
    url: 'https://zirc.ai/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSC AI Terminal Pricing | Free Forever',
    description: 'Start with free tier, upgrade to Pro for unlimited queries',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

