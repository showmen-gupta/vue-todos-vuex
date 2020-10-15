const { defaults } = require("jest-config");

module.exports = {
  // we should collect coverage
  collectCoverage: true,
  // set a directory for coverage cache
  coverageDirectory: "<rootDir>/tests/__coverage__",
  // set patterns to ignore for coverage
  coveragePathIgnorePatterns: ["/node_modules/"],
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx", "js"],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  bail: 1,
};
