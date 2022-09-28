import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { fetchGeneration, fetchGenerations } from '@/api/generation'

import { Loader } from '@/components/loader'
import { PokemonCard } from '@/components/pokemonCard'

import { useGeneration } from '@/hooks/api/generation'

import { prettifyGenerationName } from '@/utils/prettifyGenerationName'

const GenerationList: NextPage = () => {
	const { query } = useRouter()

	const { isLoading, data } = useGeneration(query.generation as string)

	if (isLoading || !data) return <Loader />

	return (
		<>
			<Head>
				<title>{`Pokedex | ${prettifyGenerationName(query.generation as string)}`}</title>
			</Head>
			<div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_max-content))]">
				{data.pokemon_species.map(pokemon => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} />
				))}
			</div>
		</>
	)
}

export async function getStaticPaths() {
	const queryClient = new QueryClient()

	const data = await queryClient.fetchQuery(['generations'], fetchGenerations)
	const paths = data.results.map(generation => ({ params: { generation: generation.name } }))

	return {
		paths,
		fallback: false, // can also be true or 'blocking'
	}
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['generation', ctx.params?.generation], () =>
		fetchGeneration(ctx.params?.generation as string),
	)

	return {
		props: { dehydratedState: dehydrate(queryClient) },
	}
}

export default GenerationList
