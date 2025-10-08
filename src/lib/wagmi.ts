// Temporarily disable wagmi to isolate the issue
import { QueryClient } from '@tanstack/react-query'

// Mock config for testing
const config = {} as any

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
})

export { config, queryClient }
