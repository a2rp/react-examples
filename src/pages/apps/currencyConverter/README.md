# Currency Converter

**Collection route:** `/apps/currency-converter`  
**Collection source:** [Currency Converter](https://github.com/a2rp/react_mini_projects/tree/main/src/pages/apps/currencyConverter)

A browser-based currency converter built with React and Vite. Select a currency pair, enter an amount, and view the latest available reference rate, inverse rate, and converted amount.

## Features

- Native currency selectors populated with supported currencies from Frankfurter.
- Swap the base and target currencies, or use a quick amount button.
- View the direct rate, inverse rate, and rate publication date.
- Copy the converted result to the clipboard.
- Refresh rates without resetting the selected currencies or amount.

Rates come from the [Frankfurter API](https://frankfurter.dev/) and update as providers publish them. They are reference rates, not live trading quotes. Requests run from the browser and require an internet connection; entered amounts are converted locally and are not uploaded or saved.

## Development

This app lives inside the React Mini Projects collection. Install dependencies and start Vite from the repository root, then visit `/apps/currency-converter`.

Run `npm run lint`, `npm test`, and `npm run build` from the collection root. The collection deploy publishes all app routes together.

## Developer

Ashish Ranjan

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
