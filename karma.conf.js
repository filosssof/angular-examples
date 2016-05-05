// Karma configuration
// Generated on Wed Apr 27 2016 14:53:45 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
	'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.js',
	'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-resource.js',
	'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-mocks.js',
	'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-sanitize.js',
	'bower_components/angular-aria/angular-aria.js',
	'bower_components/angular-animate/angular-animate.js',
	'bower_components/angular-material/angular-material.js',
	'app.module.js',
	'todo/*.*',
	'calculator/*.*',
	'xo/*.*',
	'rss/*.*',
	'navigation/*.*',
	'tests/*.js'

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
 // add webpack as preprocessor 
            'tests/*.js': ['sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['karma-jasmine-html-sourcemaps'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox','Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
}
