import { Given, When, Then } from 'cucumber'
import { browser, element, by } from 'protractor'

Given(/^Open the Falcon page$/, { timeout: 40000 }, async function () {
    console.log("hello world")
    browser.waitForAngularEnabled(true);
    return browser.get('http://10.10.10.231:8082/#/app/dashboard');
});

When(/^Maximize the window and verify the page title$/, { timeout: 70000 }, async function () {
    return browser.manage().window().maximize()
    browser.sleep(40000)
    console.log("Winodow Maximized")
    const title = await browser.driver.getTitle();
    console.log("website title :" + title)
});

Then(/^click on the Dashboard And click on the Rest API Test Result title$/, { timeout: 40000 }, async function () {
    browser.manage().timeouts().implicitlyWait(15000);
    //click on dashboard
    await element(by.xpath("(//h4[@class='media-box-heading ng-binding'])[1]")).click();
    console.log("Clicked on Dashboard")

    await element(by.xpath("//select[@name='modules']")).click();
    console.log("Clicked on Rest API Test Result")
    // await element(by.xpath("//select[@name='modules']")).click();

    // console.log("Clicked on Rest API Test Result")

});

Then(/^select create falcon post from the drop down box$/, { timeout: 40000 }, async function () {
    browser.manage().timeouts().implicitlyWait(15000);
    await element(by.xpath("//select[@data-ng-model='rctrl.reportsTableParams.filter().modulename']")).click();
    console.log("Clicked on create Falcon post")
    // browser.sleep(12000)
});
//select[@data-ng-model='rctrl.reportsTableParams.filter().status']
Then(/^select falcon from the drop down box$/, { timeout: 40000 }, async function () {
    browser.manage().timeouts().implicitlyWait(15000);
    await element(by.xpath("//select[@data-ng-model='rctrl.reportsTableParams.filter().customername']")).click();
    console.log("Selected the falcon from drop down")
    browser.sleep(15000)
});


Then(/^select pass fromt the status drop down box$/, { timeout: 40000 }, async function () {
    await element(by.xpath("((//select[@data-ng-model='rctrl.reportsTableParams.filter().status'])|(//option[@value='PASS']))[2] ")).click();
    console.log("Selected the status as PASS from the drop down")
});

Then(/^select deleteprojectAPI from the list of content$/, { timeout: 4000 }, async function () {
    browser.manage().timeouts().implicitlyWait(15000)
    // await element(by.binding("deleteProjectApiTest")).click();
    // await element(by.xpath("(//td[@class='ng-binding'])[1]")).click();
    console.log("Clicked on the deleteProjectAPITest")
});


Given(/^Click recent run tab$/, { timeout: 40000 }, async function () {
    await element(by.css("a[ng-href='#/recentruns/view'] > span")).click
     
   });
   
   When(/^select the product and testcase$/, { timeout: 40000 }, async function () {
    await element(by.css("tbody > tr:nth-of-type(1) > [data-title='\'Product Name\'']")).click
    await element(by.xpath("//td[contains(.,'deleteProjectApiTest')]")).click
   });
   
   Then(/^verify the status and detail.$/, { timeout: 40000 }, async function () {
   var statusDetail= await element(by.css(".p-t-5")).getText
   console.log(statusDetail)
   });