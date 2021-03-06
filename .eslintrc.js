module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'prettier',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['promise', 'jest'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        comments: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
      }
    ]
  }
};
