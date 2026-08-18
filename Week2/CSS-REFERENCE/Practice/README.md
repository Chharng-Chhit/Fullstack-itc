# CSS Reference Practice

Open `index.html` in a browser and keep `style.css` open in the editor. No server or JavaScript is required.

## Before You Begin

1. Open the `Practice` folder in your code editor.
2. Open `index.html` in a browser.
3. Confirm that the page shows a dark header, a blue hero, dashboard cards, product cards, categories, and a table.
4. Keep the browser at a wide size first. Later, resize it to test responsive CSS.

## Project Map

| File | Purpose |
|---|---|
| `index.html` | Page content, navigation, cards, list, and table |
| `style.css` | Numbered CSS sections that style the page |
| `CSS-SECTION-GUIDE.md` | Explanation and small experiments for each CSS section |

## Target Output

The finished page should have a clear inventory dashboard. The header should contain usable links, the product cards should align, the stock table should be readable, and the page should work on a narrow screen without unwanted horizontal scrolling.

## Required Tasks

### Task 1: Identify CSS Syntax

1. Find `.product-card` in `style.css`.
2. Circle or write down the selector, property, and value.
3. Change `border: 1px` to `border: 3px`.
4. Refresh the browser.

**Expected result:** Both product cards have thicker borders.

### Task 2: Change Colors and Text

1. Change `.hero` `background-color` to another light color.
2. Change the `h1` `font-size` from `2rem` to `2.4rem`.
3. Change `.number` `font-size` and `.warning` color.
4. Check the page at a narrow width.

**Expected result:** The page has a personal but readable color and text theme.

### Task 3: Practise the Box Model

1. Change `.summary-card` padding from `20px` to `32px`.
2. Add `margin-top: 12px` to the second card only by giving it a new class.
3. Explain which space is inside the border and which space is outside.

**Expected result:** The card content moves away from its border, and one card has outside space.

### Task 4: Practise Flexbox

1. Find `.navigation`, `.nav-list`, and `.product-details`.
2. Change the navigation `gap` from `16px` to `24px`.
3. Change `.product-details` `justify-content` to `flex-start` and observe the price and stock text.
4. Restore `space-between`.

**Expected result:** Students can describe how Flexbox aligns direct children.

### Task 5: Practise Grid

1. Find `.product-grid`.
2. Change `repeat(3, 1fr)` to `repeat(2, 1fr)` inside the desktop media query.
3. Change the Grid `gap` from `16px` to `24px`.
4. Copy one complete product `<article>` in `index.html` and change its product information.

**Expected result:** Three products fit into the selected number of equal columns.

### Task 6: Practise Lists and Tables

1. Add `Cleaning` to `.category-list`.
2. Add a row for the new product inside `<tbody>`.
3. Change the table heading background color.
4. Check that the table remains readable when the browser is narrow.

**Expected result:** The list and table show the new inventory information clearly.

### Task 7: Practise Hover and Focus

1. Move the mouse over a navigation link.
2. Press `Tab` until a navigation link is selected.
3. Change the focus outline color, but do not remove the outline.

**Expected result:** Mouse and keyboard users can see which link is active.

### Task 8: Test Dimensions and Overflow

1. Add a long description to one product.
2. Change `.description` `min-height` from `48px` to `70px`.
3. Resize the browser to approximately 375px.
4. Look for horizontal scrolling at the bottom of the browser.

**Expected result:** Text stays inside the page and the layout does not create unwanted sideways scrolling.

### Task 9: Test Responsive Breakpoints

Use the browser's responsive/device tool or resize the window.

| Width | Expected layout |
|---:|---|
| 375px | One card per row; navigation may wrap |
| 600px | Two card columns; header becomes a row |
| 900px | Three card columns |

Write down what changes at each width.

## Expected Evidence

- Element, class, and pseudo-class selectors are present.
- Colors, backgrounds, fonts, text, spacing, borders, lists, and tables are styled.
- Flexbox styles navigation and Grid styles product cards.
- The page has visible hover and focus states.
- The page has no unwanted horizontal scrolling.

## Submission Checklist

- [ ] `index.html`, `style.css`, and `CSS-SECTION-GUIDE.md` are in the same `Practice` folder.
- [ ] The stylesheet link works.
- [ ] The student changed at least two colors and one spacing value.
- [ ] One product, one category, and one table row were added.
- [ ] Flexbox and Grid are visible in the CSS source.
- [ ] Hover and keyboard focus were tested.
- [ ] Mobile, tablet, and desktop results were recorded.
- [ ] One problem and its fix were written down.

## Independent Practice

Add a `Wireless Mouse` product with category, description, price, and stock amount. Keep its design consistent with the other cards.

## Optional Challenges

- Add a fourth desktop column.
- Create a `.notice` class with padding and a warning border.
- Try `column-count: 2` on a long text section, then check whether it remains readable on mobile.

## Reflection

1. What is the difference between padding and margin?
2. When is Grid more useful than Flexbox?
3. What does `:focus` show?
4. Why do mobile-first styles begin with one column?

5. What did `box-sizing: border-box` change about sizing?
6. Which selector is reusable: an element selector, class selector, or ID selector?
7. Why should a focus outline not be removed?

## Problem and Fix Record

Complete this before submitting:

```text
The problem I saw was:

I found it by:

I fixed it by:

The CSS section that helped me was:
```
