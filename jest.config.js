export default {
  testEnvironment: 'jsdom', // Use "node" if not testing DOM
  verbose: true, // Show passed tests in console
  transform: {
    '^.+\\.js$': 'babel-jest', // Use Babel for JS files
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1', // Webpack alias resolution
  },
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        outputPath: 'jest-report.html',
        includeConsoleLog: true, // Adds console logs to HTML report
        includeSuiteFailure: true, // Includes failing test suites
        includeFailureMsg: true,
        includePassedTests: true, // ✅ This ensures passed tests appear in the HTML report
        includePendingTests: true, // ✅ If there are skipped tests, show them too
      },
    ],
  ],
};
