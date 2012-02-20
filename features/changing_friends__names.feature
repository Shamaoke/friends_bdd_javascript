Feature: Changing friends' names

  Scenario: Changing a name of a single friend
    Given the following friends exist: "Phoebe", "Mike"
    Given I create a friends collection
    When I change the name "Phoebe" to "Princess"
    Then the collection should contain "Princess"
    Then the collection should contain "Mike"
    Then the collection should not contain "Phoebe"
