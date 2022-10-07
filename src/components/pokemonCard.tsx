import Image from 'next/image'
import { capitalize } from 'radash'
import { memo } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Loader } from '@/components/loader'
import { PokemonTypeIcon } from '@/components/pokemonTypeIcon'

import { usePokemon } from '@/hooks/api/pokemon'

import { NamedAPIResource } from '@/types/namedAPIResource'

import { formatPokemonNumber } from '@/utils/formatPokemonNumber'

function Card({ pokemon }: { pokemon: NamedAPIResource }) {
	const { data } = usePokemon(pokemon.name)

	if (!data) return null

	return (
		<div className="card bg-base-200 shadow-base-300 shadow-md">
			<div className="flex justify-center pt-2">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data?.id}.png`}
					width="150"
					height="150"
					alt={pokemon.name}
				/>
			</div>
			<div className="card-body">
				<span className="text-accent-content">{formatPokemonNumber(data?.id)}</span>
				<div className="flex justify-between items-center">
					<h2 className="card-title justify-between">{capitalize(pokemon.name)}</h2>
					<div className="flex gap-3">
						{data?.types.map(({ type: { name } }) => (
							<PokemonTypeIcon key={name} type={name} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export function PokemonLoadingCard() {
	return (
		<div className="card  bg-base-200 shadow-base-300 shadow-md h-[282px]">
			<Loader />
		</div>
	)
}

export function PokemonErrorCard({ resetErrorBoundary }: Pick<FallbackProps, 'resetErrorBoundary'>) {
	return (
		<div className="card bg-base-200 shadow-xl">
			<div className="flex justify-center pt-2">
				<Image alt="Sad Pikachu" src="/sad-pikachu.png" width={150} height={150} />
			</div>
			<div className="card-body">
				<div className="flex flex-col gap-4">
					<span className="text-center">I couldn&apos;t find my friend.</span>
					<button className="btn btn-xs" onClick={() => resetErrorBoundary()}>
						Let&apos;s try again!
					</button>
				</div>
			</div>
		</div>
	)
}

export const PokemonCard = memo(Card)
