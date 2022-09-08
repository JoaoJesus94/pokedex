import MockAdapter from 'axios-mock-adapter'

import { fetchPokemons } from '@/api/pokemon'

import axios from '@/lib/axios'

import { mockedPokemonListResponse } from '@/mocks/mockedPokemonListResponse'

const mockedAxios = new MockAdapter(axios)

describe('fetchPokemons()', () => {
	it('should return pokemon list', async () => {
		mockedAxios.onGet('/pokemon').reply(200, mockedPokemonListResponse)

		const response = await fetchPokemons()

		expect(response).toStrictEqual(mockedPokemonListResponse)
	})
})
