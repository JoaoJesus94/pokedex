import { POKEMON_TYPE_COLOR } from '@/constants/pokemonTypeColor'

export const getPokemonTypeColor = (type: keyof typeof POKEMON_TYPE_COLOR) => POKEMON_TYPE_COLOR[type]
