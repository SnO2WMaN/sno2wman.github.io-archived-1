const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
	mode: 'universal',
	head: {
		titleTemplate: 'SnO2WMaN',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: "SnO2WMaN's website"
			}
		]
	},
	meta: {
		lang: 'jp',
		ogHost: 'https://blog.sno2wman.graphics',
		twitterCard: 'summary',
		twitterSite: '@SnO2WMaN'
	},
	loading: { color: '#fff' },
	css: ['minireset.css'],
	sassResources: ['mathsass', 'sass-metallic-ratio'],
	plugins: [],
	modules: ['@nuxtjs/pwa', 'nuxt-sass-resources-loader'],
	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				// ESLint
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
		plugins: [new CaseSensitivePathsPlugin()]
	}
}
