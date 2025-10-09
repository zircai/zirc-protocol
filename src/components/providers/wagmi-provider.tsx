'use client';

import { WagmiProvider } from 'wagmi';
import { createConfig, http } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { injected, coinbaseWallet, walletConnect } from 'wagmi/connectors';
import { QueryProvider } from './query-provider';

// WalletConnect Project ID
// Note: WalletConnect requires this to be public (used in client-side SDK)
// This is safe because it's not a secret - it's a project identifier
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 
                  process.env.WALLETCONNECT_PROJECT_ID || 
                  'demo-project-id';

// Create wagmi config
const config = createConfig({
  chains: [bsc],
  connectors: [
    // MetaMask and other browser wallets
    injected({
      shimDisconnect: true,
    }),
    // WalletConnect for mobile wallets
    walletConnect({
      projectId,
      metadata: {
        name: 'zIRC.ai BSC Terminal',
        description: 'AI-powered terminal for Binance Smart Chain',
        url: 'https://zirc.ai',
        icons: ['https://zirc.ai/favicon.svg']
      },
      showQrModal: true,
    }),
    // Coinbase Wallet
    coinbaseWallet({ 
      appName: 'zIRC.ai BSC Terminal',
      appLogoUrl: 'https://zirc.ai/favicon.svg',
    }),
  ],
  transports: {
    [bsc.id]: http('https://bsc-dataseed.binance.org/'),
  },
});

export function WagmiProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryProvider>
        {children}
      </QueryProvider>
    </WagmiProvider>
  );
}
