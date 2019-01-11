const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
	srcDir: 'src',
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
	webfontloader: {
		google: {
			families: ['Press+Start+2P', 'Poppins:400,600']
		}
	},
	loading: false,
	css: ['minireset.css'],
	sassResources: ['mathsass', 'sass-metallic-ratio'],
	plugins: [],
	modules: [
		'@nuxtjs/pwa',
		'nuxt-sass-resources-loader',
		'nuxt-webfontloader'
	],
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
