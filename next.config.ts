import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  images: {
    unoptimized: true,
    // If you want to use a custom image loader, uncomment the following lines
    // loader: 'custom',
    // loaderFile: './src/lib/imageLoader.ts',
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Security headers - Zero-cost security hardening
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.walletconnect.com https://verify.walletconnect.com",
              "style-src 'self' 'unsafe-inline'",
              "connect-src 'self' https://*.bscscan.com https://*.etherscan.io https://*.walletconnect.com https://walletconnect.com https://*.walletconnect.network https://*.coingecko.com https://api.llama.fi https://bsc-dataseed.binance.org https://bsc-dataseed1.binance.org wss://*.walletconnect.com wss://*.walletconnect.network wss://relay.walletconnect.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "frame-src 'self' https://verify.walletconnect.com https://verify.walletconnect.network",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY' // Prevent clickjacking attacks
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Prevent MIME type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin' // Privacy protection
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' // Disable unnecessary features
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block' // Legacy XSS protection
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains' // Force HTTPS
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on' // Performance optimization
          }
        ]
      }
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
