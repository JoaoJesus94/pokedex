const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/lib/(.*)$': '<rootDir>/src/lib/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/api/(.*)$': '<rootDir>/src/api/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@/mocks/(.*)$': '<rootDir>/src/__tests__/mocks/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['<rootDir>/src/__tests__/mocks'],
}

module.exports = createJestConfig(customJestConfig)
