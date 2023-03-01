export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$ ': 'ts-jest',
  },
};
