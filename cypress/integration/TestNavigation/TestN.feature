@smoke
Feature: Test Navigation Features

Background: 
    Given I visit the homepage

Scenario: Open Contact Page
    When I click 'Contact' to navigate to a different page
    Then I must be on 'Contact' Page

Scenario: Open About us Page
    When I click 'About us' to navigate to a different page
    Then I must be on 'About us' Page

Scenario: Open Cart Page
    When I click 'Cart' to navigate to a different page
    Then I must be on 'Cart' Page

Scenario: Open Log In Page
    When I click 'Log in' to navigate to a different page
    Then I must be on 'Log in' Page

Scenario: Open Sign Up Page
    When I click 'Sign up' to navigate to a different page
    Then I must be on 'Sign up' Page