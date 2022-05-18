$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buyproduct.feature");
formatter.feature({
  "line": 2,
  "name": "Buy product test",
  "description": "As user i should buy product",
  "id": "buy-product-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9976526600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on toplink page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on top ranking prodcut link",
  "keyword": "And "
});
formatter.match({
  "location": "TopRankingProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 558530900,
  "status": "passed"
});
formatter.match({
  "location": "TopRankingProductSteps.iClickOnTopRankingProdcutLink()"
});
formatter.result({
  "duration": 2868985500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "user should be avble to buy product",
  "description": "",
  "id": "buy-product-test;user-should-be-avble-to-buy-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on Appearl",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on Track Suits Sportswear Two Piece Biker Short Plus Size  Piece Sets Women Sets Outfits",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select size \"M\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I selecy color yellow",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on chat now",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get sign pop up window",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "signUp Text should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I close Pop Up Window",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on beauty link on top ranking product",
  "keyword": "And "
});
formatter.match({
  "location": "BuyProductPageSteps.iClickOnAppearl()"
});
formatter.result({
  "duration": 5926836600,
  "status": "passed"
});
formatter.match({
  "location": "BuyProductPageSteps.iClickOnTrackSuitsSportswearTwoPieceBikerShortPlusSizePieceSetsWomenSetsOutfits()"
});
formatter.result({
  "duration": 4976588200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"alimod-product-elements subject hugo2-product-util-ellipsis subject-pc number-of-lines-2 field-margin-bottom\"\u003e...\u003c/div\u003e is not clickable at point (516, 18). Other element would receive the click: \u003cdiv class\u003d\"text-wrapper\" title\u003d\"Home \u0026amp; Garden\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-8MVKMBUE\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [48f292e5fa4a441097ce7076ff0de046, clickElement {id\u003d6884ea60-5594-4333-b63c-b03a3ea2106c}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\pkinj\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64709}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: eager, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64709/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (48f292e5fa4a441097ce7076ff0de046)] -\u003e xpath: //div[contains(text(),\u0027Track Suits Sportswear Two Piece Biker Short Plus\u0027)]]\nSession ID: 48f292e5fa4a441097ce7076ff0de046\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.alibaba.utilities.Utility.clickOnElement(Utility.java:50)\r\n\tat com.alibaba.pages.TopRankingProductPage.clickOnProduct(TopRankingProductPage.java:67)\r\n\tat com.alibaba.cucumber.steps.BuyProductPageSteps.iClickOnTrackSuitsSportswearTwoPieceBikerShortPlusSizePieceSetsWomenSetsOutfits(BuyProductPageSteps.java:19)\r\n\tat ✽.And I click on Track Suits Sportswear Two Piece Biker Short Plus Size  Piece Sets Women Sets Outfits(buyproduct.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 15
    }
  ],
  "location": "BuyProductPageSteps.iSelectSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.iSelectColorYellow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.iClickOnChatNow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.iShouldGetSignPopUpWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.signupTextShouldBeVisible()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.iClosePopUpWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuyProductPageSteps.iClickOnBeautyLinkOnTopRankingProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2165627300,
  "status": "passed"
});
formatter.uri("topranking.feature");
formatter.feature({
  "line": 1,
  "name": "topranking page test",
  "description": "as user i should search prodcut",
  "id": "topranking-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4349992800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TopRankingProductSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify  10 product should be visible under popular ranking product",
  "description": "",
  "id": "topranking-page-test;verify--10-product-should-be-visible-under-popular-ranking-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I click on top ranking prodcut link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be navigated to top ranking page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Popular Rankig text should be visible",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see Ten product in popular ranking section",
  "keyword": "And "
});
formatter.match({
  "location": "TopRankingProductSteps.iClickOnTopRankingProdcutLink()"
});
formatter.result({
  "duration": 3310889000,
  "status": "passed"
});
formatter.match({
  "location": "TopRankingProductSteps.iShouldBeNavigatedToTopRankingPage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "TopRankingProductSteps.popularRankigTextShouldBeVisible()"
});
formatter.result({
  "duration": 3339524100,
  "error_message": "org.assertj.core.api.SoftAssertionError: \r\nThe following assertion failed:\r\n1) expected:\u003c\"Popular Rankin[]\"\u003e but was:\u003c\"Popular Rankin[gs]\"\u003e\r\n\r\n\tat org.assertj.core.error.AssertionErrorCreator.multipleSoftAssertionsError(AssertionErrorCreator.java:100)\r\n\tat org.assertj.core.api.AbstractSoftAssertions.assertAll(AbstractSoftAssertions.java:37)\r\n\tat org.assertj.core.api.AbstractSoftAssertions.assertAll(AbstractSoftAssertions.java:42)\r\n\tat com.alibaba.cucumber.steps.TopRankingProductSteps.popularRankigTextShouldBeVisible(TopRankingProductSteps.java:33)\r\n\tat ✽.And Popular Rankig text should be visible(topranking.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopRankingProductSteps.iShouldBeAbleToSeeProductInPopularRankingSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1395932800,
  "status": "passed"
});
});