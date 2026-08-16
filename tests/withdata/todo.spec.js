import { test, expect } from '@playwright/test';
const todo = require('../../testdata/todo.json');

test('add task', async ({ page }) => {
await page.goto(todo.urlPath.todoURL);
await expect(page.locator('li')).toHaveCount(4);
await page.locator('#new-task').fill(todo.task.taskAdded);
await page.locator('#add-btn').click();
await expect(page.locator('li')).toHaveCount(5);
await expect(page.getByText(todo.validText.addTask)).toBeVisible();
});

test('delete task', async ({ page }) => {
await page.goto(todo.urlPath.todoURL);
await expect(page.locator('li')).toHaveCount(4);
await page.locator('li').filter({ hasText: todo.task.taskDeleted }).getByRole('button', { name: 'Delete' }).click();
await expect(page.locator('li')).toHaveCount(3);
await expect(page.getByText(todo.task.taskDeleted)).not.toBeVisible();
});

test('complete task', async ({ page }) => {
await page.goto(todo.urlPath.todoURL);
await expect(page.locator('li')).toHaveCount(4);
await page.locator('li').filter({ hasText: todo.task.taskCompleted }).getByRole('checkbox').check();
await expect(page.locator('li').filter({ hasText: todo.task.taskCompleted })).toHaveClass(/done/);
});