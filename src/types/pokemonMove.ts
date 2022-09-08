import { NamedAPIResource } from '@/types/namedAPIResource'
import { PokemonMoveVersion } from '@/types/pokemonMoveVersion'

export type PokemonMove = {
	move: NamedAPIResource
	version_group_details: PokemonMoveVersion[]
}
