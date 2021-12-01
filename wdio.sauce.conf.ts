// Let's load the default configs:
const defaults = require("./wdio.conf.ts").config;
const _ = require("lodash");
const dotenv = require("dotenv");

dotenv.config();

const overrides = {
    // Here are all Sauce Labs specific overrides:
    services: ['sauce'],
    user: "OHarris",
    key: process.env.SAUCE_LABS_API_KEY,
    regions: 'us',
    sauceConnect: false,
    capabilities: [{
      "browserName": 'MicrosoftEdge',
      "browserVersion": '87.0',
      "platformName": 'Windows 10',
      "sauce:options": {
      }
    },
    {
      "browserName": 'chrome',
      "browserVersion": '88.0',
      "platformName": 'Windows 10',
      "sauce:options": {
      }
    },
    {
      "browserName": 'firefox',
      "browserVersion": '83.0',
      "platformName": 'Windows 10',
      "sauce:options": {
        "acceptSslCerts" : true
      }
    },
    {
      "browserName": 'safari',
      "browserVersion": '12.0',
      "platformName": 'macOS 10.14',
      "sauce:options": {
      }
    }
  ],
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
  }]],

  onComplete: () => {
  console.log('Check Sauce Labs dashboard https://saucelabs.com/!');
  },
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);