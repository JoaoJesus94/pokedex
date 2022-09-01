import MockAdapter from 'axios-mock-adapter'

import { mockedPokemonListResponse } from '@/mocks/mockedPokemonListResponse'

import axios from '@/lib/axios'

import { fetchPokemons } from '@/api/pokemon'

const mockedAxios = new MockAdapter(axios)

describe('fetchPokemons()', () => {
	it('should return pokemon list', async () => {
		mockedAxios.onGet('/pokemon').reply(200, mockedPokemonListResponse)

		const response = await fetchPokemons()

		expect(response).toStrictEqual(mockedPokemonListResponse)
	})
})
