/* jshint node: true */
const donationFormRules = require('./donation-form-rules');

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'donation-form',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      DONATION_FORM_RULES: donationFormRules
    },

    firebase: {
      apiKey: "AIzaSyBoUibmSr6WMPpWMXgYhc1TgUBH7OWBp6A",
      authDomain: "donation-form-e0a99.firebaseapp.com",
      databaseURL: "https://donation-form-e0a99.firebaseio.com",
      storageBucket: "donation-form-e0a99.appspot.com",
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
