import { useQuery } from '@tanstack/react-query'

import { fetchPokemons } from '@/api/pokemon'

export function usePokemons() {
	return useQuery(['pokemons'], fetchPokemons)
}
