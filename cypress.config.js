const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@shelex/cypress-allure-plugin/writer")(on, config);
      return config;
    },
  },
  env: {
    allure: true,
  },
});
