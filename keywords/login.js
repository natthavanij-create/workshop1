const login = require('../testdata/login.json');
const {test, expect} = require('@playwright/test');

module.exports = {
    openLoginPage: async (page) => {
        await page.goto(login.urlPath.loginURL);
    },

    fillloginFormFailed: async (page, username, password) => {
        await page.locator('#user').fill(login.invalidUser.username);
        await page.locator('#pass').fill(login.invalidUser.password);
        await page.locator('button[type="submit"]').click();
    },

    verifyLoginFailed: async (page) => {
        await expect(page).toHaveURL(/login/);
        await expect(page.getByRole('alert')).toContainText(login.validText.alert);
    },
    fillloginFormPassed: async (page, username, password) => {
        await page.locator('#user').fill(login.validUser.username);
        await page.locator('#pass').fill(login.validUser.password);
        await page.locator('button[type="submit"]').click();
    },
    verifyLoginPassed: async (page) => {
        await expect(page).toHaveURL(login.urlPath.dashboardURL);
        await expect(page.getByText(login.validText.success)).toBeVisible();
    }
};