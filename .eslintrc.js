module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:storybook/recommended',
		'next',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
		'prettier/prettier': [
			'error',
			{ endOfLine: 'auto', useTabs: true, tabWidth: 2 },
		], // Ensure Prettier and ESLint agree on tab settings
		indent: ['error', 'tab'], // Use tabs for indentation
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
