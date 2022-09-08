import { NamedAPIResource } from '@/types/namedAPIResource'
import { PokemonHeldItemVersion } from '@/types/pokemonHeldItemVersion'

export type PokemonHeldItem = {
	item: NamedAPIResource
	version_details: PokemonHeldItemVersion[]
}
