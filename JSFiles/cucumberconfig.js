"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
// import * as reporter from "cucumber-html-reporter";
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBc0Q7QUFDM0MsUUFBQSxNQUFNLEdBQVU7SUFDdkIsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUNsQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFDRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztJQUNyQyxZQUFZLEVBQUU7UUFFViwyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBRTNDO1FBQ0QsTUFBTSxFQUFFLGtDQUFrQztLQUMzQztDQUVKLENBQUMifQ==