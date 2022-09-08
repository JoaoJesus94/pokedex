import { NamedAPIResource } from '@/types/namedAPIResource'
import { PokemonType } from '@/types/pokemonType'

export type PokemonTypePast = {
	generation: NamedAPIResource
	types: PokemonType[]
}
