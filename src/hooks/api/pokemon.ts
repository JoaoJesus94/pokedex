import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { fetchPokemon, fetchPokemons } from '@/api/pokemon'

export function usePokemons() {
	return useInfiniteQuery(['pokemons'], ({ pageParam }) => fetchPokemons(pageParam), {
		getNextPageParam: result => new URLSearchParams(result.next?.split('?')[1]).get('offset') ?? undefined,
		getPreviousPageParam: result => new URLSearchParams(result.previous?.split('?')[1]).get('offset') ?? undefined,
	})
}

export function usePokemon(name: string) {
	return useQuery(['pokemon', name], () => fetchPokemon(name), { suspense: true })
}
