// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"

test('app showsa fact of cats and a image', async ({ page }) => {
  await page.goto('LOCALHOST_URL');
});
