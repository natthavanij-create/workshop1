import {test, expect} from '@playwright/test';
const dynamic = require('../../testdata/dynamic.json');
const keywords = require('../../keywords/dynamic.js');

test('load products', async ({ page }) => {
    await keywords.openDynamicPage(page);
    await keywords.loadProducts(page);
    await keywords.verifyLoading(page);
});

test('disabled button', async ({ page }) => {
    await keywords.openDynamicPage(page);
    await keywords.verifyDisabledButton(page);
    await keywords.clickSubmitButton(page);
    await keywords.verifySubmitText(page);
});

test('save changes', async ({ page }) => {
    await keywords.openDynamicPage(page);
    await keywords.clickSaveButton(page);
    await keywords.verifySaveText(page);
});

test('delete account', async ({ page }) => {
    await keywords.openDynamicPage(page);
    await keywords.deleteAccount(page);
    await keywords.verifyDeleteText(page);
});

test('delete dismissed', async ({ page }) => {
    await keywords.openDynamicPage(page);
    await keywords.dismissDeleteAccount(page);
    await keywords.verifyDismissDeleteText(page);
});