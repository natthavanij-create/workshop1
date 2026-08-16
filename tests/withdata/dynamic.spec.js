import { test, expect } from '@playwright/test';
const dynamic = require('../../testdata/dynamic.json');

test('load product page', async ({ page }) => {
await page.goto(dynamic.urlPath.todoURL);
await page.locator('button[id="load-btn"]').click();
await expect(page.getByText(dynamic.Text.loading)).toBeVisible();
await expect(page.locator('li')).toHaveCount(3);
});

test('disabled button', async ({ page }) => {
await page.goto(dynamic.urlPath.todoURL);
await expect(page.locator('button[id="submit-btn"]')).toBeDisabled();
await expect(page.locator('button[id="submit-btn"]')).toBeEnabled();
await page.locator('button[id="submit-btn"]').click();
await expect(page.getByText(dynamic.Text.submit)).toBeVisible();
});

test('save changes', async ({ page }) => {
await page.goto(dynamic.urlPath.todoURL);
await page.locator('button[id="save-btn"]').click();
await expect(page.getByText(dynamic.Text.success)).toBeVisible();
await expect(page.getByText(dynamic.Text.success)).toBeHidden({ timeout: 5000 });
});

test('delete account', async ({ page }) => {
await page.goto(dynamic.urlPath.todoURL);
page.on('dialog', dialog => dialog.accept());
await page.locator('button[id="confirm-btn"]').click();
await expect(page.getByRole('status')).toContainText(dynamic.Text.delete);
});

test('delete dismissed', async ({ page }) => {
await page.goto(dynamic.urlPath.todoURL);
page.on('dialog', dialog => dialog.dismiss());
await page.locator('button[id="confirm-btn"]').click();
await expect(page.getByRole('status')).toContainText(dynamic.Text.cancel);
});