import { NamedAPIResource } from '@/types/namedAPIResource'

export type PokemonMoveVersion = {
	move_learn_method: NamedAPIResource
	version_group: NamedAPIResource
	level_learned_at: number
}
