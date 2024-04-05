# Aura challenge

This project uses [Playwright](https://playwright.dev/) as a test automation framework. This project is set up with TypeScript.

## Getting Started

These instructions will help you to set up your local environment to run tests.

### Prerequisites

Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installing

To install the required dependencies, including Playwright, run the following command in your project directory:

```
npm i
```

### Tests

All test scripts are located in the tests folder. 

To run tests, use the following command:

```
npx playwright test --project chromium --headed
```

### Reporting

To open an HTML report of the last test run, execute:

```
npx playwright show-report
```

### Test Documentation
The test cases are documented in a Google Sheets document available here:

[View Test Cases](https://docs.google.com/spreadsheets/d/1MhS4BRgEvJ0EzD6J39wSmxK4EebKpKENiMRTt8ltpqk/edit#gid=0)


### Test Results and Videos
After running tests, videos of the test runs are available in the test-results folder for review. These recordings are helpful for debugging failures and verifying test actions visually.

### Github actions

There is also Github Action workflow configured.
Tests will run on push or pull request on branches main/master. The workflow will install all dependencies, install Playwright and then run the tests. It will also create the HTML report.