import { test, expect } from '@playwright/test';
const login = require('../../testdata/login.json');

test('login failed', async ({ page }) => {
await page.goto(login.urlPath.loginURL);
await page.locator('#user').fill(login.invalidUser.username);
await page.locator('#pass').fill(login.invalidUser.password);
await page.locator('button[type="submit"]').click();
await expect(page).toHaveURL(/login/);
await expect(page.getByRole('alert')).toContainText(login.validText.alert);
});

test('login passed', async ({ page }) => {
await page.goto(login.urlPath.loginURL);
await page.locator('#user').fill(login.validUser.username);
await page.locator('#pass').fill(login.validUser.password);
await page.locator('button[type="submit"]').click();
await expect(page).toHaveURL(login.urlPath.dashboardURL);
await expect(page.getByText(login.validText.success)).toBeVisible();
});
