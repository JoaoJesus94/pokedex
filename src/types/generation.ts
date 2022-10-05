import { Name } from '@/types/name'
import { NamedAPIResource } from '@/types/namedAPIResource'

export type Generation = {
	id: number
	name: string
	abilities: NamedAPIResource[]
	names: Name[]
	main_region: NamedAPIResource
	moves: NamedAPIResource[]
	pokemon_species: NamedAPIResource[]
	types: NamedAPIResource[]
	version_groups: NamedAPIResource[]
}
