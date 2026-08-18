# CSS Reference Lesson: Product Inventory

**Date:** 18-Aug-2026  
**Course session:** Week 2, Day 2  
**CLO:** CLO1  
**Chapter:** CSS Layout and Responsive Design  
**Suggested duration:** 3 hours

## Goal

Students use the CSS reference chart as a map for styling a small inventory page. They learn one section, change one value, save, and refresh the browser.

## Objectives

Students can explain CSS syntax; use element, class, ID, and pseudo-class selectors; style colors, backgrounds, fonts, text, spacing, borders, lists, and tables; use Flexbox, Grid, dimensions, overflow, and responsive media queries.

## Vocabulary

| Term | Meaning |
|---|---|
| Selector | Chooses HTML elements |
| Property | The style to change |
| Value | The setting for a property |
| Padding | Space inside a border |
| Margin | Space outside a border |
| Flexbox | Layout for one row or column |
| Grid | Layout for rows and columns |
| Pseudo-class | A state such as `:hover` |
| Overflow | Content that does not fit in its box |

## Teaching Order

1. Syntax and selectors: identify selector, property, and value.
2. Colors and backgrounds: create a readable project theme.
3. Fonts and text: make headings and product details readable.
4. Box model: compare content, padding, border, and margin.
5. Display and layout: use Flexbox for navigation and Grid for cards.
6. Lists and tables: style categories and stock records.
7. Borders, outlines, hover, and focus: keep interaction visible.
8. Position, dimensions, overflow, and columns: keep content inside its area.
9. Media queries: start with one mobile column, then add wider layouts.

## Guided Practice

Students change the body background, card padding, grid gap, table heading color, and breakpoint. After each change, ask what visible result proves the rule worked.

## Preparation

- Open `Week2/CSS-REFERENCE/Practice/index.html` in a browser.
- Open `style.css` in the editor.
- Keep the browser and editor visible at the same time.
- Prepare browser widths of approximately 375px, 600px, and 900px.
- Remind students that CSS changes the presentation of HTML; it does not replace the HTML content.

## Detailed Lesson Plan

### Part 1: Connect HTML and CSS — 15 minutes

Show the line inside the HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Explain that `href` tells the browser where the stylesheet is located. Ask students to rename the file temporarily, refresh the page, and observe that the styles disappear. Restore the filename immediately.

**Check:** Students can explain why both files must be in the same folder.

### Part 2: CSS Syntax and Selectors — 20 minutes

Use this rule:

```css
.product-card {
    border: 1px solid #d6deeb;
}
```

Point to the class selector, property, and value. Compare `body`, `.product-card`, and `a:focus`. Students change the border from `1px` to `3px`.

**Check:** Students identify which selector styles all product cards.

### Part 3: Colors, Fonts, and Text — 25 minutes

Change `background-color`, `color`, `font-size`, `font-weight`, `text-align`, and `line-height` one at a time. Explain that a color change must preserve readable contrast.

**Check:** Students choose a light background with a dark text color and explain the choice.

### Part 4: Box Model — 25 minutes

Draw the model in this order:

```text
margin → border → padding → content
```

Students change `.summary-card` padding to `32px`, then add `margin-top: 12px` to one card. Ask which change affects space inside the border and which affects space outside it.

### Part 5: Flexbox and Grid — 35 minutes

Remove `display: flex` from `.navigation` and refresh. Restore it. Change the direction from `column` to `row`, then restore the mobile-first column. Next, change the product Grid from three columns to two columns.

Explain that Flexbox is useful when the main concern is one direction. Grid is useful when the design needs rows and columns.

### Part 6: Interaction, Lists, and Tables — 25 minutes

Use the mouse on navigation links, then press `Tab`. Explain why a visible focus outline helps keyboard users. Add a category list item and a stock table row.

### Part 7: Dimensions, Overflow, and Responsive Design — 25 minutes

Add a long product description. Resize the browser. Explain `max-width: 100%`, `overflow-x: auto`, and `min-height`. Show that the page should not become wider than the screen.

### Part 8: Independent Work and Review — 30 minutes

Students complete the required tasks, add a new product, and record one problem and its fix. Review two projects and ask students to point to the CSS rule that proves each requirement.

## Concept Demonstration Table

| Concept | Teacher demonstration | Student change | Visible evidence |
|---|---|---|---|
| Selector | Highlight `.product-card` | Change border width | All cards change |
| Color | Change `.hero` background | Choose a new color | Hero remains readable |
| Font | Change `h1` size | Test mobile width | Heading remains usable |
| Box model | Change card padding | Add margin | Inside/outside space differs |
| Flexbox | Remove and restore `display: flex` | Change `gap` | Navigation spacing changes |
| Grid | Change `repeat(3, 1fr)` | Use two columns | Cards reflow |
| Focus | Press `Tab` | Change outline color | Keyboard position is visible |
| Overflow | Add long content | Resize browser | No unwanted page scrolling |
| Media query | Resize at 600px | Change breakpoint | Layout changes at a new width |

## Common Problems

- No style: check that `style.css` is beside `index.html` and linked with `href="style.css"`.
- Class rule fails: add the dot, for example `.product-card`.
- Text is hard to read: use a darker text color on a light background.
- Sideways scrolling: remove fixed wide values and check `max-width` and wrapping.
- Keyboard focus disappears: keep a visible `:focus` outline.

## Exit Ticket

Students point to one selector, one property, the card padding, the Grid rule, and the media query. They write one difference between margin and padding.
