import { QueryClientConfig } from '@tanstack/react-query'

export const config: QueryClientConfig = {
	defaultOptions: {
		queries: { refetchOnWindowFocus: false, staleTime: 1 * 60 * 60 * 1000, cacheTime: 5 * 60 * 60 * 1000 },
	},
}
