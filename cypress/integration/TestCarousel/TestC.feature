@smoke
Feature: Test Carousel Features

Background: 
    Given I visit the homepage

Scenario: From First to Second Image with next Button
    When I click on 'next button' of carousel to go to the next product
    Then The carousel image is the 'second' image

Scenario: From First to Third Image with the left side of Carousel 
    When I click on 'left side' of carousel to go to the previous product
    Then The carousel image is the 'third' image

Scenario: From First to Third Image with the Button Bar Indicator
    When I click on the 'third' button
    Then The carousel image is the 'third' image
