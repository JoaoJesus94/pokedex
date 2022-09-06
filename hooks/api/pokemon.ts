import { useQuery } from '@tanstack/react-query'

import { fetchPokemon, fetchPokemons } from '@/api/pokemon'

export function usePokemons() {
	return useQuery(['pokemons'], fetchPokemons)
}

export function usePokemon(name: string) {
	return useQuery(['pokemon', name], () => fetchPokemon(name))
}
