import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About zIRC.ai | Building the First BSC AI Terminal',
  description: 'We\'re building the first AI-powered terminal for Binance Smart Chain. No complex dashboards, just natural language queries and instant insights. Purpose-built for the next generation of degens.',
  keywords: ['about zIRC', 'BSC AI Terminal team', 'blockchain terminal', 'BSC analytics company', 'crypto AI'],
  openGraph: {
    title: 'About zIRC.ai - BSC AI Terminal Pioneers',
    description: 'Community-owned, sustainable, focused on delivering the best AI terminal for BSC',
    url: 'https://zirc.ai/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About zIRC.ai | BSC AI Terminal',
    description: 'Building the first AI-powered terminal for Binance Smart Chain',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

