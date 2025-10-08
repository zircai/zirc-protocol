import { createConfig, http } from 'wagmi'
import { bsc, mainnet, arbitrum, polygon } from 'wagmi/chains'
import { injected, coinbaseWallet } from 'wagmi/connectors'
import { QueryClient } from '@tanstack/react-query'

// Set up Wagmi config (simplified for demo)
const config = createConfig({
  chains: [bsc, mainnet, arbitrum, polygon],
  connectors: [
    injected(),
    coinbaseWallet({ appName: 'zIRC.ai BSC Terminal' }),
  ],
  transports: {
    [bsc.id]: http(),
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [polygon.id]: http(),
  },
})

const queryClient = new QueryClient()

export { config, queryClient }
