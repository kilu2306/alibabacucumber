Feature: topranking page test
  as user i should search prodcut
  Background: user is on home page
    Given I am on home page

Scenario: verify  10 product should be visible under popular ranking product
  When I click on top ranking prodcut link
  Then I should be navigated to top ranking page
  And  Popular Rankig text should be visible
  And  I should be able to see Ten product in popular ranking section
