import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('React Playwright');
    await expect(page.getByRole('heading', {
      name: 'Home'
    })).toBeVisible();
    await expect(page.getByRole('link', {
      name: 'Go to Form'
    })).toBeVisible();
  });

  test('Should redirect to form page on click', async ({ page }) => {
    await page.getByRole('link', { name: 'Go to Form'}).click();

    await expect(page.getByText('Form')).toBeVisible();
  });
});

test.describe('Form page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/form');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    // check the page title
    await expect(page).toHaveTitle('React Playwright');
    // check the h1 tag with form heading
    await expect(page.getByRole('heading', {
      name: 'Form'
    })).toBeVisible();
    // check the Go to Home link is there
    await expect(page.getByRole('link', { 
      name: 'Go to Home'
    })).toBeVisible();
    // check the input field with placeholder text is there
    await expect(page.getByPlaceholder('Enter your text')).toBeVisible();
    // check the submit button is present with correct label and attributes
    await expect(page.getByRole('button', {
      name: 'Submit',
      exact: true,
    })).toBeVisible();
  });

  test('should have empty list on the start page', async ({ page }) => {
    // using custome test attribute
    const itemList = page.getByTestId('items-list');

    await expect(itemList).toBeEmpty();
  });

  test('should add item to the list', async ({ page }) => {
    const inputField = page.getByPlaceholder('Enter your text');
    const submitButton = page.getByRole('button', { name: 'Submit' });

    // fill the input field
    await inputField.fill('Test item');
    // click on submit button
    await submitButton.click();

    // check the inserted item using item container
    const itemList = page.getByTestId('items-list');
    await expect(itemList).toContainText('Test item');

    // using item custom selector defined check the 0th item
    const item = page.getByTestId('item').nth(0);
    await expect(item).toHaveText('Test item');

    // check the input reset
    await expect(inputField).toBeEmpty();
  });
});
