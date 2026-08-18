# Week 2 Day 1 Practice: CSS Properties by Section

## Project

This practice page is a CSS reference for the Product Inventory Management System. It shows common CSS properties in separate sections so students can change a property and immediately see its result.

## Open the Project

Open these files in the same folder:

- `index.html` — HTML sections and inventory examples
- `style.css` — CSS properties grouped by topic
- `CSS-SECTION-GUIDE.md` — detailed explanation of each section

Open `index.html` directly in a browser. No server, JavaScript, or database is required.

Teachers can follow [TEACHING-ROUTE-MAP.md](../TEACHING-ROUTE-MAP.md) for the demonstration order, checkpoints, and time plan.

For a shorter class demonstration, use [SIMPLE-CLASS-PRACTICE.md](SIMPLE-CLASS-PRACTICE.md) with `simple-example.html` and `simple-style.css` before opening the full reference page.

## Page Sections

1. CSS syntax and selectors
2. Colors
3. Backgrounds
4. Fonts
5. Text alignment and spacing
6. Margins, padding, borders, and the box model
7. Display values
8. Flexbox
9. Grid
10. Position and z-index
11. Lists and tables
12. Outlines and cursors
13. Dimensions and overflow
14. CSS columns
15. Responsive media queries

## Required Tasks

### Task 1: Read the Source

1. Find the `<link>` element in `index.html`.
2. Find the matching `.demo-card` rule in `style.css`.
3. Identify its selector, property, and value.

**Expected result:** You can explain how the browser connects HTML to CSS.

### Task 2: Change Colors and Backgrounds

1. Change the color of one text example.
2. Change a color swatch background.
3. Change the background repeat value from `no-repeat` to `repeat` and observe the difference.
4. Restore `no-repeat` after the experiment.

**Expected result:** You can explain the difference between text color and background color.

### Task 3: Change Fonts and Text

1. Change a heading's `font-size`.
2. Change a sentence's `font-weight`.
3. Change `text-align` from `left` to `center`.
4. Change `line-height` and explain the spacing between lines.

**Expected result:** Text remains readable and the visible alignment matches the property.

### Task 4: Practise the Box Model

1. Change `.box-model-demo` padding.
2. Change its border width and color.
3. Add margin to the box.
4. Use browser inspection if available to identify content, padding, border, and margin.

**Expected result:** You can tell which property creates inside space and which creates outside space.

### Task 5: Practise Display

1. Find the `display` demonstration.
2. Change one example from `inline-block` to `block`.
3. Change the hidden example from `display: none` to `display: block`.
4. Observe how the page changes.

**Expected result:** You can explain why a block starts on a new line and why `none` hides an element.

### Task 6: Practise Flexbox and Grid

1. Change the Flexbox direction from `row` to `column`.
2. Change `justify-content` and `gap`.
3. Change the Grid from three columns to two columns.
4. Resize the browser and observe the media query.

**Expected result:** Navigation uses Flexbox and dashboard cards use Grid.

### Task 7: Practise Position, Lists, and Tables

1. Find the stock badge inside the position example.
2. Change its `top` value and observe its movement.
3. Change the list style from `square` to `circle`.
4. Add one row to the stock table.

**Expected result:** The badge stays attached to its card, and the list and table remain readable.

### Task 8: Practise Outline, Cursor, Dimensions, and Overflow

1. Press `Tab` until the demo button is focused.
2. Change the outline color and offset.
3. Change the cursor from `pointer` to `help`.
4. Add a long sentence to the overflow box.

**Expected result:** Focus is visible, the cursor changes, and overflow is controlled inside its demo box.

### Task 9: Practise Columns

1. Find the product story section.
2. Change `column-count: 2` to `column-count: 3`.
3. Change the `column-gap`.
4. Decide which number of columns is easiest to read on a small screen.

**Expected result:** Text flows into columns without becoming too narrow.

## Independent Practice

Add a `Supplier Information` section to `index.html` containing:

- A heading and paragraph
- A list of two suppliers
- A table with supplier name and supplied category
- A new class styled with padding, border, background color, and text color

Use at least four different CSS property sections in your new section.

## Required Evidence

- [ ] The CSS file is linked correctly.
- [ ] The page contains all 15 section headings.
- [ ] At least one selector, class selector, ID selector, and pseudo-class are shown.
- [ ] Colors, backgrounds, fonts, text, spacing, borders, display, position, lists, tables, outlines, dimensions, overflow, and columns are demonstrated.
- [ ] Flexbox and Grid demonstrations are visible.
- [ ] Focus and hover styles are visible.
- [ ] The page works at approximately 375px, 768px, and 1024px.
- [ ] No unwanted horizontal page scrolling appears.
- [ ] The independent Supplier Information section is added.

## Submission Checklist

- [ ] `index.html` is saved.
- [ ] `style.css` is saved.
- [ ] `CSS-SECTION-GUIDE.md` was read and used.
- [ ] At least five property values were changed and tested.
- [ ] One problem and its fix were recorded.
- [ ] The page was checked at three screen widths.

## Reflection Questions

1. Which property was easiest to understand? Why?
2. Which property was difficult to see until you changed its value?
3. What is the difference between Flexbox and Grid?
4. Why should a page use a mobile-first layout?
5. Which CSS property will help you most in the inventory project?
