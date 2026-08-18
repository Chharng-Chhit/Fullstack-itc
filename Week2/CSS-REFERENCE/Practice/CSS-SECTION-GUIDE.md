# CSS Section Guide

Read `style.css` from top to bottom. After each section, change one value and refresh `index.html`.

## How to Use This Guide

Each section has four parts: the idea, a source example, the visible result, and a small change to try. Do not change several sections at the same time. If the result is unexpected, undo the last change before continuing.

## 1. Syntax and selectors

`.product-card { border: 1px solid #d6deeb; }` uses a class selector. `border` is the property and the remaining text is its value. `body` is an element selector. `a:focus` is a pseudo-class selector.

**Result:** Product cards have a visible edge. **Try:** change `1px` to `3px`.

### Selector practice

- `body` selects the page element.
- `.summary-card` selects every element with that class.
- `#dashboard` selects the section with that unique ID.
- `a:hover` selects a link while the mouse is over it.
- `a:focus` selects a link reached by keyboard or another input method.

## 2. Colors, backgrounds, fonts, and text

`.hero` uses `background-color`. `color` changes text. `font-size`, `font-weight`, `text-align`, and `line-height` control readable text.

**Result:** The hero and headings have a clear visual order. **Try:** choose a new readable hero color.

Use dark text on a light background or light text on a dark background. Avoid choosing a color only because it looks attractive; check whether the words are still easy to read.

## 3. Margins, padding, borders, and the box model

Content is surrounded by padding, border, and margin. Padding is inside the border; margin is outside it. Find `.summary-card`, change padding to `32px`, then add `margin-top: 12px`.

**Result:** Cards have more inside space and the selected card has outside space.

The universal rule `box-sizing: border-box` makes an element's declared width include its padding and border. This helps students predict the size of cards and containers.

## 4. Display, Flexbox, and Grid

`.navigation` uses `display: flex` for one row or column. `.product-grid` uses `display: grid` for rows and columns. `1fr` means one equal fraction.

**Result:** Navigation aligns and cards form columns. **Try:** change `repeat(3, 1fr)` to `repeat(2, 1fr)`.

`gap` creates space between Flexbox or Grid items. It is easier to maintain than adding different margins to every card.

## 5. Borders, outlines, hover, and focus

`a:focus` adds an outline when a keyboard user reaches a link. `.nav-list a:hover` changes a link under the mouse. Press `Tab` and keep the outline visible.

**Try:** change the outline color without removing it.

An outline is different from a border because it is drawn outside the element and does not normally take up layout space. It is useful for showing keyboard focus.

## 6. Lists, tables, dimensions, and overflow

`list-style: none` removes navigation bullets. Table cells use padding and borders. `max-width: 100%` prevents wide content from exceeding its parent. `overflow-x: auto` keeps a wide table from widening the whole page.

**Try:** add a category, a table row, and a long product description.

The table uses `border-collapse: collapse` so neighboring cell borders appear as one line. The wrapper uses horizontal overflow only for the table, instead of making the whole page too wide.

## 7. Responsive media queries

The base style is for small screens. The `600px` media query adds two columns, and the `900px` media query adds three columns.

**Result:** About 375px shows one column, 600px shows two, and 900px shows three. **Try:** change `900px` to `800px`.

The lesson uses a mobile-first approach: the normal rules are the small-screen design, and media queries add space for wider screens. A breakpoint is a width where the design changes.

## Final Check

Test at approximately 375px, 600px, and 900px. Confirm readable text, visible keyboard focus, aligned cards, and no unwanted horizontal scrolling.

## Reference: Common Properties from the Chart

| Property | What it controls in this project |
|---|---|
| `color` | Text color |
| `background-color` | Area behind content |
| `font-size` | Text size |
| `font-weight` | Text thickness |
| `margin` | Outside space |
| `padding` | Inside space |
| `border` | Visible edge |
| `display` | How an element participates in layout |
| `position` | How an element is placed |
| `width` / `max-width` | Horizontal size limits |
| `min-height` | Minimum vertical size |
| `overflow` | What happens when content does not fit |
| `text-align` | Horizontal text alignment |
| `text-transform` | Changes letter case for display |

## Debugging Checklist

When a rule does not work, check in this order:

1. Is the stylesheet linked correctly?
2. Is the selector spelled exactly like the HTML class or ID?
3. Did the rule include both `{` and `}`?
4. Is the property followed by a colon?
5. Is the value followed by a semicolon?
6. Is another later rule overriding the change?
7. Did the browser refresh the newest saved file?
