import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import { ReactElement } from 'react'

import { usePokemon, usePokemons } from '@/hooks/api/pokemon'

import axios from '@/lib/axios'
import { config } from '@/lib/reactQueryConfig'

import { mockedPokemonListResponse, mockedPokemonResponse } from '@/mocks/mockedPokemonListResponse'

const mockedAxios = new MockAdapter(axios)

const queryClient = new QueryClient(config)
const wrapper = ({ children }: { children: ReactElement }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('Hooks | API | Pokemon', () => {
	it('usePokemons should return correct data', async () => {
		mockedAxios.onGet('/pokemon').reply(200, mockedPokemonListResponse)

		const { result } = renderHook(() => usePokemons(), { wrapper })

		await waitFor(() => expect(result.current.data).toStrictEqual(mockedPokemonListResponse))
	})

	it('usePokemon should return correct data', async () => {
		mockedAxios.onGet('/pokemon/charmander').reply(200, mockedPokemonResponse)

		const { result } = renderHook(() => usePokemon('charmander'), { wrapper })

		await waitFor(() => expect(result.current.data).toStrictEqual(mockedPokemonResponse))
	})
})
