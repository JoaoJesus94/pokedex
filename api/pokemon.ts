import { PokemonListType } from '../types/pokemonList'

import axios from '@/lib/axios'

export async function fetchPokemons() {
	const { data } = await axios.get<PokemonListType>('/pokemon')
	return data
}
