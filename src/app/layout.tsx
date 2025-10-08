import { JetBrains_Mono, Source_Code_Pro } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
// import { WagmiProvider } from 'wagmi';
// import { QueryClientProvider } from '@tanstack/react-query';
// import { config, queryClient } from '@/lib/wagmi';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-terminal',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'zIRC.ai – BSC AI Terminal | Real-time Blockchain Data',
    template: '%s | zIRC.ai BSC Terminal',
  },
  description:
    'AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data, get instant insights. No dashboards, just terminal-style answers for degens. Query prices, holders, transactions.',
  keywords: [
    'BSC AI Terminal',
    'Binance Smart Chain AI',
    'BSC Data Query',
    'BNB Price Terminal',
    'CAKE Price AI',
    'BSC Blockchain Data',
    'DeFi Terminal',
    'Crypto AI Assistant',
    'BSC Analytics',
    'Blockchain Terminal',
    'Degen Tools',
    'BSC Insights',
    'Real-time BSC Data',
    'BSC Price Tracker',
    'BSC Wallet Analytics',
    'zIRC',
    'Web3',
    'BNB',
    'CAKE',
  ],
  authors: [{ name: 'zIRC' }],
  creator: 'zIRC',
  publisher: 'zIRC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://zirc.ai'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    title: 'zIRC.ai – BSC AI Terminal | Real-time Blockchain Data',
    description:
      'AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data and get instant terminal-style answers. Built for degens.',
    url: 'https://zirc.ai',
    siteName: 'zIRC.ai BSC Terminal',
    locale: 'en_US',
    images: [
      {
        url: '/og-image3.png',
        width: 1200,
        height: 630,
        alt: 'zIRC.ai BSC AI Terminal - Real-time Blockchain Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zIRC.ai – BSC AI Terminal | Real-time Blockchain Data',
    description:
      'AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data and get instant terminal-style answers.',
    images: ['/og-image3.png'],
    creator: '@zircai',
    site: '@zircai',
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'color-scheme': 'dark',
  },
  formatDetection: {
    telephone: false,
  },
  applicationName: 'zIRC',
  category: 'communication',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${jetbrainsMono.variable} ${sourceCodePro.variable} bg-black text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
