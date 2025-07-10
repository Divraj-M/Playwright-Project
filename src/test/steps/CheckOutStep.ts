import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

Given('I want to be in the demowebshop {string}', async function (string) { 
    const baseurl = process.env.BASE_URL;
  if (!baseurl) {
    throw new Error('BASE_URL is not defined in the environment variables');
  }
  await pageFixture.page?.goto(baseurl);
  pageFixture.logger?.info(`Navigated to ${baseurl}`);

});

When('I log in and add an item and add to cart', async function (dataTable) {
    

 });

When('click checkout the product', async function () { 

});

When('forgot to click the term & condition button', async function () {

 });

Then('the user should see the pop up windows as to click the terms&condition', async function () { 

});

When('checkout the product', async function () { });

When('select  address and payment methods', async function () { });

When('confirm order', async function () { });

Then('the user should see the order number and able to download the invoice as pdf', async function () { });

When('click the terms & conditions', async function () { });

When('click the checkout button', async function () { });

Then('the user should see the checkout page and billing details', async function () { });

When('click the orders', async function () { });

When('click the invoice pdf', async function () { });

Then('the user should see the entire order details', async function () { });

When('enter the billing address and click store pick', async function () { });

When('Proceed and confirm order', async function () { });

Then('the user should see the order code successfully', async function () { });

When('click the checkout button and proceed', async function () { });

When('select the credit card method and enter the required fields', async function (dataTable) { });

When('proceed the details and confirm', async function () { });


When('click the checkout buttons and proceed', async function () { });

When('select the two day shipping as two Day Air', async function () { });

When('proceed the further details', async function () { });


When('select back and click the store pickup', async function () { });

When('proceed the remaining steps and confirm', async function () { });

