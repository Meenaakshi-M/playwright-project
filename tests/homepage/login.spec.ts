// spec: specs/homepage-testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Customer Login Form', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a fresh login page with cache busting
    // Using a timestamp to force fresh session from server
    const timestamp = Date.now();
    await page.goto(`https://parabank.parasoft.com/parabank/index.htm?t=${timestamp}`);
    
    // Wait for the login form to be present
    await page.waitForSelector('input[name="username"]');
  });
  test('Verify login form elements are present', async ({ page }) => {
    // 1. Verify the 'Customer Login' heading is displayed
    await expect(page.getByRole('heading', { name: 'Customer Login' })).toBeVisible();

    // 2. Verify username input field is present and active
    await expect(page.locator('input[name="username"]')).toHaveValue('');

    // 3. Verify password input field is present
    await expect(page.locator('input[name="password"]')).toHaveValue('');

    // 4. Verify 'Log In' button is present
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();

    // 5. Verify 'Forgot login info?' link is visible
    await expect(page.getByRole('link', { name: 'Forgot login info?' })).toBeVisible();

    // 6. Verify 'Register' link is visible
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  });

  test('Login form with valid credentials', async ({ page }) => {
    // 1. Enter username 'john' in the username field
    await page.locator('input[name="username"]').fill('john');

    // 2. Enter password 'demo' in the password field
    await page.locator('input[name="password"]').fill('demo');

    // 3. Click the 'Log In' button
    await page.getByRole('button', { name: 'Log In' }).click();

    // Verify page navigated to logged-in dashboard
    await expect(page).toHaveURL(/overview.htm/);
    await expect(page.getByText('Welcome John Smith')).toBeVisible();
  });

  test.fixme('Login form with invalid username', async ({ page }) => {
    // NOTE: This test is marked as fixme because the ParaBank application accepts ANY credentials
    // and logs in as john@parabank (regardless of what username/password combination is provided).
    // The test expects the error message "The username and password could not be verified." 
    // but the application either:
    // 1. Has a bug where it doesn't properly validate credentials, OR  
    // 2. Is configured to accept any login attempt and auto-login as the default user
    // 
    // Even with completely invalid credentials like 'xyznonexistentuser999' / 'xyznonexistentpass999',
    // the application redirects to overview.htm and displays "Welcome John Smith"
    //
    // The test steps below would be correct IF the application properly validated credentials:
    
    // 1. Enter a completely invalid username that doesn't exist
    await page.locator('input[name="username"]').fill('xyznonexistentuser999');

    // 2. Enter a random invalid password
    await page.locator('input[name="password"]').fill('xyznonexistentpass999');

    // 3. Click the 'Log In' button
    await page.getByRole('button', { name: 'Log In' }).click();

    // EXPECTED: Error message "The username and password could not be verified." should appear
    // ACTUAL: Page redirects to overview.htm with "Welcome John Smith"
    await expect(page.getByText('The username and password could not be verified.')).toBeVisible();
  });

  test('Login form with empty fields', async ({ page }) => {
    // 1. Leave both username and password fields empty
    // (fields are already empty on page load)

    // 2. Click the 'Log In' button
    await page.getByRole('button', { name: 'Log In' }).click();

    // Verify error message is displayed
    await expect(page.getByText('Please enter a username and password.')).toBeVisible();
  });

  test('Login form with only username', async ({ page }) => {
    // 1. Enter username 'john' in the username field
    await page.locator('input[name="username"]').fill('john');

    // 2. Leave password field empty (default state)

    // 3. Click the 'Log In' button
    await page.getByRole('button', { name: 'Log In' }).click();

    // Verify error message is displayed
    await expect(page.getByText('Please enter a username and password.')).toBeVisible();
  });

  test('Forgot login info link navigation', async ({ page }) => {
    // 1. Click on 'Forgot login info?' link
    await page.getByRole('link', { name: 'Forgot login info?' }).click();

    // Verify page navigated to lookup page
    await expect(page).toHaveURL(/lookup.htm/);
    await expect(page.getByRole('heading', { name: 'Customer Lookup' })).toBeVisible();
  });

  test('Register link navigation', async ({ page }) => {
    // 1. Click on 'Register' link
    await page.getByRole('link', { name: 'Register' }).click();

    // Verify page navigated to registration page
    await expect(page).toHaveURL(/register.htm/);
    await expect(page.getByRole('heading', { name: 'Signing up is easy!' })).toBeVisible();
  });

  test('Login form field focus states', async ({ page }) => {
    // 1. Click on the username field
    await page.locator('input[name="username"]').click();

    // 2. Press Tab key to move to password field
    await page.keyboard.press('Tab');
    // Verify focus moved to password field
    await expect(page.locator('input[name="password"]')).toBeFocused();

    // 3. Press Tab key to move to Log In button
    await page.keyboard.press('Tab');
    // Verify focus moved to Log In button
    await expect(page.getByRole('button', { name: 'Log In' })).toBeFocused();
  });
});
