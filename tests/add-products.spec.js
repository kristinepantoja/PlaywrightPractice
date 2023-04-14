const { test, expect } = require('@playwright/test');
const { products,  learn, addProduct, login, practice} = require('./elements/elements.js'); //import from elements library

test('Navigate to the Add Product page', async ({ page }) => {
    await page.goto("/");
    await page.getByTestId(addProduct.addProductsLink).click();
    await expect(page).toHaveURL('https://commitquality.com/add-product');
});

test('Verify all elements are visible', async ({ page }) => {
    await page.goto("/add-product");

    await expect(page.getByTestId(addProduct.productName)).toBeVisible();
    await expect(page.getByTestId(addProduct.productPrice)).toBeVisible();
    await expect(page.getByTestId(addProduct.dateStocked)).toBeVisible();
    await expect(page.getByTestId(addProduct.submitForm)).toBeVisible();
    await expect(page.getByTestId(addProduct.cancelForm)).toBeVisible();
});