import { NamedAPIResource } from '@/types/namedAPIResource'
import { PokemonAbility } from '@/types/pokemonAbility'
import { PokemonHeldItem } from '@/types/pokemonHeldItem'
import { PokemonMove } from '@/types/pokemonMove'
import { PokemonSprites } from '@/types/pokemonSprites'
import { PokemonStats } from '@/types/pokemonStat'
import { PokemonType } from '@/types/pokemonType'
import { PokemonTypePast } from '@/types/pokemonTypePast'
import { VersionGameIndex } from '@/types/versionGameIndex'

export type Pokemon = {
	id: number
	name: string
	base_experience: number
	height: number
	is_default: boolean
	order: number
	weight: number
	abilities: PokemonAbility[]
	forms: NamedAPIResource[]
	game_indices: VersionGameIndex[]
	held_items: PokemonHeldItem[]
	location_area_encounters: string
	moves: PokemonMove[]
	past_types: PokemonTypePast[]
	sprites: PokemonSprites
	species: NamedAPIResource
	stats: PokemonStats[]
	types: PokemonType[]
}
