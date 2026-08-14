# Day 5 Teaching Notes: CSS Layout and Responsive Design

**Date:** 14-Aug-2026  
**Course session:** Week 1, Day 5  
**CLO1:** Create basic project pages using HTML, CSS, and JavaScript foundation.  
**Chapter title:** CSS Layout and Responsive Design  
**Chapter material:** CSS Foundation

## Session Goal

By the end of the session, students should be able to use the CSS box model, Flexbox, Grid, flexible measurements, and basic media queries to build a responsive static inventory website that works on mobile, tablet, and desktop screens.

## Learning Objectives

Students will be able to:

1. Review content, padding, border, and margin in the CSS box model.
2. Use Flexbox to align and distribute navigation content.
3. Use Grid to create dashboard and product card layouts.
4. Explain the difference between one-dimensional and two-dimensional layouts.
5. Create mobile-first base styles.
6. Write basic `min-width` media queries.
7. Make images and content adapt to the available screen width.
8. Test a project at common mobile, tablet, and desktop widths.
9. Submit a complete Week 1 responsive static project.

## Suggested Duration

| Stage | Time | Focus |
|---|---:|---|
| Review and demonstration | 15 min | Day 4 CSS and the box model |
| Flexbox concept | 25 min | Main axis, cross axis, alignment, gap, and wrapping |
| Flexbox practice | 25 min | Responsive navigation bar |
| Grid concept | 25 min | Columns, rows, gap, and card layouts |
| Grid practice | 35 min | Dashboard and product cards |
| Responsive design | 20 min | Viewport, flexible widths, images, and mobile-first CSS |
| Media query basics | 20 min | Tablet and desktop breakpoints |
| Independent TP | 40 min | Complete and personalize the inventory website |
| Testing and submission | 20 min | Responsive checks and Week 1 submission |

**Total suggested time:** 225 minutes. Adjust the independent TP time to match the class schedule.

## Required Preparation

- Review the completed Day 4 HTML and CSS project.
- Prepare `Practice/index.html` and `Practice/style.css` as demonstration files.
- Open the editor and browser side by side.
- Show students how to resize the browser.
- If available, demonstrate the browser device toolbar at 375px, 768px, and 1024px.
- Do not introduce JavaScript navigation in this lesson; keep the layout behavior visible in CSS.

## Key Vocabulary

| Term | Student-friendly meaning |
|---|---|
| Box model | Content surrounded by padding, border, and margin |
| Flexbox | A layout system for arranging items in one main direction |
| Flex container | A parent element with `display: flex` |
| Flex item | A direct child inside a flex container |
| Main axis | The primary direction used by Flexbox |
| Cross axis | The direction across the main axis |
| Grid | A layout system that controls rows and columns |
| Grid container | A parent element with `display: grid` |
| Grid item | A direct child inside a grid container |
| Gap | Space between Flexbox or Grid items |
| Responsive design | A design that adapts to different screen sizes |
| Breakpoint | A screen width where the layout changes |
| Media query | CSS that runs only when a condition is true |
| Mobile-first | Writing small-screen styles first, then enhancing larger screens |

## 1. Box Model Review

Draw or display the layers in this order:

```text
margin
  border
    padding
      content
```

Use a dashboard card as the example:

```css
.summary-card {
    margin-bottom: 16px;
    padding: 24px;
    border: 1px solid #cbd5e1;
    background-color: #ffffff;
}
```

Explain:

- Content is the text and numbers inside the card.
- Padding creates space between the content and border.
- Border draws the edge of the card.
- Margin creates space outside the card.

Review the project-wide rule:

```css
* {
    box-sizing: border-box;
}
```

With `border-box`, an element's declared width includes its padding and border. This makes responsive sizing easier to predict.

### Quick Check

Ask: “Which property creates space inside the border?” The expected answer is `padding`.

## 2. Flexbox

Flexbox is best for arranging items in one main direction: a row or a column. In this project, Flexbox controls the navigation, hero content, product details, and footer.

### Create a Flex Container

```css
.navigation {
    display: flex;
}
```

The direct children of `.navigation` become flex items.

### Direction

```css
.navigation {
    display: flex;
    flex-direction: column;
}
```

- `row` places items from left to right.
- `column` places items from top to bottom.
- The project begins with `column` because the base layout is for mobile.

### Alignment and Space

```css
.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}
```

- `justify-content` controls space along the main axis.
- `align-items` controls alignment across the main axis.
- `gap` creates consistent space between items.

### Wrapping Navigation Items

```css
.nav-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
```

`flex-wrap: wrap` moves items to a new line if the row has insufficient space. This prevents the navigation from forcing the page wider than the screen.

### Flexbox Guided Practice

1. Remove `display: flex` temporarily and observe the navigation.
2. Restore it and change `flex-direction`.
3. Change `gap` from `8px` to `16px`.
4. Narrow the browser and observe wrapping.

## 3. CSS Grid

Grid is useful for layouts that need rows and columns. The dashboard, products, and categories use Grid.

### Create a Grid Container

```css
.dashboard-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}
```

- `display: grid` activates Grid layout.
- `grid-template-columns` defines the columns.
- `1fr` means one fraction of the available space.
- `gap` adds space between the cards.

### Create Equal Columns

```css
.dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

`repeat(2, 1fr)` creates two equal columns. Four equal columns use `repeat(4, 1fr)`.

### Flexbox or Grid?

| Need | Recommended layout |
|---|---|
| Align logo and navigation | Flexbox |
| Arrange navigation links | Flexbox |
| Align price and quantity | Flexbox |
| Create dashboard columns | Grid |
| Create product card rows and columns | Grid |
| Create category cards | Grid |

Use Flexbox when the main concern is one direction. Use Grid when both rows and columns matter.

### Grid Guided Practice

1. Change the dashboard to two columns.
2. Change the gap from `16px` to `24px`.
3. Add a fifth card and observe how Grid creates a new row.
4. Restore the mobile layout to one column.

## 4. Responsive Design

Responsive design allows one website to work across different screen sizes.

### Viewport Meta Element

Every responsive HTML page needs this inside `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

It tells the browser to match the page width to the device width. Do not disable zoom because users may need to enlarge the page.

### Flexible Container

```css
.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}
```

- `width: 90%` leaves space on both sides of a small screen.
- `max-width: 1100px` limits the content width on a large screen.
- `margin: 0 auto` centers the container.

### Responsive Images

```css
img {
    display: block;
    max-width: 100%;
}
```

An image can become smaller than its original size but will not grow beyond its container.

Product images use:

```css
.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

This gives all product images the same height. `object-fit: cover` fills the image area without stretching the picture.

## 5. Mobile-First CSS

Mobile-first means writing the smallest layout as the normal CSS. Larger layouts are added later.

Base mobile layout:

```css
.product-grid {
    display: grid;
    grid-template-columns: 1fr;
}
```

The mobile layout shows one product per row. This gives text and buttons enough space.

Benefits of mobile-first CSS:

- The simplest layout becomes the default.
- Small devices load and use the base rules.
- Larger screens receive extra layout rules.
- Students can follow the project from simple to complex.

## 6. Media Query Basics

A media query applies CSS only when its condition is true.

### Tablet Breakpoint

```css
@media (min-width: 600px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

When the browser is at least 600px wide, the product layout changes from one column to two columns.

### Desktop Breakpoint

```css
@media (min-width: 900px) {
    .product-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

When the browser is at least 900px wide, the product layout changes to four columns.

### Read a Media Query Aloud

Read `@media (min-width: 600px)` as: “When the screen is 600 pixels wide or wider, apply these rules.”

### Important Teaching Point

Rules inside a media query do not replace the entire original selector. They override only the properties repeated inside the query.

## 7. Guided TP: Responsive Navigation Bar

1. Create a semantic `<nav>` with an unordered list.
2. Remove list bullets and default padding.
3. Apply Flexbox to the list.
4. Add `flex-wrap: wrap` and `gap`.
5. Give each link enough padding for touch use.
6. Add hover and visible keyboard focus styles.
7. Use the 600px media query to place the brand and navigation in one row.
8. Test at 375px and 768px.

## 8. Guided TP: Dashboard Card Layout

1. Create a section heading with an `<h2>`.
2. Add a `.dashboard-grid` container.
3. Add four `<article class="summary-card">` elements.
4. Use one column as the base layout.
5. Use two columns at 600px.
6. Use four columns at 900px.
7. Add padding, borders, and consistent card spacing.

## 9. Guided TP: Product Card Layout

Each product card should contain:

- Product image with descriptive alternative text
- Category
- Stock status written as text
- Product name
- Short description
- Price
- Quantity

Use Grid for the card collection and Flexbox for the information inside a card. Remind students that stock status must use words, not color alone.

## 10. Responsive Testing Procedure

Test after every major layout change:

1. Start near 375px wide.
2. Check that navigation links wrap and remain easy to select.
3. Check that every card fits the screen.
4. Confirm there is no unwanted horizontal page scroll.
5. Move to 768px and confirm two card columns.
6. Move to 1024px and confirm four card columns.
7. Use the Tab key to check navigation focus.
8. Confirm images keep their proportions.
9. Check that headings follow a logical `h1`, `h2`, `h3` order.

## Common Problems and Fixes

| Problem | Check |
|---|---|
| Media query has no effect | Check braces, spelling, and whether the screen reached the breakpoint |
| Cards stay in one column | Check `display: grid` and `grid-template-columns` |
| Navigation leaves the screen | Add `flex-wrap: wrap` and reduce unnecessary fixed widths |
| Image becomes stretched | Give it a width, height, and `object-fit: cover` |
| Page scrolls sideways | Find fixed widths, large gaps, or content wider than its parent |
| Spacing is inconsistent | Use a repeated spacing scale such as 8, 16, 24, 32, and 48px |
| CSS rule does not work | Verify the selector, property spelling, semicolon, and stylesheet link |

## Assessment Questions

1. Name the four parts of the box model.
2. What turns an element into a flex container?
3. What is the purpose of `flex-wrap`?
4. What does `1fr` mean in Grid?
5. What does `repeat(2, 1fr)` create?
6. What is a breakpoint?
7. What does `min-width: 600px` mean?
8. Why should the viewport meta element be included?
9. Why are mobile styles written before tablet and desktop styles?
10. How can you check for unwanted horizontal scrolling?

## Week 1 Static Project Submission

Students submit a responsive static inventory website. The submission should demonstrate the Week 1 learning sequence:

- Semantic HTML structure
- Product table and form knowledge from earlier sessions
- External CSS
- Color, typography, spacing, border, and box model
- Flexbox navigation
- Grid dashboard and product cards
- Mobile-first responsive design
- Basic media queries

### Teacher Review Checklist

- [ ] The project opens in a browser.
- [ ] HTML and CSS files use correct relative paths.
- [ ] The layout contains header, navigation, main content, and footer.
- [ ] Flexbox is used correctly.
- [ ] Grid is used correctly.
- [ ] At least two media queries are present.
- [ ] The project works at 375px, 768px, and 1024px.
- [ ] Product images include alternative text.
- [ ] Keyboard focus is visible.
- [ ] Stock states include readable text.
- [ ] The design is consistent and readable.
- [ ] Student personalization is visible.

## Exit Ticket

Before leaving, each student should show:

1. One Flexbox container.
2. One Grid container.
3. One media query.
4. The project at mobile and desktop widths.
5. The final Week 1 project folder ready for submission.
