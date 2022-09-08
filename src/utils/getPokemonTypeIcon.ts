import { POKEMON_TYPE_ICON } from '@/constants/pokemonTypeIcon'

export const getPokemonTypeIcon = (type: keyof typeof POKEMON_TYPE_ICON) => POKEMON_TYPE_ICON[type]
