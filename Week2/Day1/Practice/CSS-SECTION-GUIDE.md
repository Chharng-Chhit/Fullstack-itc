# CSS Section Guide: Properties by Topic

Open `index.html` in a browser and `style.css` in the editor. Read one section, change one value, save, and refresh the page.

## 1. Syntax and Selectors

```css
.demo-card {
    padding: 16px;
}
```

`.demo-card` is the selector. `padding` is the property. `16px` is the value. The browser applies the rule to every element with `class="demo-card"`.

Other selectors in the file include `body` for an element, `#dashboard` for one ID, and `.demo-link:hover` for a mouse state.

**Try it:** Change the `.demo-card` padding to `24px`. **Result:** All demo cards receive more inside space.

## 2. Colors

Important properties are `color`, `background-color`, and `opacity`.

`color` changes text. `background-color` changes the area behind content. `opacity` makes an entire element partly transparent.

**Try it:** Change `.color-blue` from blue to purple. Keep the text readable.

## 3. Backgrounds

Background properties include `background-color`, `background-image`, `background-repeat`, `background-position`, `background-size`, and the shorter `background` property.

The demo uses a small radial gradient pattern made with CSS so the page does not need an external image. `background-repeat: no-repeat` shows the background once. `background-repeat: repeat` tiles it.

**Try it:** Change `background-position: center` to `top right` and observe the swatch.

## 4. Fonts

`font-family` chooses the typeface. `font-size` changes its size. `font-style` can make text italic. `font-weight` controls thickness. `font-variant` can show small capitals, but it is optional for this beginner lesson.

**Try it:** Change the font weight from `normal` to `bold` and compare the two samples.

## 5. Text Alignment and Spacing

`text-align` moves text left, center, or right. `text-decoration` adds or removes an underline. `text-transform` changes displayed letter case. `line-height` controls vertical space between lines. `letter-spacing` changes space between letters. `word-spacing` changes space between words.

**Try it:** Change `line-height: 1.8` to `1.2`. Decide which paragraph is easier to read.

## 6. Margins, Padding, Borders, and Box Sizing

The box model is:

```text
margin → border → padding → content
```

`margin` creates outside space. `padding` creates inside space. `border-color`, `border-style`, and `border-width` control the edge. `border-radius` rounds corners. `box-sizing: border-box` includes padding and border inside the declared size.

**Try it:** Change the demo border from `solid` to `dashed`, then change padding.

## 7. Display Values

`display: block` starts on a new line and can use width. `display: inline` stays within a line. `display: inline-block` stays in a line but accepts width and height. `display: none` hides the element and removes its layout space.

**Try it:** Change the hidden example to `display: block`. **Result:** It becomes visible.

## 8. Flexbox

Flexbox properties include `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`, `gap`, and `flex-grow`.

`justify-content` works along the main direction. `align-items` works across it. `flex-wrap` allows items to move to another line.

**Try it:** Change `flex-direction: row` to `column`. **Result:** The items become a vertical list.

## 9. Grid

Grid properties include `display: grid`, `grid-template-columns`, `grid-template-rows`, `column-gap`, `row-gap`, and `gap`.

`repeat(3, 1fr)` creates three equal columns. Grid is useful for dashboard cards because both rows and columns matter.

**Try it:** Change the dashboard to `repeat(2, 1fr)`.

## 10. Position and Layer Order

`position: relative` keeps an element in normal document flow and creates a reference point. A child with `position: absolute` can be placed against that reference. `top`, `right`, `bottom`, and `left` move the positioned element. `z-index` controls which positioned item appears in front.

**Try it:** Change the stock badge `top` value from `12px` to `24px`.

## 11. Lists

`list-style-type` chooses bullets such as `disc`, `circle`, `square`, or `decimal`. `list-style-position` controls whether the bullet sits inside or outside the list item's text area. `list-style: none` removes bullets for navigation lists.

**Try it:** Change the category list from `square` to `circle`.

## 12. Tables

`border-collapse: collapse` joins neighboring borders. `border-spacing` adds space when borders are separate. `empty-cells` controls empty table cells. `table-layout: fixed` gives columns a more fixed layout.

**Try it:** Change the table heading background and add a new row in the HTML.

## 13. Outlines and Cursors

An outline appears outside the border and is useful for focus. `outline-color`, `outline-style`, `outline-width`, and `outline-offset` control it. `cursor` changes the pointer shape.

**Try it:** Press `Tab` until the demo button is focused. Change its outline color. Do not remove the outline.

## 14. Dimensions and Overflow

`width` and `height` set dimensions. `max-width` prevents content from becoming too wide. `min-height` reserves a minimum height. `overflow: hidden` clips content. `overflow: auto` adds scrolling only when needed. `overflow-wrap: break-word` allows a long word to wrap.

**Try it:** Add a long word to the overflow demo and compare `overflow-wrap: normal` with `break-word`.

## 15. CSS Columns

`column-count` divides text into columns. `column-gap` adds space between columns. `column-rule` draws a line between columns. Use fewer columns on a narrow screen because narrow text is difficult to read.

**Try it:** Change from two columns to three on a wide screen, then restore two on mobile.

## 16. Responsive Media Queries

```css
@media (min-width: 768px) {
    .dashboard-demo {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

The normal CSS is the small-screen design. The media query adds columns when the screen is at least `768px` wide.

**Try it:** Test the page at 375px, 768px, and 1024px.

## Debugging Order

1. Check that the CSS file is linked.
2. Check the selector spelling.
3. Check braces, colons, and semicolons.
4. Check whether a later rule overrides the earlier rule.
5. Check the media query width.
6. Refresh the browser after saving.
