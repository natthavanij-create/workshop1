import { test, expect } from '@playwright/test';

test('login failed', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/login/');
await page.locator('#user').fill('admin');
await page.locator('#pass').fill('password');
await page.locator('button[type="submit"]').click();
await expect(page).toHaveURL(/login/);
await expect(page.getByRole('alert')).toContainText('Invalid username or password');
});

test('login passed', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/login/');
await page.locator('#user').fill('fame');
await page.locator('#pass').fill('s3cret');
await page.locator('button[type="submit"]').click();
await expect(page).toHaveURL('https://fpsau.com/Training-pw-r1/workshop-1/dashboard/');
await expect(page.getByText('You have successfully signed in.'));
});
// #comment
