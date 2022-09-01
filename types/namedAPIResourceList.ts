import { NamedAPIResource } from '@/types/namedAPIResource'

export type NamedAPIResourceList = {
	count: number
	next: string | null
	previous: string | null
	results: NamedAPIResource[]
}
