Feature: Write test case with the help of Cucumber with Protractor using Javascript

   Scenario: Launch Browser, Open Falcon page and verify the page title
      Given Open the Falcon page
      When Maximize the window and verify the page title
      Then click on the Dashboard And click on the Rest API Test Result title
      Then select create falcon post from the drop down box
      Then select falcon from the drop down box
      Then select pass fromt the status drop down box
      Then select deleteprojectAPI from the list of content

   Scenario: Verify resent run tab in main navigation
      Given Click recent run tab
      When  select the product and testcase
      Then  verify the status and detail.