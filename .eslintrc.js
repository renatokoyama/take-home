module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['promise', 'prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        // https://github.com/prettier/prettier/issues/1954
        ignorePattern: '^import\\W.*',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowTernary: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      // Disable the use of "I" interface prefixes
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // Disable the use of "T" type alias prefixes
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: false,
        },
      },
    ],
    // Disable no-unused-express to favour @typescript-eslint version
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // Packages like apollo-boost and react-redux have nested dependencies, this error complains
    // they're extraneous.
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
