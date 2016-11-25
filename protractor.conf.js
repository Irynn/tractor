/**
 * Created by imykhailenko on 11/21/16.
 */
// An example configuration file.
exports.config = {
    //testing Angular2 app
    useAllAngular2AppRoots: true,

    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['specs/*_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000,
        // Do not continue test run if at least expect failed.
        stopSpecOnExpectationFailure: true,
        // If true, print colors to the terminal.
        showColors: true
    },

    onPrepare: function () {
        global.browser = browser;
        browser.manage().window().maximize();
        //adding lib to use require without relative paths
        global.rekuire = require("rekuire");
        global.EC = protractor.ExpectedConditions;
        var customMatchers = require('jasmine-protractor-matchers');

        beforeEach(function () {
            jasmine.addMatchers(customMatchers);
            //Some code that needs to be executed before each test in all specs could be written here.
        });

        afterEach(function () {
            //Some code that needs to be executed before each test in all specs could be written here.
        });


    }
};