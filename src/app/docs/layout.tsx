import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - BSC AI Terminal | Complete Command Reference & Guides',
  description: 'Complete documentation for BSC AI Terminal: 30+ commands, API reference, guides, and tutorials. Learn how to query BSC data with natural language and master terminal commands.',
  keywords: ['BSC documentation', 'AI terminal guide', 'BSC commands', 'terminal reference', 'BSC API docs', 'blockchain terminal tutorial'],
  openGraph: {
    title: 'BSC AI Terminal Documentation - Complete Guide',
    description: 'Master the BSC AI Terminal with comprehensive command reference, API docs, and tutorials',
    url: 'https://zirc.ai/docs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSC AI Terminal Docs | Complete Reference',
    description: '30+ commands, API reference, and guides for BSC AI Terminal',
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

