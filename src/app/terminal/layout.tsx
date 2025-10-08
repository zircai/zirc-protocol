import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BSC AI Terminal | Ask Natural Questions About BSC Data',
  description: 'Use natural language to query BSC data: portfolio tracking, token prices, whale movements, DeFi analytics, gas prices, and more. 30+ commands powered by AI for instant blockchain insights.',
  keywords: ['BSC terminal', 'AI blockchain query', 'BSC data terminal', 'DeFi terminal', 'crypto AI assistant', 'BSC analytics tool'],
  openGraph: {
    title: 'BSC AI Terminal - Natural Language Blockchain Queries',
    description: '30+ AI-powered commands for real-time BSC data. Ask questions, get instant answers.',
    url: 'https://zirc.ai/terminal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSC AI Terminal | Natural Language BSC Queries',
    description: 'Ask natural questions about BSC data and get instant AI-powered insights',
  },
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

