/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/__tests__/setupTests.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  ],
  testPathIgnorePatterns: ['<rootDir>/__tests__/setupTests.js'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js, jsx, ts, tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/jest',
    '<rootDir>/src/assets',
  ],
};
