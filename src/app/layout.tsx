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
    default: 'zIRC – Decentralized for Degens',
    template: '%s | zIRC',
  },
  description:
    'zIRC is a decentralized chat app with a retro terminal look. Built for degens, devs, and crypto culture. Anonymous. Encrypted. Fun.',
  keywords: [
    'zIRC',
    'Decentralized Chat',
    'Retro Terminal',
    'Privacy',
    'Encryption',
    'Crypto',
    'Anonymous Chat',
    'Terminal UI',
    'Web3',
    'Degen',
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
    title: 'zIRC – Decentralized for Degens',
    description:
      'zIRC is a decentralized chat app with a retro terminal look. Built for degens, devs, and crypto culture. Anonymous. Encrypted. Fun.',
    url: 'https://zirc.ai',
    siteName: 'zIRC',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'zIRC – Decentralized for Degens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zIRC – Decentralized for Degens',
    description:
      'zIRC is a decentralized chat app with a retro terminal look. Built for degens, devs, and crypto culture. Anonymous. Encrypted. Fun.',
    images: ['/og-image.png'],
    creator: '@zirc',
    site: '@zirc',
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
