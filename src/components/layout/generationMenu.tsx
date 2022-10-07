import Link from 'next/link'
import { useMemo } from 'react'

import { useGenerations } from '@/hooks/api/generation'

import { prettifyGenerationName } from '@/utils/prettifyGenerationName'

export function GenerationMenu() {
	const { isLoading, data } = useGenerations()

	const parsedGeneration = useMemo(
		() => data?.results.map(({ name }) => ({ name: prettifyGenerationName(name), key: name })),
		[data?.results],
	)

	if (isLoading || !parsedGeneration) return null

	return (
		<>
			<li>
				<Link href="/">All</Link>
			</li>
			{parsedGeneration.map(({ name, key }) => {
				return (
					<li key={key}>
						<Link href={key}>{name}</Link>
					</li>
				)
			})}
		</>
	)
}
