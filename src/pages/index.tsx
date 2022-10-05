import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Loader } from '@/components/loader'
import { PokemonCard } from '@/components/pokemonCard'

import { useInfinitePokemons } from '@/hooks/api/pokemon'

const Home: NextPage = () => {
	const { isLoading, data, isFetchingNextPage, fetchNextPage } = useInfinitePokemons()
	const { ref, inView } = useInView()

	if (isLoading) <Loader />

	useEffect(() => {
		if (inView) fetchNextPage()
	}, [inView, fetchNextPage])

	return (
		<>
			<Head>
				<title>Pokedex | Home</title>
			</Head>
			<div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,_minmax(300px,_max-content))]">
				{data?.pages.map(page => {
					return page?.results.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)
				})}
			</div>
			<div ref={ref} className="flex justify-center py-8">
				{isFetchingNextPage ? (
					<button className="btn loading">loading</button>
				) : (
					<button className="btn pointer-events-none">Load more</button>
				)}
			</div>
		</>
	)
}

export default Home
