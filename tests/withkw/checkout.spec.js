import {test, expect} from '@playwright/test';
const checkout = require('../../testdata/checkout.json');
const keywords = require('../../keywords/checkout.js');

test ('Place order page', async ({ page }) => {
    await keywords.openCheckoutPage(page);
    await keywords.clickPlaceOrder(page);
    await keywords.verifyAlertCountry(page);
});

test ('add country', async ({ page }) => {

    await keywords.openCheckoutPage(page);
    await keywords.addCountry(page);
    await keywords.verifyAlertAgree(page);
});

test ('add express shipping', async ({ page }) => {
    await keywords.openCheckoutPage(page);
    await keywords.addExpressShipping(page);
    await keywords.verifyStatusExpress(page);
});
