Feature: Creating a friend

  Scenario: Creating a friend
    When I create friend with name "Chandler"
    Then the friend should have name "Chandler"
