package com.alibaba.cucumber.steps;

import com.alibaba.pages.ProductPage;
import com.alibaba.pages.TopRankingProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.assertj.core.api.SoftAssertions;

public class BuyProductPageSteps {

    @When("^I click on Appearl$")
    public void iClickOnAppearl() throws InterruptedException {
        new TopRankingProductPage().clickOnApparelLink();
    }

    @And("^I click on Track Suits Sportswear Two Piece Biker Short Plus Size  Piece Sets Women Sets Outfits$")
    public void iClickOnTrackSuitsSportswearTwoPieceBikerShortPlusSizePieceSetsWomenSetsOutfits() throws InterruptedException {
        new TopRankingProductPage().clickOnProduct();
    }

    @And("^I select size \"([^\"]*)\"$")
    public void iSelectSize(String s) throws InterruptedException {
        new ProductPage().clickOnsize(s);

    }
    @And("^I selecy color yellow$")
    public void iSelectColorYellow() {
        new ProductPage().clickOnYellowColur();
    }

    @And("^I click on chat now$")
    public void iClickOnChatNow() {
        new ProductPage().clickOnChatNow();
    }

    @Then("^I should get sign pop up window$")
    public void iShouldGetSignPopUpWindow() {

    }

    @And("^signUp Text should be visible$")
    public void signupTextShouldBeVisible() throws InterruptedException {
        SoftAssertions softAssertions= new SoftAssertions();
        String expactedText="Sign In";
        //softAssertions.assertThat(expactedText).contains(new ProductPage().getSignInText());
        softAssertions.assertThat(new ProductPage().getSignInText()).isEqualTo(expactedText);
        softAssertions.assertAll();
    }

    @And("^I close Pop Up Window$")
    public void iClosePopUpWindow() {
        new ProductPage().clickOnClosingWindow();
    }


    @And("^I click on beauty link on top ranking product$")
    public void iClickOnBeautyLinkOnTopRankingProduct() throws InterruptedException {
        new  TopRankingProductPage().clickONbeautyLink();
    }
}
