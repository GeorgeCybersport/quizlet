module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-indent': [2, 4],
		'react/jsx-indent-props': [2, 4],
		indent: [2, 4],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'indent': ['error', 2],
		'allowIndentationTabs': true,
	},
};

