import { NamedAPIResourceList } from '@/types/namedAPIResourceList'

import axios from '@/lib/axios'

export async function fetchPokemons() {
	const { data } = await axios.get<NamedAPIResourceList>('/pokemon')
	return data
}
