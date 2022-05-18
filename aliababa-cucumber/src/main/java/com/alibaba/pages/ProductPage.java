package com.alibaba.pages;

import com.alibaba.utilities.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class ProductPage extends Utility {
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }
    Set<String> handles = driver.getWindowHandles();
    Iterator<String> it = handles.iterator();
    String parent = it.next();

    String child = it.next();

    @CacheLookup
    @FindBy(xpath = "//div[@class=\"item-size\"]/descendant::span")
    List<WebElement> size;
    @CacheLookup
    @FindBy(xpath = "//div[@id='container']//a[3]//img[1]")
    WebElement colurYellow;
    @CacheLookup
    @FindBy(xpath = "//span[@data-role='atm-text']")
    WebElement chatNowField;
    @CacheLookup
    @FindBy(xpath = "//li[@class='sc-hd-prefix2-tab-trigger sc-hd-prefix2-tab-active']//a[contains(text(),'Sign In')]")
    WebElement signInText;
    @CacheLookup
    @FindBy(xpath = "//a[@class='sc-hd-prefix2-dialog-close sc-hd-prefix2-icon sc-hd-prefix2-icon-cross']")
    WebElement closingWindow;

//    public void switchingWibdowChild() {
//        Set<String> handles= driver.getWindowHandles();
//        Iterator<String> it = handles.iterator();
//       String parent =it.next();
//        System.out.println("get title of parent window "+driver.switchTo().window(parent).getTitle());
//        System.out.println("parent widnow : "+parent);
//        String child= it.next();
//        System.out.println("child window : "+child);
//        driver.switchTo().window(child);
//        System.out.println("get title of child window "+driver.switchTo().window(child).getTitle());
//
//
//
//    }

    public void clickOnsize(String clothSize) throws InterruptedException {
       driver.switchTo().window(child);
        for (WebElement s : size) {
            if (s.getText().equals(clothSize))
                s.click();
        }
    }

    public void clickOnYellowColur() {

        clickOnElement(colurYellow);
    }

    public void clickOnChatNow() {

        clickOnElement(chatNowField);
    }

    public String getSignInText() throws InterruptedException {

        Thread.sleep(3000);
        return signInText.getText();
    }

    public void clickOnClosingWindow() {

        clickOnElement(closingWindow);
         driver.close();
         driver.switchTo().window(parent);
    }
}


