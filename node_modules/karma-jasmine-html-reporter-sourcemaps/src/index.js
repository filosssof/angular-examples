var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initReporter = function(files,  baseReporterDecorator) {

  baseReporterDecorator(this);
  
  files.unshift(createPattern(__dirname + '/lib/adapter.js'));
  
  // webpacked from "sourcemapped-stacktrace": "^1.0.1"
  // todo: add job to reproduce this file from "sourcemapped-stacktrace"
  files.unshift(createPattern(__dirname + '/lib/webpacked-sourcemapped-stacktrace.js'));
  files.unshift(createPattern(__dirname + '/lib/html.jasmine.reporter.js'));
  files.unshift(createPattern(__dirname + '/css/jasmine.css'));
};

initReporter.$inject = ['config.files',  'baseReporterDecorator'];

module.exports = {
  'reporter:karma-jasmine-html-sourcemaps': ['type', initReporter]
};