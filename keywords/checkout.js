const checkout = require('../testdata/checkout.json');
const {test, expect} = require('@playwright/test');


module.exports = {
    openCheckoutPage: async (page) => {
        await page.goto(checkout.urlPath.todoURL);
    },
    clickPlaceOrder: async (page) => {
        await page.locator('button[id="place-order"]').click();
    },

    verifyAlertCountry: async (page) => {
        await expect(page.getByRole('alert')).toContainText(checkout.validText.alertCountry);
    },

    addCountry: async (page) => {
        await page.getByLabel('Country').selectOption({ label: checkout.options.country });
        await page.locator('button[id="place-order"]').click();
    },

    verifyAlertAgree: async (page) => {
        await expect(page.getByRole('alert')).toContainText(checkout.validText.alertAgree);
    },

    addExpressShipping: async (page) => {
        await page.getByLabel('Country').selectOption({ label: checkout.options.country });
        await page.getByRole('radio', { name: checkout.options.shipping }).check();
        await page.getByLabel(checkout.options.agree).check();
        await page.locator('button[id="place-order"]').click();
    },
    verifyStatusExpress: async (page) => {
        await expect(page.getByRole('status')).toContainText(checkout.validText.statusExpress);
    }
};
