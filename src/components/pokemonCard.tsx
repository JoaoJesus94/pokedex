import Image from 'next/image'
import { capitalize } from 'radash'

import { Loader } from '@/components/loader'
import { PokemonTypeIcon } from '@/components/pokemonTypeIcon'

import { usePokemon } from '@/hooks/api/pokemon'

import { NamedAPIResource } from '@/types/namedAPIResource'

export function PokemonCard({ pokemon }: { pokemon: NamedAPIResource }) {
	const { data, isLoading } = usePokemon(pokemon.name)

	if (isLoading) return <Loader />

	if (!data) return null

	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="flex justify-center pt-2">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
					width="150"
					height="150"
					alt={pokemon.name}
				/>
			</div>
			<div className="card-body">
				<div className="flex justify-between items-center">
					<h2 className="card-title justify-between">{capitalize(pokemon.name)}</h2>
					<div className="flex gap-3">
						{data.types.map(({ type: { name } }) => (
							<PokemonTypeIcon key={name} type={name} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
