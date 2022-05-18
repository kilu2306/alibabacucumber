package com.alibaba.cucumber.steps;

import com.alibaba.pages.HomePage;
import com.alibaba.pages.TopRankingProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.assertj.core.api.SoftAssertions;
import org.junit.Assert;

public class TopRankingProductSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on top ranking prodcut link$")
    public void iClickOnTopRankingProdcutLink() {
        new HomePage().clickOnTopRankedProduct();
    }

    @Then("^I should be navigated to top ranking page$")
    public void iShouldBeNavigatedToTopRankingPage() {

    }

    @And("^Popular Rankig text should be visible$")
    public void popularRankigTextShouldBeVisible() {
        SoftAssertions softAssertions = new SoftAssertions();
        String expactedText = "Popular Rankin";
        //Assert.assertEquals("Displayed Text is wrong ", expactedText, new TopRankingProductPage().getPopulerRankingText());
        softAssertions.assertThat(new TopRankingProductPage().getPopulerRankingText()).isEqualTo(expactedText);
        softAssertions.assertAll();

    }

    @And("^I should be able to see Ten product in popular ranking section$")
    public void iShouldBeAbleToSeeProductInPopularRankingSection() {
        String expactedNum = String.valueOf(Integer.valueOf(10));
        String actualText = String.valueOf(new TopRankingProductPage().getPopularRankingProductListSize());
        Assert.assertEquals("Displayed product size  is wrong ", expactedNum, actualText);
    }
}
