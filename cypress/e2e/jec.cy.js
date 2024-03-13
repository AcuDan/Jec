import jsonData from "../fixtures/jsonData.config.json"

describe('JEAN EDWARDS CONSULTING', {
  viewportHeight: 1300,
  viewportWidth: 960,
})

beforeEach(() => {
  // 1. Navigate to the Sauce Labs Sample Application (https://www.saucedemo.com/) in Incognito mode. 
  const jecUrl = Cypress.env(`${Cypress.env('environment')}Url`);

  cy.window().then((win) => {
    const prefs = {
      chrome: {
        profile: {
          default_content_settings: {
            popups: 0,
          },
        },
        args: ['--incognito'],
      },
    };

    cy.visit(jecUrl, {
      chromeWebSecurity: false,
      chromePreferences: prefs,
    });
  });
});


it('Jec', () => {
    cy.tests()  
})


