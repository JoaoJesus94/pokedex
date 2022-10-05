export function formatPokemonNumber(num: number | string) {
	return `#${String(num).padStart(3, '0')}`
}
