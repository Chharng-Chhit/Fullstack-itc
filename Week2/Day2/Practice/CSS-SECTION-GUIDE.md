# Week 2 Day 2 CSS Explanation for Each Section

This guide explains each numbered section in `style.css`. Read one section, change one value, save the file, and refresh `index.html` in the browser.

## Before Starting: Connect the CSS File

The following line is inside the `<head>` of `index.html`:

```html
<link rel="stylesheet" href="style.css">
```

It tells the browser to load styles from `style.css`. Both files must be in the same folder.

---

## 1. Basic Page Style

This section styles the whole page before styling individual parts.

### Universal Selector

```css
* {
    box-sizing: border-box;
}
```

- `*` selects every HTML element.
- `box-sizing: border-box` includes padding and border inside an element's width.
- It makes element sizes easier to understand.

### Body

```css
body {
    margin: 0;
    background-color: #f1f5f9;
    color: #1e293b;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

- `margin: 0` removes the browser's default outside space.
- `background-color` changes the page background.
- `color` sets the normal text color.
- `font-family` selects the page font.
- `font-size` sets the normal text size.
- `line-height` adds space between lines of text.

### Images

```css
img {
    display: block;
    width: 100%;
}
```

- `display: block` removes the small space sometimes found below images.
- `width: 100%` makes an image use the width of its parent.

### Container

```css
.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}
```

- `width: 90%` leaves some space on the left and right.
- `max-width` stops the content from becoming too wide.
- `margin: 0 auto` centers the container.

### Try It

Change the body background color or change the container width from `90%` to `80%`.

---

## 2. Header and Navigation

The header contains the website name and navigation links.

HTML structure:

```html
<header class="site-header">
    <div class="container navigation">
        <a class="brand">StockFlow</a>
        <nav>...</nav>
    </div>
</header>
```

### Header Box

```css
.site-header {
    padding: 15px 0;
    border-bottom: 1px solid #cbd5e1;
    background-color: #ffffff;
}
```

This adds inside space, a bottom border, and a white background.

### Navigation Flexbox

```css
.navigation {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
```

- `display: flex` turns the element into a Flexbox container.
- `flex-direction: column` puts the brand above the links on mobile.
- `gap` adds space between the brand and navigation.

### Navigation List

```css
.nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
}
```

- `flex-wrap: wrap` moves links to a new line when there is not enough space.
- `list-style: none` removes list bullet points.

### Navigation Links

```css
.nav-list a {
    display: block;
    padding: 10px 12px;
    border-radius: 5px;
    color: #475569;
    font-weight: bold;
    text-decoration: none;
}
```

The padding makes each link easier to select. The radius rounds its corners.

```css
.nav-list a:hover,
.nav-list a.active {
    background-color: #d1fae5;
    color: #065f46;
}
```

- `:hover` applies when the mouse is over a link.
- `.active` identifies the current navigation link.

### Try It

Change the navigation gap or change the active link background color.

---

## 3. Hero Section

The hero is the large dark section below the navigation.

HTML structure:

```html
<section class="hero">
    <div class="container hero-content">
        <div>Heading and description</div>
        <a class="primary-button">View products</a>
    </div>
</section>
```

### Hero Background and Spacing

```css
.hero {
    padding: 50px 0;
    background-color: #1e293b;
    color: #ffffff;
}
```

The dark background and white text make the introduction easy to identify.

### Hero Flexbox

```css
.hero-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
```

On mobile, the heading appears above the button.

### Hero Heading

```css
.hero h1 {
    margin: 5px 0 10px;
    font-size: 32px;
    line-height: 1.2;
}
```

This selector styles only an `<h1>` inside `.hero`.

### Primary Button

```css
.primary-button {
    width: 150px;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #047857;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}
```

The link looks like a button because it has padding, a background color, and no underline.

### Try It

Change the hero background, heading size, or button color.

---

## 4. Main Sections

The page contains separate sections for the dashboard, products, and categories.

```css
.page-section {
    padding: 40px 0;
}

.section-surface {
    background-color: #e2e8f0;
}
```

- `.page-section` gives every main section the same vertical spacing.
- `.section-surface` gives the product section a different background.

### Section Heading

```css
.section-heading {
    margin-bottom: 20px;
}

.section-heading h2 {
    margin: 5px 0;
    font-size: 28px;
}
```

This keeps headings consistent across the page.

### Try It

Increase `.page-section` padding and observe the extra space between sections.

---

## 5. Grid Layouts on Mobile

The dashboard, products, and categories share the same basic Grid rule.

```css
.dashboard-grid,
.product-grid,
.category-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}
```

- The commas group three selectors.
- `display: grid` creates a Grid container.
- `grid-template-columns: 1fr` creates one column.
- `gap: 15px` adds space between cards.

One column is used first because the stylesheet follows mobile-first design.

### Try It

Change the gap from `15px` to `25px`.

---

## 6. Dashboard Cards

The dashboard cards display totals such as products, categories, and stock.

```css
.summary-card {
    padding: 20px;
    border: 1px solid #cbd5e1;
    border-top: 4px solid #047857;
    border-radius: 8px;
    background-color: #ffffff;
}
```

Box model review:

1. The card text is the content.
2. `padding` adds space inside the card.
3. `border` draws the card edge.
4. Grid `gap` creates space outside each card.

### Card Text

```css
.card-value {
    margin: 8px 0;
    font-size: 30px;
    font-weight: bold;
}
```

The large bold value is the most important information in each card.

### Warning Card

```css
.warning-card {
    border-top-color: #b45309;
}
```

This class changes only the top border color of the low-stock card.

### Try It

Add another summary card in HTML and check where Grid places it.

---

## 7. Product Cards

Each product card contains an image and product information.

HTML structure:

```html
<article class="product-card">
    <img src="..." alt="Product description">
    <div class="product-content">
        Product information
    </div>
</article>
```

### Card Box

```css
.product-card {
    overflow: hidden;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background-color: #ffffff;
}
```

`overflow: hidden` keeps the image inside the card's rounded corners.

### Product Image

```css
.product-card img {
    height: 200px;
    object-fit: cover;
}
```

- Every image receives the same height.
- `object-fit: cover` fills the image area without stretching the picture.

### Product Content

```css
.product-content {
    padding: 20px;
}
```

This adds space around all information below the image.

### Product Information Flexbox

```css
.product-topline,
.product-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
```

- The category and status appear on opposite sides.
- The price and quantity also appear on opposite sides.

### Stock Status

```css
.in-stock {
    background-color: #d1fae5;
    color: #065f46;
}

.low-stock {
    background-color: #fef3c7;
    color: #92400e;
}

.out-stock {
    background-color: #fee2e2;
    color: #991b1b;
}
```

Each status uses a different color and readable text.

### Try It

Add a new product card or change the product image height.

---

## 8. Category Cards

The category section uses the same Grid idea as the dashboard and products.

```css
.category-grid article {
    padding: 20px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background-color: #ffffff;
}
```

`.category-grid article` means “select every `<article>` inside `.category-grid`.”

```css
.category-grid h3,
.category-grid p {
    margin: 0;
}
```

This removes the default heading and paragraph margins inside each category card.

### Try It

Add a new category and change its product count.

---

## 9. Footer

The footer appears at the bottom of the page.

```css
.site-footer {
    padding: 30px 0;
    background-color: #1e293b;
    color: #ffffff;
}
```

It uses the same dark color as the hero to keep the website theme consistent.

```css
.footer-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
```

Footer items appear in one column on mobile.

### Try It

Change the footer background color or padding.

---

## 10. Tablet Media Query

The first media query runs when the screen is 600px wide or wider.

```css
@media (min-width: 600px) {
    .navigation {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .dashboard-grid,
    .product-grid,
    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

Changes on tablet:

- The brand and navigation move into one row.
- Each Grid layout changes from one column to two columns.
- `repeat(2, 1fr)` means two equal columns.

### Try It

Resize the browser below and above 600px. Observe when the layout changes.

---

## 11. Desktop Media Query

The second media query runs when the screen is 900px wide or wider.

```css
@media (min-width: 900px) {
    .dashboard-grid,
    .product-grid,
    .category-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .hero h1 {
        font-size: 48px;
    }
}
```

Changes on desktop:

- The Grid layouts display four equal columns.
- The hero heading becomes larger.
- `repeat(4, 1fr)` means four equal columns.

### Try It

Resize the browser above 900px and count the cards in each row.

---

## Flexbox and Grid Summary

| Page area | CSS layout | Reason |
|---|---|---|
| Navigation | Flexbox | Places items in a row or column |
| Hero content | Flexbox | Aligns text and button |
| Product information | Flexbox | Separates labels, price, and quantity |
| Footer | Flexbox | Changes from a column to a row |
| Dashboard cards | Grid | Creates equal card columns |
| Product cards | Grid | Creates rows and columns of products |
| Category cards | Grid | Creates equal category columns |

## Recommended Learning Order

1. Change the body color and font.
2. Change margin and padding values.
3. Practice Flexbox with the navigation.
4. Practice Grid with the dashboard cards.
5. Style the product cards.
6. Resize the browser to test 600px and 900px.
7. Add a new product and category.

## Final Check

- [ ] CSS loads in the browser.
- [ ] Navigation wraps on a small screen.
- [ ] Mobile shows one card per row.
- [ ] Tablet shows two cards per row.
- [ ] Desktop shows four cards per row.
- [ ] Product images fit inside their cards.
- [ ] Hover colors work on links and buttons.
- [ ] The page has no unwanted horizontal scrolling.
