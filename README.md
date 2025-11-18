# AIAGENT Playwright Test Project

This is a Playwright test automation project for the AIAGENT MCP.

## Prerequisites

- Node.js 16 or higher
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser UI)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Generate test code using Codegen
```bash
npm run codegen
```

### View test report
```bash
npm run report
```

## Project Structure

```
├── tests/
│   ├── example.spec.ts           # Example test file
│   └── ecommerce-checkout.spec.ts # Ecommerce checkout test
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## Writing Tests

Create test files in the `tests/` directory with `.spec.ts` extension. Example:

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to homepage', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Configuration

Edit `playwright.config.ts` to:
- Change test timeout
- Configure different browsers
- Set up base URL
- Configure reporters
- Set up web server

## Test Cases

### Ecommerce Checkout Test
- **File**: `tests/ecommerce-checkout.spec.ts`
- **Description**: Tests adding iPhone X to cart and checkout process
- **Steps**:
  1. Navigate to login page
  2. Sign in with credentials
  3. Find and add iPhone X to cart
  4. Navigate to cart
  5. Verify product is in cart
  6. Proceed to checkout
  7. Confirm product is in checkout

## More Information

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test Guide](https://playwright.dev/docs/intro)
