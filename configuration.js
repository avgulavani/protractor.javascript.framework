
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config =
{
    //seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['TestCalculatorSite.js'],
    onPrepare: function () 
    {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },

    suites:
    {
        Smoke: 'AccessJSObjectDemo.js',
    },
    jasmineNodeOpts:
    {
        showColors: true,   // use color in command line output
    }
};

    // Capabilities to be passed to the webdriver instance
    /*
    capabilities:{
    'browserName': 'firefox'
                }
    */

    // For IE go to webdriver-manager folder and keep server file  there.
    // webdriver-manager update --ie 
    // For chrome ONLY even you don't start server protractor will start server and run test(directconnect)