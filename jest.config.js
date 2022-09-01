const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/components/$1',
		'^@/lib/(.*)$': '<rootDir>/lib/$1',
		'^@/hooks/(.*)$': '<rootDir>/hooks/$1',
		'^@/api/(.*)$': '<rootDir>/api/$1',
		'^@/utils/(.*)$': '<rootDir>/utils/$1',
		'^@/mocks/(.*)$': '<rootDir>/__tests__/mocks/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['<rootDir>/__tests__/mocks'],
}

module.exports = createJestConfig(customJestConfig)
