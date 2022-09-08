import { PokemonType } from '@/types/pokemonType'

import { getPokemonTypeIcon } from '@/utils/getPokemonTypeIcon'

type PokemonTypeBadgeProps = {
	type: PokemonType['type']['name']
}

export function PokemonTypeIcon({ type }: PokemonTypeBadgeProps) {
	const Icon = getPokemonTypeIcon(type)

	return (
		<div className={`tooltip tooltip-${type}`} data-tip={type}>
			<Icon />
		</div>
	)
}
