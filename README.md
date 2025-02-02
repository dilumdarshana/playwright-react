# Playwright for React

## Technologies used
- Playwright
- TailwindCSS
- React-Router 7
- PNPM
- Node v22.11.0

```bash
# create react app
pnpm create vite

# add Tailwindcss
pnpm add tailwindcss @tailwindcss/vite

# change vite.config.ts to load tailwindcss

# add react router
pnpm add react-router

# change App.tsx for routing

# adding playwright to the app

pnpm create playwright
## this will download few browsers from the internet, if select install playwright browser option as true
## this will add tests-example folder which has some tests written for sample to do app

# decide which browser you want to test: use playwright.config.ts file to change the behavior

# we can add data-testId property to the html element to select from the test cases
## Eg. <ul data-testId="items-list">
## access from test: const itemList = page.getByTestId('items-list');

pnpm test
```
## Sample generated full text cases are inside tests-examples folder
