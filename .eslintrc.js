module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'xo',
        'plugin:react/jsx-runtime',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: [2, 4],
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
