import { useQuery } from '@tanstack/react-query'

import { fetchGeneration, fetchGenerations } from '@/api/generation'

export function useGenerations() {
	return useQuery(['generations'], fetchGenerations)
}

export function useGeneration(name: string) {
	return useQuery(['generation', name], () => fetchGeneration(name))
}
