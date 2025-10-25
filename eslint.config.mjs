import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import eslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginCompat from 'eslint-plugin-compat';
import prettierConfig from './prettier.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const commonRules = {
  // === Common ===
  'no-console': [
    'error',
    {
      allow: ['info', 'warn', 'error'],
    },
  ],
  'consistent-return': 'off',
  'class-methods-use-this': 'off',
  'arrow-body-style': 'off',
  'prefer-arrow-callback': 'off',
  'multiline-ternary': ['warn', 'always-multiline'],
  'max-len': ['error', { code: 120, ignoreComments: true }],
  'object-curly-newline': ['error', { multiline: true }],

  // === TypeScript ===
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
      enums: true,
      typedefs: true,
      ignoreTypeReferences: true,
    },
  ],
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    { accessibility: 'explicit', overrides: { constructors: 'off' } },
  ],

  // === React ===
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'react/jsx-props-no-spreading': 'off',

  // === Unused imports ===
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],

  // === Import Order ===
  'import/order': [
    'warn',
    {
      groups: [
        'builtin', // Built-in Node.js modules
        'external', // External packages (e.g., 'router')
        'internal', // Project aliases (e.g., '@/shared/**')
        'parent', // Imports from parent directory ('../')
        'sibling', // Imports from current directory ('./constants', './types')
        'index', // Import from './' (the main index)
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
      },
    },
  ],
  'import/prefer-default-export': 'off',
  'import/no-unresolved': [
    'error',
    {
      ignore: ['unfonts.css'],
    },
  ],

  // === ESLint Comments ===
  'eslint-comments/disable-enable-pair': [
    'error',
    {
      allowWholeFile: true,
    },
  ],
  'eslint-comments/require-description': 'warn',

  // === Prettier ===
  'prettier/prettier': ['error', prettierConfig],
};

const eslintConfig = [
  {
    ignores: ['node_modules', 'dist', 'coverage', '*.config.*js', '*.config.*mjs', '*.config.*ts'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      import: eslintPluginImport,
      compat: eslintPluginCompat,
      'unused-imports': eslintPluginUnusedImports,
      'eslint-comments': eslintComments,
      '@typescript-eslint': tseslint.plugin,
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
      },
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.svg'],
          paths: ['src'],
        },
      },
      'import/core-modules': ['unplugin.css'],
    },

    rules: commonRules,
  },

  // === Serverless (api, node) ===
  {
    files: ['api/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: eslintPluginImport,
      compat: eslintPluginCompat,
      'unused-imports': eslintPluginUnusedImports,
      'eslint-comments': eslintComments,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: commonRules,
  },

  eslintPluginPrettierRecommended,
];

export default eslintConfig;
