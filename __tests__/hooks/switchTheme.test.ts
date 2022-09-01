import { renderHook } from '@testing-library/react'

import { useSwitchTheme } from '@/hooks/switchTheme'

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: true,
		media: query,
	})),
})

afterEach(() => {
	localStorage.clear()
})

describe('useSwitchTheme()', () => {
	it('should return isDarkTheme with true, from localStorage', () => {
		localStorage.setItem('isDarkTheme', '1')

		const {
			result: {
				current: { isDarkTheme },
			},
		} = renderHook(useSwitchTheme)

		expect(window.matchMedia).not.toHaveBeenCalled()
		expect(isDarkTheme).toBe(true)
	})

	it('should return isDarkTheme with false, from localStorage', () => {
		localStorage.setItem('isDarkTheme', '0')

		const {
			result: {
				current: { isDarkTheme },
			},
		} = renderHook(useSwitchTheme)

		expect(window.matchMedia).not.toHaveBeenCalled()
		expect(isDarkTheme).toBe(false)
	})

	it('should return isDarkTheme with true, from user color preferences', () => {
		const {
			result: {
				current: { isDarkTheme },
			},
		} = renderHook(useSwitchTheme)

		expect(window.matchMedia).toHaveBeenCalled()
		expect(isDarkTheme).toBe(true)
	})
})
