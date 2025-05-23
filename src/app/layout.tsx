import { JetBrains_Mono, Source_Code_Pro } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
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
    default: 'PRIME Intellect - Decentralized AI Platform',
    template: '%s | PRIME Intellect',
  },
  description:
    'Scalable, cheap, fast. Develop, train, and scale AI models through decentralized compute infrastructure. Democratizing AI development with collective ownership.',
  keywords: [
    'AI',
    'Machine Learning',
    'Distributed Computing',
    'Decentralized AI',
    'GPU Compute',
    'Model Training',
    'Collective Intelligence',
    'Open Source AI',
    'Blockchain',
    'Protocol',
  ],
  authors: [{ name: 'PRIME Intellect' }],
  creator: 'PRIME Intellect',
  publisher: 'PRIME Intellect',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'PRIME Intellect - Decentralized AI Platform',
    description:
      'Scalable, cheap, fast. Develop, train, and scale AI models through decentralized compute infrastructure. Democratizing AI development with collective ownership.',
    siteName: 'PRIME Intellect',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PRIME Intellect - Decentralized AI Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRIME Intellect - Decentralized AI Platform',
    description:
      'Scalable, cheap, fast. Develop, train, and scale AI models through decentralized compute infrastructure. Democratizing AI development with collective ownership.',
    images: ['/og-image.jpg'],
    creator: '@primeintellect',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen ${jetbrainsMono.variable} ${sourceCodePro.variable} antialiased bg-black text-white`}
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
