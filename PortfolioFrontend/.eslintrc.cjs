module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "jsdoc"],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "eqeqeq": "warn",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "jsdoc/require-jsdoc": [1, {
      "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": true,
          "FunctionExpression": true
      }
    }],
    "jsdoc/require-param": 1, // Warns if @param tags are missing in JSDoc comment
    "jsdoc/require-param-type": 1, // Warns if @param tags are missing type information
    "jsdoc/require-returns": 1, // Warns if @returns is missing in JSDoc comment
    "jsdoc/require-returns-type": 1 // Warns if @returns tag is missing type information
      
    },
}
