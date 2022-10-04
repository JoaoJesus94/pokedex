import { QueryClient } from '@tanstack/react-query'
import { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { fetchGeneration, fetchGenerations } from '@/api/generation'

import { PokemonCard } from '@/components/pokemonCard'

import { NamedAPIResource } from '@/types/namedAPIResource'

import { prettifyGenerationName } from '@/utils/prettifyGenerationName'

type GenerationListProps = {
	pokemonsFromGeneration: NamedAPIResource[]
}

const GenerationList: NextPage<GenerationListProps> = ({ pokemonsFromGeneration }) => {
	const { query } = useRouter()

	return (
		<>
			<Head>
				<title>{`Pokedex | ${prettifyGenerationName(query.generation as string)}`}</title>
			</Head>
			<div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_max-content))]">
				{pokemonsFromGeneration.map(pokemon => (
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

	const { pokemon_species: pokemonsFromGeneration } = await queryClient.fetchQuery(
		['generation', ctx.params?.generation],
		() => fetchGeneration(ctx.params?.generation as string),
	)

	return {
		props: { pokemonsFromGeneration },
	}
}

export default GenerationList
