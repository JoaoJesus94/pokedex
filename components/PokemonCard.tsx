import { NamedAPIResource } from '@/types/namedAPIResource'
import Image from 'next/image'

import { usePokemon } from '@/hooks/api/pokemons'

export function Card({ pokemon }: { pokemon: NamedAPIResource }) {
	const { data, isLoading } = usePokemon(pokemon.name)

	if (isLoading) return null
	return (
		<div key={pokemon.name} className="card bg-base-100 shadow-xl">
			<div className="flex justify-center">
				<Image src={data.sprites.front_default} width="125" height="125" alt={pokemon.name} />
			</div>
			<div className="card-body">
				<h2 className="card-title justify-between">
					{pokemon.name}
					<div className="badge badge-secondary">NEW</div>
				</h2>

				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	)
}
