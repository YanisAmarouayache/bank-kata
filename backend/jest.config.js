module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };