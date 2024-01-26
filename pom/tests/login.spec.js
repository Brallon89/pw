import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
import dotenv from 'dotenv'
dotenv.config()

test('User Login success', async ({ page }) => {
  await page.goto(process.env.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(process.env.SAUCEDEMOUSER,process.env.SAUCEDEMOPASS)
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});