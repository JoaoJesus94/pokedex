import Bug from '@/public/pokemonTypeIcon/bug.svg'
import Dark from '@/public/pokemonTypeIcon/dark.svg'
import Dragon from '@/public/pokemonTypeIcon/dragon.svg'
import Electric from '@/public/pokemonTypeIcon/electric.svg'
import Fairy from '@/public/pokemonTypeIcon/fairy.svg'
import Fighting from '@/public/pokemonTypeIcon/fighting.svg'
import Fire from '@/public/pokemonTypeIcon/fire.svg'
import Flying from '@/public/pokemonTypeIcon/flying.svg'
import Ghost from '@/public/pokemonTypeIcon/ghost.svg'
import Grass from '@/public/pokemonTypeIcon/grass.svg'
import Ground from '@/public/pokemonTypeIcon/ground.svg'
import Ice from '@/public/pokemonTypeIcon/ice.svg'
import Normal from '@/public/pokemonTypeIcon/normal.svg'
import Poison from '@/public/pokemonTypeIcon/poison.svg'
import Psychic from '@/public/pokemonTypeIcon/psychic.svg'
import Rock from '@/public/pokemonTypeIcon/rock.svg'
import Steel from '@/public/pokemonTypeIcon/steel.svg'
import Water from '@/public/pokemonTypeIcon/water.svg'

import { PokemonTypeOptions } from '@/types/pokemonType'

export const POKEMON_TYPE_ICON: { [P in PokemonTypeOptions]: any } = {
	bug: Bug,
	dark: Dark,
	dragon: Dragon,
	electric: Electric,
	fairy: Fairy,
	fighting: Fighting,
	fire: Fire,
	flying: Flying,
	ghost: Ghost,
	grass: Grass,
	ground: Ground,
	ice: Ice,
	normal: Normal,
	poison: Poison,
	psychic: Psychic,
	rock: Rock,
	steel: Steel,
	water: Water,
}
