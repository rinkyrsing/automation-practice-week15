
Feature: Women Category Test
  As a user I want to shop in women category on automation practices websit

  @smoke @regression
  Scenario:  verifyUserShouldNavigateToWomenCategoryPageSuccessfully
    Given I am on homepage
    When I click on Women tab
    Then I should navigate to women category page

  @sanity @regression
  Scenario Outline: verify User Should Add Product To The Cart Successfully
    Given I am on homepage
    When I click on Women tab
    And I click on the product "<product>"
    And I change quantity "<qty>"
    And I select size "<size>"
    And I select colour "<colour>"
    And click on add to cart button
    And I should see the message confirming that the product successfully added to shopping cart
    Then I click on x button to close the pop up.

    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |
