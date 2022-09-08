import { NamedAPIResourceList } from '@/types/namedAPIResourceList'
import { Pokemon } from '@/types/pokemon'

export const mockedPokemonListResponse: NamedAPIResourceList = {
	count: 1154,
	next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
	previous: null,
	results: [
		{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
		{ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
		{ name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
	],
}

export const mockedPokemonResponse: Pokemon = {
	abilities: [
		{ ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' }, is_hidden: false, slot: 1 },
		{ ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' }, is_hidden: true, slot: 3 },
	],
	base_experience: 64,
	forms: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }],
	game_indices: [
		{ game_index: 153, version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' } },
		{ game_index: 153, version: { name: 'blue', url: 'https://pokeapi.co/api/v2/version/2/' } },
		{ game_index: 153, version: { name: 'yellow', url: 'https://pokeapi.co/api/v2/version/3/' } },
	],
	height: 7,
	held_items: [],
	id: 1,
	is_default: true,
	location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
	moves: [
		{
			move: { name: 'magical-leaf', url: 'https://pokeapi.co/api/v2/move/345/' },
			version_group_details: [
				{
					level_learned_at: 0,
					move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
					version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
				},
			],
		},
		{
			move: { name: 'natural-gift', url: 'https://pokeapi.co/api/v2/move/363/' },
			version_group_details: [
				{
					level_learned_at: 0,
					move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
					version_group: { name: 'diamond-pearl', url: 'https://pokeapi.co/api/v2/version-group/8/' },
				},
				{
					level_learned_at: 0,
					move_learn_method: { name: 'machine', url: 'https://pokeapi.co/api/v2/move-learn-method/4/' },
					version_group: { name: 'platinum', url: 'https://pokeapi.co/api/v2/version-group/9/' },
				},
			],
		},
	],
	name: 'bulbasaur',
	order: 1,
	past_types: [],
	species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
	sprites: {
		back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
		back_female: null,
		back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
		back_shiny_female: null,
		front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
		front_female: null,
		front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
		front_shiny_female: null,
	},
	stats: [
		{ base_stat: 45, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
		{ base_stat: 49, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
		{ base_stat: 49, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
		{ base_stat: 65, effort: 1, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
		{ base_stat: 65, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
		{ base_stat: 45, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } },
	],
	types: [
		{ slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
		{ slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } },
	],
	weight: 69,
}
