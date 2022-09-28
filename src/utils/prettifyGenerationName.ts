import { capitalize } from 'radash'

export const prettifyGenerationName = (name: string) =>
	name
		.split('-')
		.map((str, index) => {
			if (index === 0) return capitalize(str)
			return str.toUpperCase()
		})
		.join(' ')
