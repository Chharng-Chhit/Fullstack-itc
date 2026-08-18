# Week 2 Day 2 TP: CSS Layout and Responsive Design

**Date:** 18-Aug-2026  
**CLO1:** Create basic project pages using HTML, CSS, and JavaScript foundation.  
**Chapter:** CSS Layout and Responsive Design  
**Material:** CSS Foundation

## Project Output

A responsive static inventory website containing:

- A responsive navigation bar
- A dashboard summary card layout
- A responsive product card layout with images
- A product category layout
- Mobile, tablet, and desktop styles
- The completed Week 2 Day 2 responsive CSS project

## Starter Files

- `index.html` — website structure and inventory content
- `style.css` — mobile-first layout, Flexbox, Grid, and media queries

Open `index.html` directly in a browser. No server or JavaScript is required.

## TP Tasks

### Task 1: Review the Box Model

1. Find `.summary-card` in `style.css`.
2. Identify its content, padding, border, and outside spacing.
3. Change `padding: 24px` to `padding: 32px`.
4. Refresh the browser and explain what changed.

### Task 2: Create the Responsive Navigation

1. Find `.navigation` and `.nav-list`.
2. Confirm that both use `display: flex`.
3. Make the browser narrow and observe the navigation.
4. Make the browser wider than 600px and observe the media query.
5. Change the gap between navigation items.

### Task 3: Create the Dashboard Card Layout

1. Find `.dashboard-grid`.
2. Identify `display: grid`, `grid-template-columns`, and `gap`.
3. Add one new dashboard summary card in the HTML.
4. Check its position on mobile, tablet, and desktop.

### Task 4: Create the Product Card Layout

1. Find `.product-grid` and `.product-card`.
2. Add one new product card with an image, category, status, name, description, price, and quantity.
3. Confirm that the image has useful `alt` text.
4. Check that all cards resize without horizontal page scrolling.

### Task 5: Make the Project Responsive

Test the project at these approximate widths:

| Screen | Width | Expected layout |
|---|---:|---|
| Mobile | 375px | One card per row and wrapped navigation |
| Tablet | 768px | Two cards per row |
| Desktop | 1024px or wider | Four dashboard and product cards per row |

Students may resize the browser window or use the browser's device toolbar.

### Task 6: Personalize the Website

1. Change the website name.
2. Change the green colors in `.brand-mark`, `.primary-button`, and `.eyebrow`.
3. Replace at least two sample products.
4. Add another category.
5. Keep text readable and colors consistent.

## Required CSS Evidence

The submitted project must visibly use:

- [ ] `box-sizing`, margin, padding, and border
- [ ] Flexbox for navigation or content alignment
- [ ] Grid for dashboard and product cards
- [ ] Relative or flexible widths
- [ ] Responsive images
- [ ] At least two media queries
- [ ] Mobile-first base styles
- [ ] Hover and keyboard focus styles

## Submission Checklist

- [ ] `index.html` and `style.css` are in the same project folder.
- [ ] The HTML page loads without missing content.
- [ ] The CSS stylesheet is linked correctly.
- [ ] Navigation links work.
- [ ] Dashboard cards show inventory information.
- [ ] Product cards include images and stock information.
- [ ] The page works at mobile, tablet, and desktop widths.
- [ ] There is no unwanted horizontal page scrolling.
- [ ] Text and buttons remain readable on a small screen.
- [ ] All meaningful images have descriptive `alt` text.
- [ ] The student's own design changes are visible.
- [ ] The complete `Week1` project folder is submitted.

## Challenge Tasks

1. Make one product card span two columns on desktop.
2. Add a fifth navigation item and keep the layout responsive.
3. Add a media query for screens wider than 1200px.
4. Create a second color theme by replacing the green color values in `style.css`.

## Reflection Questions

1. What is the difference between Flexbox and Grid?
2. Why do the base styles show one card per row?
3. What changes when the screen reaches 600px?
4. What changes when the screen reaches 900px?
5. Why is the viewport meta element important?
