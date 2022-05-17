package com.automation.cucumber.pages;


import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WomenCategoryPage extends Utility {

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h2[normalize-space()='Women']")
    WebElement verifyWomenWord;

    @FindBy(xpath = "//a[@class='subcategory-name'][normalize-space()='Tops']")
    WebElement topsLink;

    @FindBy(xpath = "//a[@class='subcategory-name'][normalize-space()='Dresses']")
    WebElement dressesLink;

    @FindBy(id = "selectProductSort")
    WebElement selectProductSort;

    @FindBy(xpath = "//i[@class='icon-th-list']")
    WebElement selectListView;

    @FindBy(id = "center_column")
    WebElement selectProduct;

    @FindBy(id = "group_1")
    WebElement selectSize;

    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addToCartButton;

    @FindBy(xpath = "(//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement confirmationText;

    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeWindow;

    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement qtyfield;

    public String verifyWomenText() {
        return getTextFromElement(verifyWomenWord);
    }

    public void clickOnTopsLink() {
        clickOnElement(topsLink);
    }

    public void clickOnDressLink() {
        clickOnElement(dressesLink);
    }

    public void setSelectProductSort(String productSortby) {
        selectByVisibleTextFromDropDown(selectProductSort, productSortby);
    }

    public void clickListView() {
        clickOnElement(selectListView);
    }

    public void setSelectProduct(String product) {
        clickOnElement(By.xpath("//a[normalize-space()='" + product + "']"));
    }

    public void enterQty(String quantity) {
        qtyfield.clear();
        sendTextToElement(qtyfield, quantity);
    }

    public void setSelectSize(String size) {
        selectByVisibleTextFromDropDown(selectSize, size);
    }

    public void setSelectColour(String colour) {
        clickOnElement(By.xpath("//a[@title='" + colour + "']"));
    }

    public void setAddToCartButton() {
        clickOnElement(addToCartButton);
    }

    public void verifyThatPopUpIsDisplayed(){
        verifyThatElementIsDisplayed(confirmationText);

    }

    public String setConfirmationText() {
        return getTextFromElement(confirmationText);
    }

    public void setCloseWindow() {
        clickOnElement(closeWindow);
    }
}
