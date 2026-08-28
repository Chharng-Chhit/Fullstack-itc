# Week 2 Day 3 Teaching Notes: HTML and Tailwind CSS Practice

**Date:** 19-Aug-2026  
**Course session:** Week 2, Day 3  
**CLO1:** Create basic project pages using HTML, CSS, and JavaScript foundation.  
**Chapter title:** HTML and Tailwind CSS Practice  
**Chapter material:** CSS Foundation

## Goal

Students practice common Tailwind CSS utility classes by building eight separate visual exercise files.

Tailwind CSS is a CSS tool that uses small class names directly in HTML. A utility class is one class that does one small styling job, such as `bg-blue-700`, `p-4`, or `rounded`.

## Objectives

Students will be able to:

1. Use Tailwind color, background, border, padding, margin, and rounded classes.
2. Build a small page section with navbar, hero, features, and footer.
3. Use `flex` classes for simple row and column layouts.
4. Use `grid` classes for equal card layouts.
5. Use responsive prefixes such as `md:` and `lg:`.
6. Build a responsive card grid.
7. Build a responsive image gallery.

## Vocabulary

| Word | Beginner meaning |
|---|---|
| Tailwind CSS | A CSS tool that gives many ready-made utility classes. |
| Utility class | A small class that does one style job. |
| Prefix | A word before a class that changes when the class works, such as `md:`. |
| Responsive | A layout that changes for mobile, tablet, and desktop screens. |
| Flex | A layout method for placing items in a row or column. |
| Grid | A layout method for placing items in rows and columns. |
| Border radius | Rounded corners on a box. |
| Shadow | A soft outside effect that makes a box look raised. |

## Lesson Timing

| Part | Time | Focus |
|---|---:|---|
| Open the reference image | 10 min | Understand the exercise targets |
| Tailwind setup | 10 min | Explain the local `tailwind.js` file |
| Exercise 1 | 25 min | Colors, backgrounds, and borders |
| Exercise 2 | 35 min | Small web page sections |
| Exercise 3 | 25 min | Flex layout |
| Exercise 4 | 25 min | Grid layout |
| Exercise 5 | 35 min | Responsive layout prefixes |
| Exercise 6 | 35 min | Responsive card grid |
| Exercise 10 | 35 min | Responsive image gallery |
| Testing and evidence | 15 min | Browser check and submission |

## Teaching Flow

### Explain

Tailwind classes are written inside the HTML `class` attribute.

Small example:

```html
<div class="bg-blue-700 p-4 text-white">
    Blue box
</div>
```

Explain each class:

- `bg-blue-700` gives the box a blue background.
- `p-4` adds padding inside the box.
- `text-white` makes the text white.

### Demonstrate

Open `Practice/exercise-1-colors-backgrounds-borders.html`.

Change this:

```html
<div class="rounded bg-blue-600 p-5 font-semibold text-white">
```

To this:

```html
<div class="rounded bg-red-600 p-5 font-semibold text-white">
```

Expected result:

The blue box becomes red.

### Guided Practice

Complete one exercise at a time:

1. Read the exercise title.
2. Read the preview.
3. Read the `Use:` classes.
4. Change one class.
5. Refresh the browser.
6. Record what changed.

### Independent Practice

Students choose one exercise and create one more similar item.

Examples:

- Add a seventh grid box.
- Add a fourth card.
- Add one more menu item.
- Change the responsive card grid colors.

## Exercise Notes

### Exercise 1: Colors, Backgrounds & Borders

Main concept:

Use Tailwind color and border classes.

Important classes:

`bg-*`, `text-*`, `border`, `border-*`, `border-2`, `border-dashed`, `rounded`, `p-4`, `m-2`

Quick check:

Ask students to point to the class that changes background color.

### Exercise 2: Design a Small Web Page

Main concept:

Build page sections with HTML and Tailwind classes.

Important classes:

`flex`, `justify-between`, `text-center`, `bg-*`, `p-*`, `rounded`, `shadow`

Quick check:

Ask students which HTML part is the navbar and which part is the footer.

### Exercise 3: Flex Layout

Main concept:

Use Flexbox to place items in a column on small screens and a row on wider screens.

Important classes:

`flex`, `flex-col`, `md:flex-row`, `justify-center`, `items-center`, `gap-4`

Quick check:

Resize the browser and ask students what changes.

### Exercise 4: Grid Layout

Main concept:

Use Grid to create rows and columns.

Important classes:

`grid`, `grid-cols-3`, `gap-3`, `p-8`

Quick check:

Ask how many columns the preview has.

### Exercise 5: Responsive Layout

Main concept:

Use responsive prefixes to change layout at different screen widths.

Important classes:

`md:*`, `lg:*`, `grid`, `grid-cols-*`, `col-span-*`

Quick check:

Ask what `md:grid-cols-3` means.

Expected answer:

Use three columns on medium screens and wider.

### Exercise 6: Card Component Grid

Main concept:

Use Grid and spacing classes to make responsive cards.

Important classes:

`grid`, `md:grid-cols-2`, `lg:grid-cols-3`, `gap-4`, `rounded`, `shadow`, `p-4`

Quick check:

Ask students to identify the image area, title, text, and button in each card.

### Exercise 10: Responsive Gallery

Main concept:

Use responsive Grid classes to change the number of gallery columns.

Important classes:

`grid-cols-1`, `md:grid-cols-2`, `lg:grid-cols-3`, `gap-4`, `rounded-lg`, `object-cover`

Quick check:

Ask students how many columns they see on a mobile, tablet, and desktop screen.

Expected answer:

The gallery uses one column on mobile, two columns on tablet, and three columns on desktop.

## Common Problems

| Problem | Likely cause | Fix |
|---|---|---|
| Tailwind classes do not work | `tailwind.js` path is wrong | Check `<script src="../../Day2/Code/tailwind.js"></script>` |
| Box color does not change | Class name is misspelled | Check spelling like `bg-blue-700` |
| Responsive layout does not change | Browser is not wide enough | Resize the browser or use device toolbar |
| Cards are too close together | Missing gap class | Add `gap-4` or `gap-6` |

## Assessment

Students pass the lesson when:

- Each exercise file opens from `Week2/Day3/Practice/`.
- All eight exercise preview files are available.
- The student changes at least one class in each exercise.
- The student can explain at least five Tailwind classes used in the exercise files.

## Exit Ticket

Answer these before leaving:

1. What does `bg-blue-700` change?
2. What does `p-4` add?
3. What does `rounded` do?
4. What does `md:flex-row` mean?
5. What is one difference between `flex` and `grid`?
