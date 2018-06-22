var {defineSupportCode} = require("cucumber");
var data = require('../../testData/global.js');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^open google$/, function (done) {
        browser.get("https://www.google.co.in/");
        done();
    });
});