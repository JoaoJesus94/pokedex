import { NamedAPIResource } from '@/types/namedAPIResource'

export type PokemonTypeOptions =
	| 'bug'
	| 'dark'
	| 'dragon'
	| 'electric'
	| 'fairy'
	| 'fighting'
	| 'fire'
	| 'flying'
	| 'ghost'
	| 'grass'
	| 'ground'
	| 'ice'
	| 'normal'
	| 'poison'
	| 'psychic'
	| 'rock'
	| 'steel'
	| 'water'

export type PokemonType = {
	slot: number
	type: NamedAPIResource<PokemonTypeOptions>
}
