Feature: Creating friends

  Scenario: Creating friends
    Given the following friends exist: "Chandler", "Ross"
    When I create a friends collection
    Then the collection should contain "Chandler"
    Then the collection should contain "Ross"
