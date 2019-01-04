const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: ['eslint:recommended', 'plugin:vue/recommended'],
	plugins: ['vue'],
	rules: {
		'no-unused-vars': isProduction ? 'error' : 'warn',
		'no-console': isProduction ? 'error' : 'warn',
		'no-debugger': isProduction ? 'error' : 'warn',
		'vue/no-unused-components': isProduction ? 'error' : 'warn',
		'vue/html-indent': ['error', 'tab'],
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{ ignores: ['nuxt', 'nuxt-link', 'nuxt-child', 'no-ssr'] }
		]
	}
}
