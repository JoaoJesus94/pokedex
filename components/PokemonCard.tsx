import Image from 'next/image'

import { NamedAPIResource } from '@/types/namedAPIResource'

import { usePokemon } from '@/hooks/api/pokemon'

import { Loader } from '@/components/Loader'

export function Card({ pokemon }: { pokemon: NamedAPIResource }) {
	const { data, isLoading } = usePokemon(pokemon.name)
	if (isLoading) return <Loader />
	if (!data) return null

	return (
		<div key={pokemon.name} className="card bg-base-100 shadow-xl">
			<div className="flex justify-center">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
					width="150"
					height="150"
					alt={pokemon.name}
				/>
			</div>
			<div className="card-body">
				<h2 className="card-title justify-between">{pokemon.name}</h2>

				<div className="card-actions justify-end">
					<div className="badge badge-outline">Height: {data.height / 10} m</div>
					<div className="badge badge-outline">Weight: {data.weight / 10} kg</div>
				</div>
			</div>
		</div>
	)
}
