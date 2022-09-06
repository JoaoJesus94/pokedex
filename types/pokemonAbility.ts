import { NamedAPIResource } from '@/types/namedAPIResource'

export type PokemonAbility = {
	is_hidden: boolean
	slot: number
	ability: NamedAPIResource
}
