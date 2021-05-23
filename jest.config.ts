import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

export default {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),

  bail: true,

  clearMocks: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  moduleDirectories: ['node_modules', 'src'],

  preset: 'ts-jest',

  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
