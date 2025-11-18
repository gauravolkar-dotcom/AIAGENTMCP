import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  const title = page.locator('h1');
  await expect(title).toContainText('Playwright');
});
