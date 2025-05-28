// jest.config.js
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['ts-jest']
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Меняет символический путь '@/...' на реальный относительно корня проекта
  },
  "verbose": true,
  "silent": false
};
