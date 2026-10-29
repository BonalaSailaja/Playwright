// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  //testMatch : '**/*.spec.js',
  retries : 0,

  timeout : 50*1000,
 expect : {
    timeout : 50000,
 },

 reporter : 'html',
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on'


  },

  

  
});

module.exports = config

