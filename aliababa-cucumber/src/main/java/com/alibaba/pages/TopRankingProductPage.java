package com.alibaba.pages;

import com.alibaba.utilities.Utility;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class TopRankingProductPage extends Utility {


    public TopRankingProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[@class='main']")
    WebElement popularRankingText;
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"hugo2-pc-grid-pc wrap undefined\"]/descendant::div[@class=\"bottom\"]")
    List<WebElement> populerRankingProductList;
    @CacheLookup
    @FindBy(xpath = "//div[@class='text'][normalize-space()='Apparel']")
    WebElement apparelLink;
    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Beauty & Personal Care')]")
    WebElement beautyLink;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Track Suits Sportswear Two Piece Biker Short Plus')]")
    WebElement prodcutName;
    @CacheLookup
    @FindBy(xpath = "//div[@class=\"text-wrapper\"]")
    List<WebElement> allList;
    @CacheLookup
    @FindBy(xpath = "//span[@class='iconfont icon-arrow-right undefined']")
    WebElement rightArrow;

    public String getPopulerRankingText() {
        return popularRankingText.getText();
    }

    public int getPopularRankingProductListSize() {
        return populerRankingProductList.size();
    }

    public void clickOnApparelLink() throws InterruptedException {
        Thread.sleep(3000);
        mouseHoverToElementAndClick(apparelLink);
    }

    public void clickOnProduct() throws InterruptedException {
        Actions actions = new Actions(driver);
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();

//        actions.dragAndDropBy(driver.findElement(By.xpath("//html")),0,1500);
//        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
//        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
//        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        Thread.sleep(3000);
        clickOnElement(prodcutName);
    }


    public void clickONbeautyLink() throws InterruptedException {

        while (true) {
            for (WebElement element : allList) {
                // String titles = element.getAttribute("title");
                if (element.getAttribute("title").equalsIgnoreCase("Business Services")) {
                    Thread.sleep(3000);
                    element.click();
                    break;
                } else clickOnNext();
            }
            System.out.println("title of parent widnwo :" + driver.getTitle());

        }


    }


    public void clickOnNext() {
        clickOnElement(rightArrow);
    }

}


