const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    stagingUrl: "https://www.saucedemo.com/",
    environment: "staging"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  watchForFileChanges: false,

  // Set default timeout values
  defaultCommandTimeout: 10000, // in milliseconds (adjust as needed)
  pageLoadTimeout: 60000, // in milliseconds (adjust as needed)

  before: () => {
    // Set viewport size to cover 100% of screen width and height
    Cypress.config('viewportWidth', window.screen.availWidth);
    Cypress.config('viewportHeight', window.screen.availHeight);
  }
});
