# Week 2 Day 1 Teaching Notes: CSS Properties by Section

**Date:** 17-Aug-2026  
**Course session:** Week 2, Day 1  
**CLO:** CLO1 — Create basic project pages using HTML, CSS, and JavaScript foundation.  
**Chapter title:** CSS Properties by Section  
**Chapter material:** CSS Foundation  
**Suggested duration:** 3 hours

**Detailed route:** See [TEACHING-ROUTE-MAP.md](TEACHING-ROUTE-MAP.md) for the teacher's step-by-step classroom path.

**Short demonstration:** Start with [Practice/SIMPLE-CLASS-PRACTICE.md](Practice/SIMPLE-CLASS-PRACTICE.md) if students need a smaller example before the full property reference page.

## Session Goal

Students use one runnable CSS reference page to see common CSS properties working. The page is divided into sections that match the reference chart: syntax, colors, backgrounds, fonts, text, spacing, borders, display, position, lists, tables, outlines, dimensions, overflow, and columns.

This lesson is a property tour. Students do not need to memorize every property. They learn what each group controls and how to find the correct property when styling the inventory project.

## Learning Objectives

By the end of the lesson, students can:

1. Read a CSS rule with a selector, property, and value.
2. Use element, class, ID, and pseudo-class selectors.
3. Change colors, backgrounds, fonts, and text alignment.
4. Use margin, padding, border, and outline correctly.
5. Explain `display: block`, `inline`, `inline-block`, `flex`, and `grid`.
6. Use basic Flexbox and Grid properties to arrange inventory content.
7. Style lists and tables so information is easy to read.
8. Use width, height, `max-width`, `min-height`, and `overflow` safely.
9. Use `position` and `z-index` for a small stock badge example.
10. Use a media query to make the page responsive.

## Important Beginner Note

The reference chart contains many CSS properties. This lesson shows the most useful beginner properties in groups. Some properties are shown as safe experiments rather than required memorization. Students should understand the purpose of a property before trying to use it in the project.

## Vocabulary

| Word | Simple meaning |
|---|---|
| CSS | Rules that control how HTML looks |
| Selector | Chooses the HTML element to style |
| Property | Names the part that will change |
| Value | Tells the property what setting to use |
| Pseudo-class | Describes a state such as hover or focus |
| Box model | Content, padding, border, and margin |
| Display | Controls how an element participates in layout |
| Flexbox | Layout for one main direction |
| Grid | Layout for rows and columns |
| Position | Controls how an element is placed |
| Overflow | Controls content that does not fit |
| Breakpoint | A screen width where a layout changes |

## Lesson Map

| Section | Main properties | Visible demonstration |
|---|---|---|
| Syntax and selectors | selector, class, ID, `:hover`, `:focus` | Rule cards and interactive links |
| Colors | `color`, `opacity` | Text and color swatches |
| Backgrounds | `background-color`, `background-image`, `background-repeat`, `background-position` | Background examples |
| Fonts | `font-family`, `font-size`, `font-style`, `font-weight` | Font comparison cards |
| Text | `text-align`, `text-decoration`, `text-transform`, `line-height`, `letter-spacing`, `word-spacing` | Text examples |
| Box model | `width`, `height`, `margin`, `padding`, `border`, `box-sizing` | Measurement cards |
| Display | `block`, `inline`, `inline-block`, `none` | Display behavior examples |
| Flexbox | `flex-direction`, `justify-content`, `align-items`, `gap`, `flex-wrap` | Navigation and product row |
| Grid | `grid-template-columns`, `grid-template-rows`, `gap` | Dashboard cards |
| Position | `position`, `top`, `right`, `z-index` | Stock badge |
| Lists and tables | `list-style-type`, `list-style-position`, `border-collapse` | Category list and stock table |
| Outlines and cursor | `outline`, `outline-offset`, `cursor` | Focused button and pointer examples |
| Dimensions and overflow | `max-width`, `min-height`, `overflow` | Responsive content boxes |
| Columns | `column-count`, `column-gap`, `column-rule` | Product story text |

## Suggested Timing

| Activity | Time |
|---|---:|
| Open the reference page and explain CSS syntax | 15 min |
| Selectors, colors, backgrounds, fonts | 30 min |
| Text, spacing, box model, borders | 30 min |
| Display, Flexbox, and Grid | 35 min |
| Position, lists, tables, outlines, cursor | 25 min |
| Dimensions, overflow, and columns | 20 min |
| Guided changes | 25 min |
| Independent practice and review | 25 min |

## Teaching Steps

### 1. Start with One CSS Rule

```css
.product-card {
    background-color: white;
    padding: 16px;
}
```

Ask students to identify the selector, the two properties, and the values. Explain that CSS declarations inside the braces apply to every element with the `product-card` class.

### 2. Read the Page in Source Order

Open `Practice/index.html` first. Identify the header, main sections, product cards, table, and footer. Then open `Practice/style.css` and find the matching numbered section.

Students should always connect a CSS rule to a visible HTML element.

### 3. Demonstrate One Change at a Time

Students change one property, save the file, refresh the browser, and write down the visible result. This prevents beginners from changing many values and losing track of the cause.

## Guided Practice

Students complete these changes with the teacher:

1. Change a color swatch background.
2. Change a heading font size and line height.
3. Change a card's padding and margin.
4. Change the Flexbox gap.
5. Change the Grid from three columns to two.
6. Tab to the button and change its focus outline.
7. Resize the page and observe the media query.

## Independent Practice

Students create a new `Supplier` section in the inventory page. It must include a heading, a short paragraph, a list, and a small table. Students must style it using at least one selector from four different CSS sections.

## Common Problems and Fixes

| Problem | Cause | Fix |
|---|---|---|
| No CSS appears | File is not linked or saved | Check `href="style.css"` and save both files |
| A class rule fails | The dot is missing | Write `.product-card` in CSS |
| ID rule fails | The hash is missing | Write `#dashboard` in CSS |
| Text is too close | Padding is missing | Add padding inside the card |
| Cards go off screen | Fixed width is too large | Use percentages, `max-width`, and media queries |
| Focus cannot be seen | Outline was removed | Keep a strong `:focus` outline |
| Grid does not change | Rule is outside or inside the wrong media query | Check braces and screen width |
| Text columns are hard to read | Column width is too narrow | Use fewer columns on small screens |

## Assessment Questions

1. What is the difference between a property and a value?
2. Which selector can be reused on many cards?
3. Which property creates space inside a border?
4. Which layout is useful for rows and columns?
5. Why is `max-width: 100%` useful for images?
6. Why should keyboard focus remain visible?
7. What happens when a media query condition becomes true?

## Exit Ticket

Students complete these sentences:

- `color` changes ____________________.
- `padding` creates space ____________________ the border.
- Flexbox is useful for ____________________.
- Grid is useful for ____________________.
- I tested my page at ____________________ pixels.
