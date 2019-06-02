'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'tasks-client',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-cli-mirage': {
      enabled: false
    },
    'simple-auth': {
        authorizer: 'simple-auth-authorizer:token'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token'
    };
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
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token'
    };
    // here you can enable a production-specific feature
  }

  return ENV;
};
