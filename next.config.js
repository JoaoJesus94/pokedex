/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: { domains: ['raw.githubusercontent.com'] },
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.tsx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
}

module.exports = nextConfig
