import { test, expect } from '@playwright/test';

test('Place order page', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/checkout');
await page.locator('button[id="place-order"]').click();
await expect(page.getByRole('alert')).toContainText('Please select a country');
});

test('add country', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/checkout');
await page.getByLabel('Country').selectOption({ label: 'Japan' });
await page.locator('button[id="place-order"]').click();
await expect(page.getByRole('alert')).toContainText('You must agree to the terms and conditions');
});

test('add express shipping', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/checkout');
await page.getByLabel('Country').selectOption({ label: 'Japan' });
await page.getByRole('radio', { name: 'Express (1 day)' }).check();
await page.getByLabel('I agree to the terms and conditions').check();
await page.locator('button[id="place-order"]').click();
await expect(page.getByRole('status')).toContainText('Order placed successfully! Shipping: express');
});