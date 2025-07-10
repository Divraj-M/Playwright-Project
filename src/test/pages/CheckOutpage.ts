import { Locator, Page,expect } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrapper";


export default class LoginPage {
    private base:PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

private Elements = {
    loginButtonHomePages: 'a[class*="ico-login"]',
    emaillogin: '#Email',
    passwordlogin: '#Password',
    loginButtonclick: '//div[@class="inputs reversed"]//following-sibling::div//input[@class="button-1 login-button"]',
    serachfields: '//input[@class="button-1 search-box-button"]//preceding-sibling::input',
    addtocartlap: '//div//child::input[@class="button-2 product-box-add-to-cart-button"]',
    checkboxbtn: '//div[@class="terms-of-service"]//child::input',
    checkoutbtn: '//button[@class="button-1 checkout-button" and @id="checkout"]',
    popupcheckboxmsg: '//div[@id="terms-of-service-warning-box"]//p[contains(text(),"Please accept the terms of service before the next step.")]',
    addressfield: '//label[@for="billing-address-select"]//parent::div//select',
    option1: '//*[@id="billing-address-select"]/option[1]',
    billcontinuebtn: '//div//child::input[@class="button-1 new-address-next-step-button"]',
    storepick: '#PickUpInStore',
    shipcontinuebtn: '//div[@id="shipping-buttons-container"]//p//following-sibling::input',
    shippingcntinue: '//div[@id="shipping-method-buttons-container"]//input',
    paymentcontinue: '//div[@class="buttons"]//child::input[@class="button-1 payment-method-next-step-button"]',
    paymentinfobtncontinue: '//p//following-sibling::input[@class="button-1 payment-info-next-step-button"]',
    confirmbtnincheckout: '//div[@id="confirm-order-buttons-container"]//input[@class="button-1 confirm-order-next-step-button"]',
    confirmplacedoreder: '//div[@class="section order-completed"]//div[@class="title"]//strong',
    ordernumber: '//div[@class="buttons"]//preceding-sibling::ul//li[1]',
    invoiceclickhere: '//div[@class="buttons"]//preceding-sibling::ul//li[2]//a',
    pdfinvoice: '//a[@class="button-2 pdf-order-button"]',
    orderinfo: '//div[@class="page-title"]//child::h1',
    orderinfo2: '//div[@class="page-title"]//a[contains(text(),"Print")]//preceding-sibling::h1',
    creditcheckbox: '//div[@class="section payment-method"]//ul//li[3]//div//div[2]//input',
    selectpaymentopt: '//select[@id="CreditCardType" and @class="dropdownlists valid"]',
    visaopt: '//select[@id="CreditCardType" and @class="dropdownlists valid"]//option[1]',
    cardholdername: '//td//child::input[@id="CardholderName"]',
    cardnumber: '//table//td[2]//child::input[@id="CardNumber"]',
    expirymonth: '//td[2]//child::select[@id="ExpireMonth"]',
    year: '//div[@class="section payment-info"]//div//table//tbody//tr[4]//td[2]//select[2]',
    cardcode: '//tr[5]//td[2]//span//preceding-sibling::input',
    onedaypick: '//ul[@class="method-list"]//li[2]//div//input[@id="shippingoption_1"]',
    twodayshipping: '//ul[@class="method-list"]//li[3]//div//input[@id="shippingoption_2"]',
    backtoshipping: '//div[@id="shipping-method-buttons-container"]//p//a',
    thankyou: '//div[@class="page-title"]//h1'
};
}