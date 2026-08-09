import { test, expect } from '@playwright/test';

test('load product page', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/dynamic')
await page.locator('button[id="load-btn"]').click();
await expect(page.getByText('Loading...')).toBeVisible();
await expect(page.locator('li')).toHaveCount(3);
});

test('disabled button', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/dynamic')
await expect(page.locator('button[id="submit-btn"]')).toBeDisabled();
await expect(page.locator('button[id="submit-btn"]')).toBeEnabled();
await page.locator('button[id="submit-btn"]').click();
await expect(page.getByText('Form submitted!')).toBeVisible();
});

test('save changes', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/dynamic')
await page.locator('button[id="save-btn"]').click();
await expect(page.getByText('Saved successfully')).toBeVisible();
await expect(page.getByText('Saved successfully')).toBeHidden({ timeout: 5000 });
});

test('delete account', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/dynamic')
page.on('dialog', dialog => dialog.accept());
await page.locator('button[id="confirm-btn"]').click();
await expect(page.getByRole('status')).toContainText('Account deleted');
});