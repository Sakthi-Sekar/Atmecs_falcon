import {Config} from "protractor";
// import * as reporter from "cucumber-html-reporter";
export let config:Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/sample.feature'],
    cucumberOpts: {
     
        // require step definitions
        require: [
          './StepDefinitions/*.js' // accepts a glob

        ],
        format: 'json:report/cucumber_report.json',
      }
  
  };