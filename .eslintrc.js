module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'no-tabs': 0,
        semi: [2, 'always'],
        'no-trailing-spaces': [2, { skipBlankLines: true }],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        'no-console': 0,
        'comma-dangle': 0,
        'space-before-blocks': 0,
        'space-before-function-paren': 0,
        'space-in-parens': 0,
        // skipBlankLines: true
    }
};
