# CSS Styling Guide for Each Page Section

This guide explains how to add CSS to each section of the Day 4 project. Add the CSS rules to `style.css`, save the file, and refresh the HTML page in the browser after every step.

## 1. Connect CSS to Every HTML Page

Put this line inside the `<head>` of `index.html`, `create-product.html`, and `create-category.html`:

```html
<link rel="stylesheet" href="style.css">
```

The three HTML pages and `style.css` must be in the same folder for this path to work.

## 2. Style the Whole Page

The `<body>` contains every visible section. Use it to set the default page background, text color, font, and line spacing.

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #f1f5f9;
    color: #1e293b;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

- `margin: 0` removes the browser's default outside space.
- `background-color` changes the page background.
- `color` sets the default text color.
- `font-family` changes the text style.
- `line-height` adds readable space between lines.
- `box-sizing: border-box` makes element sizes easier to control.

## 3. Set the Page Width

The header, main content, and footer should use the same width.

```css
header,
main,
footer {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
}
```

- The commas group three selectors together.
- `width: 90%` leaves space on both sides of a small screen.
- `max-width: 1000px` stops the content from becoming too wide.
- `margin: 0 auto` centers the content horizontally.

## 4. Style the Header Section

The `<header>` contains the logo, page title, description, and navigation.

```css
header {
    padding: 28px 0 20px;
}

header img {
    border-radius: 6px;
}

h1,
h2 {
    color: #0f172a;
}

h1 {
    margin: 12px 0 4px;
}

h2 {
    margin-top: 0;
}
```

- `padding` adds space inside the header.
- `header img` selects only images inside the header.
- `border-radius` rounds the logo corners.
- The heading rules create a consistent heading color and spacing.

## 5. Style the Navigation Section

The navigation uses `<nav>`, `<ul>`, `<li>`, and `<a>` elements.

```css
nav ul {
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
}

nav li {
    display: inline-block;
    margin: 0 8px 8px 0;
}

a {
    color: #0369a1;
    font-weight: bold;
    text-decoration: none;
}

nav a,
.button-link {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 5px;
    background-color: #0284c7;
    color: #ffffff;
}

nav a:hover,
.button-link:hover {
    background-color: #0369a1;
    color: #ffffff;
    text-decoration: none;
}
```

- `list-style: none` removes the bullet points.
- `inline-block` places navigation items next to each other.
- Padding and background color make each link look like a button.
- `:hover` changes the link when the mouse is over it.

## 6. Style the Main Content Sections

Each `<section>` becomes a white content card.

```css
section {
    margin-bottom: 24px;
    padding: 24px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background-color: #ffffff;
}
```

Remember the box model:

1. Content is the text, table, or form.
2. Padding is the space inside the border.
3. Border is the line around the section.
4. Margin is the space outside the border.

## 7. Style the Product Table Section

The table wrapper helps the table remain usable on a small screen.

```css
.table-wrapper {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
}

th,
td {
    padding: 12px;
    border: 1px solid #cbd5e1;
    text-align: left;
    vertical-align: middle;
}

th {
    background-color: #0f172a;
    color: #ffffff;
}

tbody tr:nth-child(even) {
    background-color: #d5e1ed;
}
```

- `overflow-x: auto` adds horizontal scrolling only when needed.
- `border-collapse: collapse` joins neighboring cell borders.
- `th, td` applies the same spacing and border to headings and cells.
- `nth-child(even)` adds a background to every even table row.

### Product Images

```css
.product-image {
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    object-fit: cover;
}
```

The `.product-image` class adds a border and rounded corners to each product image.

### Product Status

```css
.status-available {
    color: #166534;
    font-weight: bold;
}

.status-out {
    color: #b91c1c;
    font-weight: bold;
}
```

Apply the classes in HTML like this:

```html
<td class="status-available">Available</td>
<td class="status-out">Out of Stock</td>
```

## 8. Style the Form Section

First, control the width of the form and the space between each field group.

```css
form {
    max-width: 650px;
}

.form-group {
    margin-bottom: 18px;
}
```

### Form Labels

```css
label {
    display: block;
    margin-bottom: 5px;
    color: #0f172a;
    font-weight: bold;
}
```

`display: block` puts the label on its own line above the field.

### Inputs, Selects, and Textareas

```css
input,
select,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #94a3b8;
    border-radius: 5px;
    background-color: #ffffff;
    color: #1e293b;
    font: inherit;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #0284c7;
    outline: 2px solid #bae6fd;
}

textarea {
    resize: vertical;
}
```

- `width: 100%` gives every field the same width.
- `font: inherit` uses the page font inside the fields.
- `:focus` shows which field the user is currently using.
- `resize: vertical` lets the user change only the textarea height.

### Form Buttons

```css
button {
    margin: 0 8px 8px 0;
    padding: 10px 18px;
    border: 0;
    border-radius: 5px;
    background-color: #0284c7;
    color: #ffffff;
    font: inherit;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: #0369a1;
}

button[type="reset"] {
    background-color: #64748b;
}
```

The attribute selector `button[type="reset"]` styles only the reset button.

## 9. Style the Student Practice Section

The HTML section already has `class="student-practice"`. Use that class to make the practice area different from normal sections.

```css
.student-practice {
    border-left: 5px solid #f59e0b;
    background-color: #fffbeb;
}
```

The orange left border helps students quickly identify their tasks.

## 10. Style the Footer Section

The `<footer>` contains the copyright text and page links.

```css
footer {
    padding: 8px 0 28px;
    color: #475569;
    text-align: center;
}

footer p {
    margin: 6px 0;
}
```

- `text-align: center` centers the footer content.
- The padding gives the footer breathing room.
- The paragraph margin keeps the footer lines close together.

## Recommended Styling Order

Add and test the styles in this order:

1. Connect `style.css` to all HTML pages.
2. Style `body` and set the shared page width.
3. Style the header and headings.
4. Style the navigation links.
5. Turn each section into a content card.
6. Style the table or form.
7. Style the student practice section.
8. Style the footer.
9. Test hover and focus effects.
10. Resize the browser to check the layout.

## Student Practice

After completing the guide, make these changes:

1. Change the main blue theme color to another color.
2. Change the header spacing.
3. Increase the section border radius.
4. Create a `.status-low` class with orange text.
5. Change the table heading background color.
6. Change the submit button color without changing the reset button.
7. Compare the page before and after each CSS change.

## Final Checklist

- [ ] The CSS file is connected to all three HTML pages.
- [ ] The header, navigation, main sections, and footer are styled.
- [ ] The product table is readable.
- [ ] Product images and status text are styled.
- [ ] Form labels, fields, and buttons are styled.
- [ ] Hover and focus styles work.
- [ ] The student practice section is easy to identify.
- [ ] The pages remain usable when the browser becomes narrow.
