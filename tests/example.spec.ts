import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('Should have correct metadata and elements', async ({ page }) => {
    await expect(page).toHaveTitle('React Playwright');
    await expect(page.getByRole('heading', {
      name: 'Welcome to the Home Page'
    })).toBeVisible();
  });

  test('Should redirect to form page on click', async ({ page }) => {
    await page.getByRole('link', { name: 'Go to Form'}).click();

    await expect(page).toHaveTitle('Form');
  });
});
