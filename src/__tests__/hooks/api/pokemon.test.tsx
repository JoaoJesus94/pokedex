import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import { ReactElement } from 'react'

import { usePokemons } from '@/hooks/api/pokemon'

import axios from '@/lib/axios'
import { config } from '@/lib/reactQueryConfig'

import { mockedPokemonListResponse } from '@/mocks/mockedPokemonListResponse'

const mockedAxios = new MockAdapter(axios)

it('should return correct data', async () => {
	const queryClient = new QueryClient(config)
	const wrapper = ({ children }: { children: ReactElement }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)

	mockedAxios.onGet('/pokemon').reply(200, mockedPokemonListResponse)

	const { result } = renderHook(() => usePokemons(), { wrapper })

	await waitFor(() => expect(result.current.data).toStrictEqual(mockedPokemonListResponse))
})
