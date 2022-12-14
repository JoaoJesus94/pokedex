import axios from '@/lib/axios'

import { NamedAPIResourceList } from '@/types/namedAPIResourceList'
import { Pokemon } from '@/types/pokemon'

export async function fetchPokemons(offset: string = '0') {
	const { data } = await axios.get<NamedAPIResourceList>(`/pokemon?offset=${offset}`)
	return data
}

export async function fetchPokemon(name: string) {
	const { data } = await axios.get<Pokemon>(`/pokemon/${name}`)
	return data
}
