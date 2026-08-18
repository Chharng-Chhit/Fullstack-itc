# Week 2 Day 1 CSS Teaching Route Map

This route map gives the teacher a clear path through the CSS Properties by Section lesson. The class should move from a very small CSS rule to a complete responsive reference page.

## Route Overview

```text
Open the page
    ↓
Read one CSS rule
    ↓
Select an HTML element
    ↓
Style color and text
    ↓
Control the box model
    ↓
Arrange content with Flexbox and Grid
    ↓
Add position, lists, tables, outlines, and cursor states
    ↓
Control dimensions, overflow, and columns
    ↓
Test responsive breakpoints
    ↓
Student creates a new inventory section
    ↓
Assessment and submission
```

## Teaching Route at a Glance

| Stop | Time | Teacher focus | Student action | Evidence to check |
|---:|---:|---|---|---|
| 1 | 10 min | Introduce the page and target | Open `index.html` | Page loads and sections are visible |
| 2 | 15 min | Explain selector, property, and value | Identify parts of one rule | Student can read a CSS rule |
| 3 | 15 min | Show colors and backgrounds | Change a swatch | Text remains readable |
| 4 | 20 min | Show fonts and text spacing | Change heading and paragraph styles | Text size and spacing change |
| 5 | 25 min | Teach the box model | Change padding, border, and margin | Inside and outside space are different |
| 6 | 20 min | Teach display values | Change block, inline, and hidden examples | Layout behavior is explained |
| 7 | 25 min | Teach Flexbox | Change direction, gap, and alignment | Items arrange in one direction |
| 8 | 20 min | Teach Grid | Change column count | Cards arrange in rows and columns |
| 9 | 20 min | Teach position, lists, tables, focus, cursor | Move badge and test keyboard focus | Interaction remains visible |
| 10 | 15 min | Teach dimensions, overflow, columns | Add long content | Content stays controlled |
| 11 | 15 min | Teach media queries | Test 375px, 768px, and 1024px | Layout adapts to screen size |
| 12 | 25 min | Guide independent work | Add Supplier Information section | Student combines four CSS sections |
| 13 | 10 min | Assess and close | Explain one change and submit evidence | Student can describe the result |

**Total:** approximately 235 minutes. Adjust practice time for the class schedule.

## Stop 1: Open and Orient the Class

### Teacher action

1. Open `Week2/Day1/Practice/index.html` in a browser.
2. Scroll through all visible sections.
3. Explain that this is a reference page, not a page students must memorize.
4. Point out the matching `style.css` section comments.

### Teacher words

“Today we will change CSS values and observe the result. We will always make one change at a time so we know which property caused the result.”

### Student action

- Open the same HTML file.
- Confirm that the CSS file is connected.
- Write down one section they already recognize and one section they do not recognize.

### Gate to continue

Every student can see styled content. If not, check the stylesheet link before teaching properties.

## Stop 2: Read the CSS Sentence

Show:

```css
.demo-card {
    padding: 16px;
}
```

Ask students:

- What does the dot mean?
- What is the selector?
- What is the property?
- What is the value?

### Expected answers

- The dot means a class selector.
- `.demo-card` is the selector.
- `padding` is the property.
- `16px` is the value.

### Student checkpoint

Students find `.selector-card`, `#id-demo`, and `.demo-link:hover` in the source.

## Stop 3: Colors and Backgrounds

### Demonstrate

Change one value at a time:

```css
.color-blue {
    background-color: #3974d3;
}
```

Then discuss:

- `color` changes text.
- `background-color` changes the area behind content.
- `opacity` can make an element partly transparent.
- `background-repeat` controls whether a background pattern repeats.

### Ask

“If the text becomes difficult to read after a background change, what should we change?”

**Expected answer:** Change the text color or choose a more readable background color.

### Gate to continue

Students change one swatch and can explain whether they changed foreground text or the background.

## Stop 4: Fonts and Text

### Demonstrate

Show `font-family`, `font-size`, `font-style`, `font-weight`, `text-align`, `text-transform`, `line-height`, `letter-spacing`, and `word-spacing` in the source.

### Sequence

1. Change font family and compare the appearance.
2. Change font size and check whether the heading still fits on mobile.
3. Change font weight to make important information stronger.
4. Change line height and compare paragraph readability.
5. Change text alignment and text transformation.

### Student checkpoint

Students change the heading size and line height, then explain which property changed size and which changed vertical space.

## Stop 5: Box Model

Draw this on the board:

```text
outside space: margin
edge: border
inside space: padding
content: text or child elements
```

### Demonstrate

1. Change `.box-model-demo` padding from `32px` to `16px`.
2. Observe the content move closer to the border.
3. Change the border width and style.
4. Add margin and observe space outside the box.
5. Explain `box-sizing: border-box`.

### Ask

“Which property should we use when the text is touching the border?”

**Expected answer:** Padding.

### Gate to continue

Students must describe padding as inside space and margin as outside space.

## Stop 6: Display Values

Use the four examples in the page:

- `block` starts on a new line.
- `inline` stays in the current line.
- `inline-block` stays in the line and can use width and height.
- `none` hides the element and removes its layout space.

### Student experiment

Students change `.display-hidden` from `display: none` to `display: block`, refresh, and record what appears.

## Stop 7: Flexbox

### Teacher explanation

Flexbox arranges direct children along one main direction. In this page, the navigation example uses a row on a wider screen and can wrap when space is limited.

### Demonstration route

1. Find `.flex-demo`.
2. Change `flex-direction: row` to `column`.
3. Change `justify-content` to `center`.
4. Change `align-items` to `flex-start`.
5. Change `gap` from `12px` to `24px`.
6. Make the browser narrow and observe `flex-wrap`.

### Check

Students explain that `justify-content` works along the main axis and `align-items` works across it.

## Stop 8: Grid

### Teacher explanation

Grid is useful when a page needs rows and columns. The dashboard uses equal columns so each inventory number has a consistent place.

### Demonstration route

1. Find `.dashboard-demo`.
2. Change `repeat(3, 1fr)` to `repeat(2, 1fr)`.
3. Explain that `1fr` means one equal fraction of available space.
4. Change `gap` and observe the space between cards.
5. Resize the browser and find the breakpoint that adds columns.

### Gate to continue

Students can state one situation for Flexbox and one situation for Grid.

## Stop 9: Position, Lists, Tables, Outlines, and Cursor

### Position

Show that `.position-card` uses `position: relative` and `.stock-badge` uses `position: absolute`. Change `top` and `right` to move the badge within the card.

### Lists and tables

1. Change `list-style-type: square` to `circle`.
2. Add a category.
3. Add a table row.
4. Explain `border-collapse: collapse`.

### Outline and cursor

1. Press `Tab` until the button is focused.
2. Change `outline-color` and `outline-offset`.
3. Move the mouse over the cursor demo.
4. Explain why a visible focus outline supports keyboard users.

## Stop 10: Dimensions, Overflow, and Columns

### Demonstrate

- Add a long sentence to `.overflow-demo`.
- Compare `max-width`, `min-height`, and `overflow: auto`.
- Change `overflow-wrap` to keep long words inside the box.
- Change the columns demo from two columns to three.

### Safety question

“If three columns make the text too narrow on a phone, what should we do?”

**Expected answer:** Use one column at the small-screen breakpoint.

## Stop 11: Responsive Testing

Use three test widths:

| Width | What to inspect |
|---:|---|
| 375px | Navigation wrapping, one-column content, readable headings |
| 768px | Grid columns, header row, table width |
| 1024px | Three dashboard columns, spacing, content alignment |

Students should record one layout change at each width.

## Stop 12: Independent Supplier Section

Students add a new section with:

1. A heading and paragraph.
2. A supplier list.
3. A supplier table.
4. A new class with color, background, padding, border, and margin.

### Teacher support questions

- Which HTML element should contain this group?
- What class name describes the new section?
- Which CSS section will control its spacing?
- Which property will make the table readable?

Do not write the complete answer for students. Point them to the relevant section in `CSS-SECTION-GUIDE.md`.

## Stop 13: Assessment and Submission

Ask each student to show:

- One selector and its matching HTML element.
- One color or background change.
- Padding and margin on a visible box.
- Flexbox and Grid source rules.
- A visible focus outline.
- A responsive change at a second width.
- The new Supplier Information section.

## If the Class Is Short on Time

Complete Stops 1–8 during class. Assign Stops 9–12 as practice. Students must still test the page and submit the evidence checklist.

## If the Class Is Ahead

Students can add a product image with `max-width: 100%`, create a second theme, or use `column-rule` in a product description. They must explain each new property before using it.
