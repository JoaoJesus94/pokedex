import MockAdapter from 'axios-mock-adapter'

import { fetchPokemon, fetchPokemons } from '@/api/pokemon'

import axios from '@/lib/axios'

import { mockedPokemonListResponse, mockedPokemonResponse } from '@/mocks/mockedPokemonListResponse'

const mockedAxios = new MockAdapter(axios)

describe('API | Pokemons', () => {
	it('should return pokemon list', async () => {
		mockedAxios.onGet('/pokemon?offset=0').reply(200, mockedPokemonListResponse)

		const response = await fetchPokemons()

		expect(response).toStrictEqual(mockedPokemonListResponse)
	})

	it('should return pokemon', async () => {
		mockedAxios.onGet('/pokemon/charmander').reply(200, mockedPokemonResponse)

		const response = await fetchPokemon('charmander')

		expect(response).toStrictEqual(mockedPokemonResponse)
	})
})
