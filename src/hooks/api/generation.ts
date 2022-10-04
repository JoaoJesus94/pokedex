import { useQuery } from '@tanstack/react-query'

import { fetchGenerations } from '@/api/generation'

export function useGenerations() {
	return useQuery(['generations'], fetchGenerations)
}
