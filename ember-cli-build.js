/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // add Semantic UI

  app.import({
    development: 'bower_components/semantic/dist/semantic.js',
    production: 'bower_components/semantic/dist/semantic.min.js'
  });

  app.import({
    development: 'bower_components/semantic/dist/semantic.css',
    production: 'bower_components/semantic/dist/semantic.min.css'
  });

  const semanticAssert = [
    'fonts/icons.eot',
    'fonts/icons.otf',
    'fonts/icons.svg',
    'fonts/icons.ttf',
    'fonts/icons.woff',
    'fonts/icons.woff2',
    'images/flags.png'
  ];

  semanticAssert.forEach(asset => {
    app.import(`bower_components/semantic/dist/themes/default/assets/${asset}`, {
      destDir: 'assets/themes/default/assets/fonts'
    });
  });

  // add Semantic UI form validation rules

  app.import('vendor/semantic-form-rules.js');

  // add jQuery Serialize Object

  app.import({
    development: 'bower_components/jquery-serialize-object/jquery.serialize-object.js',
    production: 'bower_components/jquery-serialize-object/dist/jquery.serialize-object.min.js'
  });

  // add Moment.js

  app.import({
    development: 'bower_components/moment/min/moment-with-locales.js',
    production: 'bower_components/moment/min/moment-with-locales.min.js'
  });

  // add Hashids

  app.import({
    development: 'bower_components/hashids/dist/hashids.js',
    production: 'bower_components/hashids/dist/hashids.min.js'
  });

  if (app.env === 'production') {
    app.import('bower_components/hashids/dist/hashids.min.map');
  }

  return app.toTree();
};
