const { defaults } = require("jest-config");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx", "js"],
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
  bail: 1,
};
