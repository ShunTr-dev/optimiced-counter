import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'react/react-in-jsx-scope': 'off',
            'max-len': ['warn', { code: 180, comments: 200, ignoreComments: true }],

            curly: 'warn',
            eqeqeq: 'warn',
            'no-throw-literal': 'warn',
            semi: 'off',
            // 'no-mixed-requires': 'error',
            // 'no-this-before-super': 'warn',
            // 'no-unreachable': 'warn',
            // 'no-fallthrough': 'warn',
            // 'newline-before-return': 'warn',
            // 'no-return-await': 'warn',
            // 'arrow-body-style': ['error', 'as-needed'],
            // 'no-unexpected-multiline': 'error',

            'react/prop-types': 'off',
            // 'react/no-unescaped-entities': 'warn',
            // 'react/no-unknown-property': 'warn',
            // 'react/no-unsafe': 'warn',
            // 'react/no-unused-prop-types': 'warn',
            // 'react/no-unused-state': 'warn',
            // 'react/no-unstable-nested-components': 'warn',
            // 'react/no-unused-context-value': 'warn',
            // 'react/no-typos': 'warn',
            // 'react/no-this-in-sfc': 'warn',
            // 'react/no-unsafe': 'warn',
            // 'react/no-unsafe-call': 'warn',
            // 'react/no-unsafe-block': 'warn',
            // 'react/no-unsafe-member-access': 'warn',
            // 'react/no-unsafe-return': 'warn',
            // 'react/no-unknown-property': 'warn',
            // 'react/no-unknown-event': 'warn',
            // 'react/no-unknown-attribute': 'warn',
            // 'react/no-unknown-element': 'warn',
            // 'react/no-unknown-namespace': 'warn',
            // 'react/no-unknown-attribute': 'warn',
            // 'react/no-unknown-property': 'warn',
            // 'react/no-unknown-event': 'warn',
            // 'react/no-unknown-attribute': 'warn',
            // 'react/no-unknown-element': 'warn',
            // 'react/no-unknown-namespace': 'warn',
            // 'react/no-unsafe': 'warn',
            // 'react/no-unsafe-call': 'warn',
            // 'react/no-unsafe-block': 'warn',
            // 'react/no-unsafe-member-access': 'warn',
            // 'react/no-unsafe-return': 'warn',
            // 'react/no-typos': 'warn',
            // 'react/no-this-in-sfc': 'warn',
            // 'react/no-unstable-nested-components': 'warn',
        },
    },
]
