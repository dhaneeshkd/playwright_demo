
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // Global settings for all tests
  use: {
    trace: 'on-first-retry',

    launchOptions: {
      slowMo: 1000,
    },
  },

  projects: [
    /*{
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    */
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /*{
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});
