# Simple CSS Class Practice

Use this small example before students work with the larger CSS reference page. Students can type the code, change one value, and immediately see the result.

## Step 1: Create Two Files

Create these files in the same folder:

- `simple-example.html`
- `simple-style.css`

Open `simple-example.html` in a browser.

## Step 2: Type the Small HTML Example

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Product Cards</title>
    <link rel="stylesheet" href="simple-style.css">
</head>
<body>
    <main class="page-container">
        <h1>My Products</h1>

        <section class="product-list">
            <article class="product-card">
                <h2>Blue Notebook</h2>
                <p>Price: $4.50</p>
                <p class="stock">35 in stock</p>
            </article>

            <article class="product-card">
                <h2>Desk Lamp</h2>
                <p>Price: $18.00</p>
                <p class="stock">9 in stock</p>
            </article>
        </section>
    </main>
</body>
</html>
```

**Expected result:** The browser shows a heading and two products, but they are not styled yet.

## Step 3: Add the Page CSS

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #f1f5f9;
    color: #172033;
    font-family: Arial, sans-serif;
}

.page-container {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 0;
}
```

**Expected result:** The page has a light background and centered content.

## Step 4: Style One Card

```css
.product-card {
    margin-bottom: 16px;
    padding: 20px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background-color: #ffffff;
}

.product-card h2 {
    margin-top: 0;
    color: #1d5fbf;
}

.stock {
    color: #16803c;
    font-weight: bold;
}
```

**Expected result:** Both cards have padding, a border, a white background, and a blue product heading.

## Step 5: Put Cards in a Row with Flexbox

```css
.product-list {
    display: flex;
    gap: 16px;
}

.product-card {
    flex: 1;
}
```

**Expected result:** The two cards become equal-width columns on a wide screen.

Ask students:

- Which selector is the Flexbox container?
- Which elements become Flexbox items?
- What does `gap` change?

## Step 6: Make the Example Work on Mobile

```css
@media (max-width: 600px) {
    .product-list {
        flex-direction: column;
    }
}
```

**Expected result:** Cards are side by side on a wide screen and stacked on a narrow screen.

## Student Changes

Students must make these changes one at a time:

1. Change the page background color.
2. Change the product heading color.
3. Change card padding from `20px` to `32px`.
4. Change the border from `solid` to `dashed` by writing `border-style: dashed`.
5. Add a third product card.
6. Change the mobile breakpoint from `600px` to `700px`.
7. Add a hover rule:

```css
.product-card:hover {
    border-color: #1d5fbf;
}
```

## Mini Assessment

Ask students to point to:

- An element selector: `body`
- A class selector: `.product-card`
- A property: `padding`
- A value: `20px`
- A Flexbox container: `.product-list`
- A responsive rule: `@media`

## Common Mistakes

| Mistake | Fix |
|---|---|
| CSS does not load | Check that the HTML uses `href="simple-style.css"` |
| Card rule does not work | Check the dot in `.product-card` |
| Cards do not become a row | Add `display: flex` to `.product-list` |
| Cards are too wide on mobile | Add the media query and `flex-direction: column` |
| Text touches the border | Add padding to `.product-card` |
