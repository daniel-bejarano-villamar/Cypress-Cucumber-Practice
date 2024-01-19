@fullregression @checkout
Feature: Add, buy and remove

Background: 
    Given I visit the homepage

Scenario: Add one product to cart
    When Select the first product and add it to the cart
    And View Detail of the Phone and add to the cart
    And Accept Product
    Then Check there are 1 product in the cart

Scenario: Buy a Phone
    When Select Phones Categories
    And Add a phone to cart
    And View Detail of the Phone and add to the cart
    And Accept Product
    Then Check there are 1 product in the cart
    And I want to the place order
    And Fill in and send information
    Then I must a successful purchase message
    
Scenario: Remove products to cart
    When Select the first product and add it to the cart
    And View Detail of the Phone and add to the cart
    And Accept Product
    But Return to Home Page
    And Select the second product to add it to the cart
    And View Detail of the Phone and add to the cart
    And Accept Product
    But Return to Home Page
    And Select the second product to add it to the cart
    And View Detail of the Phone and add to the cart
    And Accept Product
    But Return to Home Page
    Then Check there are 3 products in the cart
    But Remove the product 1 from the cart
    But Remove the product 1 from the cart
    Then Check there are 2 product in the cart
