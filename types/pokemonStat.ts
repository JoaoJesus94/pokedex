import { NamedAPIResource } from '@/types/namedAPIResource'

export type PokemonStats = {
	stat: NamedAPIResource
	effort: number
	base_stat: number
}
