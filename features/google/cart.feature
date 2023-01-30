Feature: Google Search
    As a computer user
    Rodrigo wants to perform searches on Google
    So he can find what fits better for his needs


  Scenario: Performs a search for Selenium on Google
    Given that Rodrigo access Google
    And he performs a search for Selenium on the platform
    When he opens the second result on list
    Then he should see that valid results were returned with all information correct
