Feature: Checking search functionality

  Scenario: User searches for a query
    Given user is on the search functionality page
    When user searches for "Frameworks"
    Then the first result should contain "Frameworks"