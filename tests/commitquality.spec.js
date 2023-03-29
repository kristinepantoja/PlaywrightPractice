const { test, expect } = require('@playwright/test');
const { products, learn, addProduct, login, practice} = require('./elements/elements.js'); //import from elements library

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CommitQuality/);
});

test('elements are visible', async ({ page }) => {
  await page.goto("/");
  //navbar links are visible
  //await page.getByTestId(products.productsLink);
  await expect(page.getByTestId(products.productsLink)).toBeVisible();
  await expect(page.getByTestId(addProduct.addProductsLink)).toBeVisible();
  await expect(page.getByTestId(practice.practiceLink)).toBeVisible();
  await expect(page.getByTestId(learn.learnLink)).toBeVisible();
  await expect(page.getByTestId(login.loginLink)).toBeVisible();

  //filter elements are visible
  await expect(page.getByTestId(products.productFilterBtn)).toBeVisible();
  await expect(page.getByTestId(products.resetFilterBtn)).toBeVisible();
  await expect(page.locator(products.productFilterText)).toBeVisible();
});



