// hello-test.js
var casper = require('casper').create();
casper.test.begin("Hello, Test!", 1, function(test) {
  test.assert(true);
  test.done();
});
