# Simple Fetch API Practice

## Goal

Use `fetch()` to request product data from an API and show it on the page.

## Files to open

1. Open `index.html` in a browser.
2. Click **Load Products**.
3. The page shows five product cards.

## Important words

- **API**: a service that gives data to an application.
- **fetch**: JavaScript code that asks an API for data.
- **response**: the answer returned by the API.
- **JSON**: text format used to send data between applications.

## Expected result

First, the page says `Loading products...`. Then it shows product name, price, and stock.

## Try it

In `script.js`, change this line:

```javascript
fetch("https://dummyjson.com/products?limit=5")
```

Change `limit=5` to `limit=10`, save the file, and click the button again.
