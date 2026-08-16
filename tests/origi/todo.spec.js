import { test, expect } from '@playwright/test';

test('add task', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/todo/');
await expect(page.locator('li')).toHaveCount(4);
await page.locator('#new-task').fill('Learn Playwright');
await page.locator('#add-btn').click();
await expect(page.locator('li')).toHaveCount(5);
await expect(page.getByText('5 items — 1 completed')).toBeVisible();
});

test('delete task', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/todo/');
await expect(page.locator('li')).toHaveCount(4);
await page.locator('li')
.filter({ hasText: 'Buy coffee beans' })
.getByRole('button', { name: 'Delete' })
.click();
await expect(page.locator('li')).toHaveCount(3);
await expect(page.getByText('Buy coffee beans')).not.toBeVisible();
});

test('complete task', async ({ page }) => {
await page.goto('https://fpsau.com/Training-pw-r1/workshop-1/todo/');
await expect(page.locator('li')).toHaveCount(4);
await page.locator('li').filter({ hasText: 'Buy milk' }).getByRole('checkbox').check();
await expect(page.locator('li').filter({ hasText: 'Buy milk' })).toHaveClass(/done/);
});