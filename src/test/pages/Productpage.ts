import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";


export default class LoginPage {
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    loginButtonHomePage: '//a[@class="ico-register"]//parent::li//following-sibling::li[1]//child::a',
    emailField: '//div[@class="form-fields"]//descendant::div[2]//label//following-sibling::input',
    passwordField: '//div[@class="form-fields"]//descendant::div[3]//label//following-sibling::input',
    loginButtonSubmit: '//div[@class="inputs reversed"]//following-sibling::div//input',
    searchStoreField: '//div[@class="search-box"]//descendant::input[2]//preceding-sibling::input',
    productTitle: '//div[@class="product-rating-box"]//preceding-sibling::h2//a',
    assertnotification: '//div[@class="master-wrapper-page"]//preceding-sibling::div[@id="bar-notification"]//p',
    addToCart: '//input[@class="button-2 product-box-add-to-cart-button"]',
    addTocartnumber: '//span[contains(text(),"Shopping cart")]//following-sibling::span',
    shoppingcart: '#topcartlink > a',
    removefromcart: '//td[@class="product-picture"]//preceding-sibling::td//descendant::input',
    updatecart: '//input[@class="button-2 continue-shopping-button"]//preceding-sibling::input',
    emptycart: '//div[@class="page-title"]//parent::div//div[2]',
    cartproductavailable: '//td[@class="product-picture"]//following-sibling::td//child::a',
    addtowishlist: '#add-to-wishlist-button-53',
    clickwishlist: '//li[@id="topcartlink"]//following-sibling::li//child::a',
    imgalbum3: '//div[@class="picture"]//a[@title="Show details for 3rd Album"]',
    productnameinwishlist: '//td[@class="product-picture"]//following-sibling::td//a',
    urlforwishlist: '//div[@class="share-info"]//p//a[@class="share-link"]',
    urlsharing: '//div[@class="share-info"]//child::p//span',
    increaseqty: '//input[@class="qty-input"]',
    qtyten: '//span[@class="product-price order-total"]//child::strong',
    addtocartinqty: '//input[@class="button-1 add-to-cart-button"]',
    giftcardpage: '//h2[@class="product-title"]//a[text()="$25 Virtual Gift Card"]',
    emailfriendbtn: 'input[class$="email-a-friend-button"]',
    friendemail: 'input[class^="friend-email"]',
    myemail: 'input[class*="your-email"]',
    sendmail: '.send-email-a-friend-button',
    successfulsentmail: '//div[@class="title"]//following-sibling::div[@class="result"]',
    invalidemailmsg: '//span[@class="field-validation-error"]//span',
    addtocartcheckbox: '//td[@class="add-to-cart"]//child::input',
    addtocartbtnbelowchkbox: '//input[@class="button-2 wishlist-add-to-cart-button"]',
    assertcartwishlist: '//td[@class="product-picture"]//following-sibling::td//a',
    shippingineday: '//ul[@class="shipping-results"]//li[2]//child::span',
    countryclick: '//label[contains(text(),"Country:")]//following-sibling::select',
    zipcode: '//label[contains(text(),"Zip / postal code:")]//following-sibling::input',
    shippingestimate: '//input[@class="button-2 estimate-shipping-button"]'
};
}