import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSC AI Terminal Features | 30+ Commands for Real-time BSC Data',
  description: 'Explore 30+ AI-powered commands for BSC: portfolio tracking, DeFi analytics, whale monitoring, gas optimization, swap rates, and more. Natural language queries for instant blockchain insights.',
  keywords: ['BSC features', 'AI terminal commands', 'BSC analytics', 'DeFi tools', 'blockchain terminal', 'BSC data queries'],
  openGraph: {
    title: 'BSC AI Terminal Features - Complete Command System',
    description: 'Natural language BSC data queries with 30+ commands including portfolio, DeFi, whale tracking, and market analytics',
    url: 'https://zirc.ai/features',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSC AI Terminal Features | 30+ Commands',
    description: 'AI-powered BSC analytics with natural language queries',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

