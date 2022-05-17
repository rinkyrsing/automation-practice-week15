$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account.feature");
formatter.feature({
  "line": 1,
  "name": "Account Test",
  "description": "As a user I want to open account in automation practice website",
  "id": "account-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "account-test;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sing in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"\u003cfirstname\u003e\",lastname \"\u003clastname\u003e\"and password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"\u003caddL1\u003e\" city\"\u003ccity\u003e\" state\"\u003cstate\u003e\" zipCd\"\u003czipCd\u003e\" country\"\u003ccountry\u003e\" mobNo.\"\u003cmobNo\u003e\" addAlias\"\u003caddAlias\u003e\" and click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "account-test;verifythatusershouldcreateaccountsuccessfully;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "addL1",
        "city",
        "state",
        "zipCd",
        "country",
        "mobNo",
        "addAlias"
      ],
      "line": 14,
      "id": "account-test;verifythatusershouldcreateaccountsuccessfully;;1"
    },
    {
      "cells": [
        "Happy",
        "Life",
        "Always123",
        "1 Nice Building",
        "Maryland",
        "Ohio",
        "12345",
        "United States",
        "0123456789",
        "main home"
      ],
      "line": 15,
      "id": "account-test;verifythatusershouldcreateaccountsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9304799200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "account-test;verifythatusershouldcreateaccountsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on sing in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email and click on create an account button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I fill all mandatory fields of personal information form with firstname \"Happy\",lastname \"Life\"and password\"Always123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandatory fields of address details form with addL\"1 Nice Building\" city\"Maryland\" state\"Ohio\" zipCd\"12345\" country\"United States\" mobNo.\"0123456789\" addAlias\"main home\" and click on register button",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to my account page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 85285500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iClickOnSingInLink()"
});
formatter.result({
  "duration": 2100098400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iEnterEmailAndClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 145251100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Happy",
      "offset": 73
    },
    {
      "val": "Life",
      "offset": 90
    },
    {
      "val": "Always123",
      "offset": 108
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfPersonalInformationFormWithFirstnameLastnameAndPassword(String,String,String)"
});
formatter.result({
  "duration": 2180097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Nice Building",
      "offset": 62
    },
    {
      "val": "Maryland",
      "offset": 84
    },
    {
      "val": "Ohio",
      "offset": 100
    },
    {
      "val": "12345",
      "offset": 112
    },
    {
      "val": "United States",
      "offset": 127
    },
    {
      "val": "0123456789",
      "offset": 149
    },
    {
      "val": "main home",
      "offset": 170
    }
  ],
  "location": "CreateAccountSteps.iFillAllMandatoryFieldsOfAddressDetailsFormWithAddLCityStateZipCdCountryMobNoAddAliasAndClickOnRegisterButton(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3088245400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.iShouldNavigateToMyAccountPage()"
});
formatter.result({
  "duration": 43736100,
  "status": "passed"
});
formatter.after({
  "duration": 864139300,
  "status": "passed"
});
formatter.uri("signin.feature");
formatter.feature({
  "line": 1,
  "name": "SingIn Test",
  "description": "\r\nAs a user I want to login into automation practice website",
  "id": "singin-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4955317200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "userShouldNavigateToSignInPageSuccessFully",
  "description": "",
  "id": "singin-test;usershouldnavigatetosigninpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Sign in Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SingInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 84700,
  "status": "passed"
});
formatter.match({
  "location": "SingInSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1405497900,
  "status": "passed"
});
formatter.match({
  "location": "SingInSteps.iShouldNavigateToSignInPageSuccessfully()"
});
formatter.result({
  "duration": 29049900,
  "error_message": "java.lang.AssertionError: AUTHENTICATION expected [AUTHENTICATION] but found [Sign in Page not displayed]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.automation.cucumber.steps.SingInSteps.iShouldNavigateToSignInPageSuccessfully(SingInSteps.java:28)\r\n\tat ✽.Then I should navigate to Sign in Page successfully(signin.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1041598700,
  "status": "passed"
});
formatter.uri("women.feature");
formatter.feature({
  "line": 2,
  "name": "Women Category Test",
  "description": "As a user I want to shop in women category on automation practices websit",
  "id": "women-category-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5211649400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verifyUserShouldNavigateToWomenCategoryPageSuccessfully",
  "description": "",
  "id": "women-category-test;verifyusershouldnavigatetowomencategorypagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to women category page",
  "keyword": "Then "
});
formatter.match({
  "location": "SingInSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.iShouldNavigateToWomenCategoryPage()"
});
formatter.result({
  "duration": 20021807100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[normalize-space()\u003d\u0027Women\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-PM2RI3U\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bb7659a6fc082c6e3a6127d6325ea137, findElement {using\u003dxpath, value\u003d//h2[normalize-space()\u003d\u0027Women\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\rinky\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58636}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58636/devtoo..., se:cdpVersion: 101.0.4951.54, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bb7659a6fc082c6e3a6127d6325ea137\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.automation.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.automation.cucumber.pages.WomenCategoryPage.verifyWomenText(WomenCategoryPage.java:52)\r\n\tat com.automation.cucumber.steps.WomenCategorySteps.iShouldNavigateToWomenCategoryPage(WomenCategorySteps.java:21)\r\n\tat ✽.Then I should navigate to women category page(women.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1280321500,
  "status": "passed"
});
});