# Week 2 Day 3 Section Guide: Separate Tailwind Files

Each exercise has its own HTML file. Open one file, edit one Tailwind class, save, and refresh the browser.

## Tailwind Setup

Every exercise file has this line:

```html
<script src="../../Day2/Code/tailwind.js"></script>
```

This loads Tailwind CSS from the local course folder.

## Exercise 1 File

Open `exercise-1-colors-backgrounds-borders.html`.

Main classes:

```html
bg-blue-600 text-white border-red-600 border-dashed rounded p-6
```

Visible result:

Six boxes show different backgrounds, text colors, borders, and rounded corners.

Try It:

Change `bg-blue-600` to `bg-red-600`.

## Exercise 2 File

Open `exercise-2-small-web-page.html`.

Main classes:

```html
flex justify-between bg-blue-700 text-center grid grid-cols-3
```

Visible result:

A small page preview shows a navbar, hero section, features section, and footer.

Try It:

Change `bg-blue-700` to `bg-green-700`.

## Exercise 3 File

Open `exercise-3-flex-layout.html`.

Main classes:

```html
flex flex-col items-center justify-center gap-5 md:flex-row
```

Visible result:

Items stack on small screens and sit in one row on medium screens.

Try It:

Change `gap-5` to `gap-8`.

## Exercise 4 File

Open `exercise-4-grid-layout.html`.

Main classes:

```html
grid grid-cols-3 gap-4
```

Visible result:

Six boxes appear in a three-column grid.

Try It:

Change `gap-4` to `gap-6`.

## Exercise 5 File

Open `exercise-5-responsive-layout.html`.

Main classes:

```html
grid md:grid-cols-3 col-span-3 col-span-2
```

Visible result:

The file shows desktop, tablet, and mobile layout previews.

Try It:

Change one `bg-purple-600` class to `bg-blue-600`.

## Exercise 6 File

Open `exercise-6-card-component-grid.html`.

Main classes:

```html
grid md:grid-cols-2 lg:grid-cols-3 rounded shadow p-4
```

Visible result:

Three cards appear in a responsive grid.

Try It:

Change `lg:grid-cols-3` to `lg:grid-cols-2`.

## Exercise 10 File

Open `exercise-10-responsive-gallery.html`.

The gallery uses this class list:

```html
grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3
```

Plain-language meaning:

- `grid` creates rows and columns.
- `grid-cols-1` shows one column by default on a small screen.
- `md:grid-cols-2` changes to two columns on a medium screen.
- `lg:grid-cols-3` changes to three columns on a large screen.
- `gap-4` adds space between the images.

Each image uses these classes:

```html
h-56 w-full rounded-lg object-cover
```

Visible result:

The page shows six mountain photos. The photos have equal-height image areas, rounded corners, and spacing. The layout changes from one column to two columns and then three columns.

Try It:

Change `gap-4` to `gap-8`, then refresh the browser. The space between the images becomes larger.

## Exercise 9 File

Open `exercise-9-dashboard-layout.html`.

The dashboard has three main parts:

1. The header uses `flex`, `items-center`, and `justify-between` to place the menu, title, and profile symbol in one row.
2. The page uses `md:grid-cols-[180px_1fr]` to show a 180-pixel sidebar beside the main content on medium screens and wider.
3. The statistic cards use `grid-cols-2` by default and `lg:grid-cols-4` on large screens.

Important classes:

```html
hidden md:block
grid grid-cols-2 gap-3 lg:grid-cols-4
rounded border-2 border-teal-100 p-4
```

Visible result:

The page shows a teal dashboard header, a sidebar on wider screens, four statistic cards, and a recent-orders table.

Try It:

Change `bg-teal-700` to `bg-blue-700` on the header. Refresh the browser and observe the new header color.
