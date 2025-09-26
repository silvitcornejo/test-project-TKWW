const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 800,
    viewportWidth: 1280,
    baseUrl: 'https://www.theknot.com/',
    specPattern: "cypress/e2e/**/*.cy.js",

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    retries: {
      runMode: 2,
      openMode: 1
    },

    chromeWebSecurity: false, // allow header overrides

    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && launchOptions.args) {
          launchOptions.args.push(
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
            'AppleWebKit/537.36 (KHTML, like Gecko) ' +
            'Chrome/118.0.0.0 Safari/537.36'
          );
        }
        return launchOptions;
      })
    },
  },
})