const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	root: true,
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
	rules: {
		'no-descending-specificity': null,
		'no-duplicate-selectors': null
	}
}
