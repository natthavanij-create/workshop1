const dynamic = require('../testdata/dynamic.json');
const {test, expect} = require('@playwright/test');

module.exports = {
    openDynamicPage: async function(page) {
        await page.goto(dynamic.urlPath.todoURL);
    },

    loadProducts: async function(page) {
        await page.locator('button[id="load-btn"]').click();
    },
    verifyLoading: async function(page) {
        await expect(page.getByText(dynamic.Text.loading)).toBeVisible();
        await expect(page.locator('li')).toHaveCount(3);
    },

    verifyDisabledButton: async function(page) {
        await expect(page.locator('button[id="submit-btn"]')).toBeDisabled();
        await expect(page.locator('button[id="submit-btn"]')).toBeEnabled();
    },

    clickSubmitButton: async function(page) {
    await page.locator('button[id="submit-btn"]').click();
    },

    verifySubmitText: async function(page) {
        await expect(page.getByText(dynamic.Text.submit)).toBeVisible();
    },

    clickSaveButton: async function(page) {
        await page.locator('button[id="save-btn"]').click();
    },

    verifySaveText: async function(page) {
        await expect(page.getByText(dynamic.Text.success)).toBeVisible();
        await expect(page.getByText(dynamic.Text.success)).toBeHidden({ timeout: 5000 });
    },

    deleteAccount: async function(page) {
        page.on('dialog', dialog => dialog.accept());
        await page.locator('button[id="confirm-btn"]').click();
    },

    verifyDeleteText: async function(page) {
        await expect(page.getByRole('status')).toContainText(dynamic.Text.delete);
    },

    dismissDeleteAccount: async function(page) {
        page.on('dialog', dialog => dialog.dismiss());
        await page.locator('button[id="confirm-btn"]').click();
    },

    verifyDismissDeleteText: async function(page) {
        await expect(page.getByRole('status')).toContainText(dynamic.Text.cancel);
    }


}