"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given(/^Open the Falcon page$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hello world");
        protractor_1.browser.waitForAngularEnabled(true);
        return protractor_1.browser.get('http://10.10.10.231:8082/#/app/dashboard');
    });
});
cucumber_1.When(/^Maximize the window and verify the page title$/, { timeout: 70000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        return protractor_1.browser.manage().window().maximize();
        protractor_1.browser.sleep(40000);
        console.log("Winodow Maximized");
        const title = yield protractor_1.browser.driver.getTitle();
        console.log("website title :" + title);
    });
});
cucumber_1.Then(/^click on the Dashboard And click on the Rest API Test Result title$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        //click on dashboard
        yield protractor_1.element(protractor_1.by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
        console.log("Clicked on Dashboard");
        yield protractor_1.element(protractor_1.by.xpath("//select[@name='modules']")).click();
        console.log("Clicked on Rest API Test Result");
        // await element(by.xpath("//select[@name='modules']")).click();
        // console.log("Clicked on Rest API Test Result")
    });
});
cucumber_1.Then(/^select create falcon post from the drop down box$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        yield protractor_1.element(protractor_1.by.xpath("//select[@data-ng-model='rctrl.reportsTableParams.filter().modulename']")).click();
        console.log("Clicked on create Falcon post");
        // browser.sleep(12000)
    });
});
//select[@data-ng-model='rctrl.reportsTableParams.filter().status']
cucumber_1.Then(/^select falcon from the drop down box$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        yield protractor_1.element(protractor_1.by.xpath("//select[@data-ng-model='rctrl.reportsTableParams.filter().customername']")).click();
        console.log("Selected the falcon from drop down");
        protractor_1.browser.sleep(15000);
    });
});
cucumber_1.Then(/^select pass fromt the status drop down box$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("((//select[@data-ng-model='rctrl.reportsTableParams.filter().status'])|(//option[@value='PASS']))[2] ")).click();
        console.log("Selected the status as PASS from the drop down");
    });
});
cucumber_1.Then(/^select deleteprojectAPI from the list of content$/, { timeout: 4000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.manage().timeouts().implicitlyWait(15000);
        // await element(by.binding("deleteProjectApiTest")).click();
        // await element(by.xpath("(//td[@class='ng-binding'])[1]")).click();
        console.log("Clicked on the deleteProjectAPITest");
    });
});
cucumber_1.Given(/^Click recent run tab$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("a[ng-href='#/recentruns/view'] > span")).click;
    });
});
cucumber_1.When(/^select the product and testcase$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.css("tbody > tr:nth-of-type(1) > [data-title='\'Product Name\'']")).click;
        yield protractor_1.element(protractor_1.by.xpath("//td[contains(.,'deleteProjectApiTest')]")).click;
    });
});
cucumber_1.Then(/^verify the status and detail.$/, { timeout: 40000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var statusDetail = yield protractor_1.element(protractor_1.by.css(".p-t-5")).getText;
        console.log(statusDetail);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMkNBQWlEO0FBRWpELGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7O1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpREFBaUQsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDeEUsT0FBTyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNoQyxNQUFNLEtBQUssR0FBRyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzRUFBc0UsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTs7UUFDN0Ysb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsb0JBQW9CO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FB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