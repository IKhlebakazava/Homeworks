Feature: Home Page Functionality

  Scenario: Checking the Home Page Title
    Given user is on the home page
    When user gets the title of the home page
    Then the title should be "Next-gen browser and mobile automation test framework for Node.js"