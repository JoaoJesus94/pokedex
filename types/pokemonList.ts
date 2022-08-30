import { NamedAPIResource } from '@/types/namedAPIResource'

export type PokemonListType = {
	count: number
	next: string
	previous?: string
	results: NamedAPIResource[]
}
