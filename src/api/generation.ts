import axios from '@/lib/axios'

import { Generation } from '@/types/generation'
import { NamedAPIResourceList } from '@/types/namedAPIResourceList'

export async function fetchGenerations() {
	const { data } = await axios.get<NamedAPIResourceList>('/generation')
	return data
}

export async function fetchGeneration(name: string) {
	if (!name) return null
	const { data } = await axios.get<Generation>(`/generation/${name}`)
	return data
}
