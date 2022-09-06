import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { useState } from 'react'

import { config } from '@/lib/reactQueryConfig'

import '@/styles/globals.css'

import { Drawer } from '@/components/layout/drawer'

export default function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(config))

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Drawer>
					<Component {...pageProps} />
				</Drawer>
				<ReactQueryDevtools initialIsOpen={false} />
			</Hydrate>
		</QueryClientProvider>
	)
}
