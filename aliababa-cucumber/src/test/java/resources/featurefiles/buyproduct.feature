
Feature: Buy product test
  As user i should buy product

  Background: I am on toplink page
    Given I am on home page
    And  I click on top ranking prodcut link

    Scenario: user should be avble to buy product
      When I click on Appearl
      And  I click on Track Suits Sportswear Two Piece Biker Short Plus Size  Piece Sets Women Sets Outfits
      And  I select size "M"
      And  I selecy color yellow
      And  I click on chat now
      Then I should get sign pop up window
      And  signUp Text should be visible
      And  I close Pop Up Window
      And  I click on beauty link on top ranking product




