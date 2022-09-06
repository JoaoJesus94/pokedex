import { QueryClient, dehydrate } from '@tanstack/react-query'
import type { NextPage } from 'next'

import { fetchPokemons } from '@/api/pokemon'

import { usePokemons } from '@/hooks/api/pokemon'

import { Loader } from '@/components/Loader'
import { Card } from '@/components/PokemonCard'

const Home: NextPage = () => {
	const { isLoading, data } = usePokemons()

	if (isLoading) <Loader />

	return (
		<div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_max-content))]">
			{data?.results.map(pokemon => (
				<Card key={pokemon.name} pokemon={pokemon} />
			))}
		</div>
	)
}

export async function getStaticProps() {
	const queryClient = new QueryClient()

	await queryClient.fetchQuery(['pokemons'], fetchPokemons)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export default Home
