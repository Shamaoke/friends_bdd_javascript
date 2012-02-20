Feature: Changing a friend's name

  Scenario: Changing a friend's name
    Given the following friend exists: "Chandler"
    When I change the friend's name to "Ross"
    Then the friend should have name "Ross"
