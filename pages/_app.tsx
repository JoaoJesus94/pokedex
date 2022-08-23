import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { Drawer } from '@/components/layout/drawer'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Drawer>
			<Component {...pageProps} />
		</Drawer>
	)
}
