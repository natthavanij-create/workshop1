const todo = require('../testdata/todo.json');
const {test, expect} = require('@playwright/test');

module.exports = {

    openTodoPage: async (page) => {
        await page.goto(todo.urlPath.todoURL);
    },

    verifyTaskCount4: async (page, expectedCount) => {
        await expect(page.locator('li')).toHaveCount(4);
    },

    fillTaskForm: async (page, task) => {
        await page.locator('#new-task').fill(todo.task.taskAdded);
        await page.locator('#add-btn').click();
    },

    verifyAddedTask: async (page, expectedCount) => {
        await expect(page.locator('li')).toHaveCount(5);
        await expect(page.getByText(todo.validText.addTask)).toBeVisible();
    },

    deleteTask: async (page, task) => {
        await page.locator('li').filter({ hasText: todo.task.taskDeleted }).getByRole('button', { name: 'Delete' }).click();
    },

    verifyDeletedTask: async (page, expectedCount) => {
        await expect(page.locator('li')).toHaveCount(3);
        await expect(page.getByText(todo.task.taskDeleted)).not.toBeVisible();
    },

    completeTask: async (page, task) => {
        await page.locator('li').filter({ hasText: todo.task.taskCompleted }).getByRole('checkbox').check();
    },

    verifyCompletedTask: async (page, task) => {
        await expect(page.locator('li').filter({ hasText: todo.task.taskCompleted })).toHaveClass(/done/);
    },

};