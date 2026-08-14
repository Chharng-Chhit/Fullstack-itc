# Day 4 Teaching Notes: CSS Basic Styling

**Date:** 13-Aug-2026  
**Course session:** Week 1, Day 4  
**CLO1:** Create basic project pages using HTML, CSS, and JavaScript foundation.  
**Chapter:** CSS Basic Styling  
**Material:** CSS Foundation

## Session Goal

By the end of the lesson, students should be able to explain the role of CSS, connect an external stylesheet to several HTML pages, select HTML elements, and use basic CSS properties to create a consistent and readable project theme.

## Learning Objectives

Students will be able to:

1. Explain the difference between HTML structure and CSS presentation.
2. Create and link an external `style.css` file.
3. Use element, class, descendant, grouped, attribute, and pseudo-class selectors.
4. Set text colors, background colors, and font properties.
5. Explain and apply margin, padding, and border.
6. Style page content, navigation, tables, and forms.
7. reuse one stylesheet to create a consistent theme across multiple pages.
8. Use browser developer tools to inspect and test CSS rules.

## Suggested Duration

| Stage | Time | Focus |
|---|---:|---|
| Review and hook | 10 min | Recall Day 3 HTML pages and identify presentation problems |
| CSS concept | 15 min | What CSS is and how a rule is written |
| External CSS | 15 min | Create, link, save, and verify `style.css` |
| Selectors | 25 min | Element, class, descendant, group, attribute, pseudo-class |
| Colors and fonts | 20 min | Theme colors, contrast, font family, size, weight, line height |
| Box model | 25 min | Content, padding, border, margin |
| Guided styling | 35 min | Body, headings, links, sections, table, and forms |
| Student TP | 40 min | Complete and personalize the project styles |
| Review and exit check | 10 min | Debug, demonstrate, and assess understanding |

Total suggested time: **190 minutes**. Adjust the TP block to match the class schedule.

## Required Preparation

- Students should have the Day 3 product list and form pages.
- Confirm that every page opens in a browser before adding CSS.
- Use the completed files in `Practice/` for demonstration or recovery.
- Open the editor and browser side by side.
- If possible, enable automatic browser refresh, but demonstrate manual refresh first.

## Key Vocabulary

| Term | Student-friendly meaning |
|---|---|
| CSS | A language that controls how HTML content looks |
| Rule set | A selector followed by declarations inside braces |
| Selector | The part that chooses which HTML elements to style |
| Property | The visual feature to change, such as `color` |
| Value | The setting given to a property, such as `#0284c7` |
| Declaration | One property and value pair, ending with a semicolon |
| External stylesheet | A separate `.css` file connected to HTML with `<link>` |
| Class | A reusable label added to HTML with the `class` attribute |
| Pseudo-class | A special state such as `:hover` or `:focus` |
| Box model | Content surrounded by padding, border, and margin |

## 1. What Is CSS?

Begin with the question: **“Our HTML works, but is it easy and pleasant to read?”** Explain that HTML provides meaning and structure, while CSS controls presentation.

Write and label a basic rule:

```css
h1 {
    color: #0f172a;
    font-size: 32px;
}
```

- `h1` is the selector.
- `color` and `font-size` are properties.
- `#0f172a` and `32px` are values.
- Each property/value pair is a declaration.
- The declarations are placed inside `{ }`.

Emphasize that CSS does not replace HTML. A heading must still be an `<h1>` in the HTML; CSS only changes its appearance.

### Quick Check

Ask students to identify the selector, property, and value in:

```css
p {
    color: gray;
}
```

## 2. Create and Link an External CSS File

Create `style.css` in the same folder as the HTML pages. Add this inside the `<head>` of every page:

```html
<link rel="stylesheet" href="style.css">
```

Explain each part:

- `link` connects the current document to another resource.
- `rel="stylesheet"` tells the browser the resource is CSS.
- `href="style.css"` gives the relative path to the file.
- The element belongs in `<head>` because it describes the document.

### Verification Technique

Add an obvious temporary rule:

```css
body {
    background-color: lightyellow;
}
```

Refresh each page. If one page does not change, check:

1. Is the file name exactly `style.css`?
2. Is the `<link>` inside `<head>`?
3. Is the path correct relative to the HTML file?
4. Was the CSS file saved?
5. Is the declaration spelled correctly and terminated with `;`?

Remove or replace the temporary color after verification.

### Teaching Point

One external stylesheet is preferable for this project because a single change can update all pages and prevent repeated style code.

## 3. CSS Selectors

Introduce selectors from broad to specific.

### Element Selector

Styles every element of one type:

```css
h1 {
    color: #0f172a;
}
```

Use it when all matching elements should share the rule.

### Grouped Selector

Applies the same declarations to several selectors:

```css
h1,
h2 {
    color: #0f172a;
}
```

Point out the comma. Without it, the meaning changes.

### Class Selector

HTML:

```html
<section class="student-practice">
```

CSS:

```css
.student-practice {
    background-color: #fffbeb;
}
```

The period means “select elements with this class.” Classes can be reused.

### Descendant Selector

```css
nav a {
    color: white;
}
```

This selects links inside `nav`, not every link on the page.

### Attribute Selector

```css
button[type="reset"] {
    background-color: #64748b;
}
```

This selects a button with a matching `type` attribute.

### Pseudo-class Selector

```css
a:hover {
    text-decoration: underline;
}

input:focus {
    border-color: #0284c7;
}
```

Explain that pseudo-classes style a state or condition. Ask students to hover with a mouse and move focus with the Tab key.

### Optional Specificity Explanation

Keep specificity practical: when rules conflict, a class selector is normally stronger than an element selector, and a later rule of equal strength can override an earlier one. Avoid deep specificity calculations in this foundation lesson.

## 4. Colors and Fonts

Demonstrate three common color uses:

```css
body {
    background-color: #f1f5f9;
    color: #1e293b;
}
```

- `color` changes foreground text color.
- `background-color` changes the color behind content.
- Hex values begin with `#` and provide exact, reusable theme colors.

Use a small theme palette:

| Purpose | Color |
|---|---|
| Dark heading | `#0f172a` |
| Body text | `#1e293b` |
| Primary blue | `#0284c7` |
| Page background | `#f1f5f9` |
| Card background | `#ffffff` |
| Border | `#cbd5e1` |

Explain that a theme uses a small, repeated set of colors. Students should not assign a random color to every element. Maintain strong contrast between text and its background.

Demonstrate font inheritance:

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

The browser tries Arial first, then Helvetica, then any available sans-serif font. The body font is inherited by most child elements. `line-height` improves readability by adding vertical space between lines.

## 5. Margin, Padding, and Border

Draw the box model from inside to outside:

```text
margin → border → padding → content
```

Use a section card to demonstrate:

```css
section {
    margin-bottom: 24px;
    padding: 24px;
    border: 1px solid #cbd5e1;
}
```

- **Content** is the text, image, or other inner material.
- **Padding** creates space inside the border.
- **Border** draws the edge of the box.
- **Margin** creates space outside the border, separating it from other boxes.

Change each value live. Use a bright border temporarily so students can see the boundary.

Introduce this project-wide rule:

```css
* {
    box-sizing: border-box;
}
```

Explain simply: widths become easier to control because padding and borders are counted inside the declared width.

### Check for Understanding

Ask: “To create more room between text and its border, should we use margin or padding?” Expected answer: padding.

## 6. Guided Styling Sequence

Build the stylesheet in small, testable stages. Refresh after each stage.

### Stage A: Page Foundation

Style `body` first: remove the default outer margin, choose the page background, text color, font, and line height. Then constrain `header`, `main`, and `footer` to a readable width and center them with `margin: 0 auto`.

### Stage B: Headings and Navigation

Apply consistent heading colors. Remove navigation list bullets, place items inline, and make navigation anchors look like buttons. Demonstrate `:hover` so students see immediate interaction.

### Stage C: Content Sections

Turn sections into readable cards using white background, margin, padding, border, and a small border radius. Compare the result with the unstyled page.

### Stage D: Table

Remove old HTML presentation attributes such as `border`, `cellpadding`, and `cellspacing`. Move appearance into CSS:

```css
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px;
    border: 1px solid #cbd5e1;
}
```

Explain the separation of responsibilities: HTML defines that the content is a table; CSS defines how the table looks.

### Stage E: Forms

Use `.form-group` to create consistent spacing. Style `label`, `input`, `select`, and `textarea`. Make controls full width and use `font: inherit` so they match the page typography. Add visible focus styles and explain why keyboard users need them.

### Stage F: Buttons and Status Classes

Style buttons with the project’s primary theme color. Use a class to communicate status:

```css
.status-available {
    color: #166534;
    font-weight: bold;
}
```

Remind students not to rely on color alone in real projects; the visible status text also communicates the meaning.

## 7. TP Session Instructions

Students work from the HTML project pages and produce a shared external stylesheet.

### Part A: Setup

1. Create `style.css` in the project folder.
2. Add the stylesheet `<link>` to all HTML pages.
3. Test with a temporary background color.
4. Remove the temporary test after confirming that every page is connected.

### Part B: Global Theme

1. Style `body` with a readable font, text color, background color, and line height.
2. Center the main page content and set a maximum width.
3. Choose one primary project color and reuse it.
4. Style headings and ordinary links.

### Part C: Components

1. Style navigation links and their hover state.
2. Add margin, padding, border, and background to sections.
3. Style the product table without HTML presentation attributes.
4. Style labels, form controls, focus states, and buttons.
5. Add classes for product availability states.

### Part D: Personalization and Test

1. Change the provided palette while maintaining readable contrast.
2. Add one product and a Low Stock status style.
3. Navigate between every page.
4. Use Tab to verify visible focus on links and fields.
5. Resize the browser and check that the table can still be viewed.

## Teacher Demonstration Questions

- What changes if we remove the `<link>` element?
- Why is a class selector useful for status text?
- What is the difference between `nav a` and `a`?
- Why does padding change the space inside a button?
- Why does margin not change the button’s internal size?
- Why should the same colors and fonts appear on every project page?
- What happens if a CSS declaration is missing its closing semicolon?

## Common Errors and Corrections

| Problem | Likely cause | Correction |
|---|---|---|
| No styles appear | Wrong file path or unsaved file | Confirm `href="style.css"`, file location, and saves |
| One page is unstyled | Missing `<link>` on that page | Add the link inside that page's `<head>` |
| Class rule does not work | Missing `.` in CSS or class mismatch | Compare `.class-name` with `class="class-name"` |
| Some declarations are ignored | Syntax error above the rule | Check braces, colons, and semicolons |
| Link hover does not work | Space written before `:hover` | Use `a:hover`, not `a :hover` |
| Input exceeds its container | Width plus padding/border | Apply `box-sizing: border-box` |
| Table borders appear doubled | Separate table borders | Use `border-collapse: collapse` |
| Text is hard to read | Low color contrast or small type | Use darker text, lighter background, and readable size |
| Page feels crowded | Insufficient margin, padding, or line height | Adjust one spacing layer at a time |

## Differentiation

### Support for Beginners

- Provide the selector names first and let students complete declarations.
- Use one color palette and one spacing scale: `8px`, `12px`, `16px`, `24px`.
- Ask students to style one page first, then link the same CSS to the others.
- Pair students to run the CSS connection checklist.

### Extension for Fast Finishers

- Add alternating table row colors with `:nth-child(even)`.
- Add a reusable `.button-link` class.
- Create available, low-stock, and out-of-stock status classes.
- Add a responsive table wrapper with horizontal overflow.
- Produce a second theme by changing only CSS values.

## Formative Assessment

Observe whether each student can:

- Point to the selector, property, and value in a CSS rule.
- Link the stylesheet without copying CSS into every HTML page.
- Correctly choose a class when only some elements need a style.
- Explain the difference between margin and padding.
- Make a visible theme change and predict which pages it will affect.
- Diagnose a deliberately broken stylesheet link.

## Suggested Rubric

| Criterion | Excellent | Developing | Needs support |
|---|---|---|---|
| External CSS | Correctly linked on every page | Linked on most pages | Missing or incorrect link |
| Selectors | Uses suitable element, class, and state selectors | Uses basic selectors with minor errors | Selectors frequently do not match |
| Theme | Consistent, readable colors and fonts | Mostly consistent | Inconsistent or difficult to read |
| Box model | Spacing and borders are purposeful | Some spacing is uneven | Little or incorrect box-model use |
| Forms and table | Clear and consistently styled | Mostly styled | Major components remain unstyled |
| Testing | Links, fields, focus, and pages checked | Partial testing | No clear test evidence |

## Exit Ticket

Ask students to answer these before leaving:

1. What code connects an HTML page to `style.css`?
2. What is the difference between a class selector and an element selector?
3. Which property creates space inside a border?
4. If the project color changes, why is one external stylesheet helpful?
5. Name one browser check you performed today.

## Expected Project Output

The final output is a set of styled HTML project pages that share one external CSS file. The pages should display a consistent theme, readable spacing, styled navigation, a styled product table, and styled product/category forms.

## End-of-Session Summary

Reinforce three ideas:

1. HTML describes content; CSS presents it.
2. Selectors connect CSS rules to HTML elements.
3. A shared stylesheet makes a multi-page project consistent and easier to maintain.
