# Fullstack Beginner Practice Agent Rules

## Mission

Create lessons and coding practice that a new learner can read, copy, run, change, and understand. The continuing project is the Product Inventory Management System.

The student should learn one small idea at a time and see a working result after each step.

## Non-Negotiable Beginner Rules

1. Use plain language and explain new words before using them.
2. Teach one main concept per lesson section.
3. Start with a very small example, then connect it to the project.
4. Use simple, direct code before adding shortcuts or abstractions.
5. Keep variable, class, function, component, and file names descriptive.
6. Keep examples short enough for students to type and edit.
7. Tell students the exact file to open and the exact place to change.
8. Show the expected result after every important task.
9. Separate required tasks from optional challenge tasks.
10. Never hide important learning behind a library, helper, generator, or framework.
11. Do not add a new technology before its scheduled lesson.
12. Preserve the previous day's working project and build on it.

## Code Simplicity Rules

### HTML

- Use semantic tags such as `header`, `nav`, `main`, `section`, and `footer`.
- Keep the document structure easy to see.
- Use one clear purpose for each section.
- Use visible labels for form fields.
- Connect every label's `for` value to an input `id`.
- Add useful `alt` text to meaningful images.
- Prefer simple relative links between student pages.

### CSS

- Use one external stylesheet when several pages share styles.
- Prefer direct selectors, simple classes, and readable grouping.
- Teach the box model before complex layouts.
- Use Flexbox for simple rows, columns, and alignment.
- Use Grid for simple card rows and columns.
- Write mobile styles first, then add clear media queries.
- Use normal colors, pixels, percentages, margin, padding, and border first.
- Do not use CSS variables, `clamp()`, `min()`, complex selectors, preprocessors, or animation unless the lesson explains them.
- Keep focus and hover styles visible and understandable.
- Check that the page has no unwanted horizontal scrolling.

### JavaScript

- Begin with variables, values, conditions, loops, functions, arrays, and objects.
- Use `const` and `let` only after explaining the difference.
- Prefer named functions with one clear job.
- Explain DOM selectors and events before combining them.
- Show the data in a readable array or object before adding filtering or rendering logic.
- Keep browser output visible through simple text, lists, or messages.
- Do not introduce promises, modules, classes, or complex array methods before teaching them.
- Do not place large code blocks in the browser just for display; explain code in the source comments or Markdown guide.

### React

- Explain components before props, props before state, and state before effects.
- Keep one component example focused on one responsibility.
- Use simple props and event examples before forms or API calls.
- Explain list keys, loading state, empty state, and error state when they first appear.
- Avoid unnecessary state libraries, custom hooks, or complex folder structures.

### PHP, Laravel, SQL, and APIs

- Explain the basic request, response, table, and record concepts before framework shortcuts.
- Show one route, controller action, model, or query at a time.
- Use descriptive field names based on the inventory project.
- Explain validation before relying on framework validation rules.
- Never put passwords, tokens, API keys, or secrets in student code.

## Lesson Generation Flow

For each requested day:

1. Read the exact date, CLO, chapter title, outline, TP session, and output.
2. Inspect the previous day's real files and preserve working paths.
3. Make a concept map: explain, demonstrate, guided task, independent task, and visible evidence.
4. Create teaching notes with short examples and quick checks.
5. Create practice instructions with numbered student tasks.
6. Create or update the smallest runnable project files.
7. Create a section guide when the student needs line-by-line explanation.
8. Verify the files, links, syntax, and requested output.
9. Report what was checked and clearly state anything not checked.

## Required Daily Practice Flow

Every practice package should follow this order:

1. Open the previous working project.
2. Inspect the target output.
3. Follow a small teacher demonstration.
4. Complete the required TP tasks in order.
5. Complete an independent practice task.
6. Try an optional challenge only after required work is complete.
7. Test the result in the appropriate tool.
8. Record one problem and how it was fixed.
9. Submit the required files and evidence.

## Recommended Daily Files

```text
WeekN/DayN/
├── TEACHING-NOTES.md
└── Practice/
    ├── README.md
    ├── runnable project files
    └── SECTION-GUIDE.md
```

`TEACHING-NOTES.md` should include the goal, objectives, vocabulary, timing, concept explanations, guided practice, common problems, assessment, and exit ticket.

`Practice/README.md` should include the project output, starter files, numbered tasks, required evidence, submission checklist, optional challenge, and reflection questions.

`SECTION-GUIDE.md` should explain the real source files in source order. Explain the HTML layout before CSS when both are used. Include a small code snippet, plain-language explanation, visible result, and `Try It` task for every major section.

## Progression Boundaries

Follow the course order:

```text
HTML → CSS → JavaScript → React → PHP/SQL → Laravel API → Integration → Auth → Docker
```

- Week 1: no JavaScript behavior or framework code.
- JavaScript lessons: do not replace the HTML/CSS foundation with React.
- React lessons: do not hide basic concepts behind a state library.
- Backend lessons: explain the request and database flow before full CRUD.
- Integration lessons: show loading, success, empty, and error states.
- Authentication lessons: use safe placeholder values and explain the security boundary.

## Quality Gate Before Delivery

### Curriculum

- [ ] Date, CLO, chapter, outline, TP, and project output match the course README.
- [ ] Every outline item appears in teaching and hands-on practice.
- [ ] The lesson builds on the previous lesson.
- [ ] Required work is separated from optional challenges.

### Beginner Experience

- [ ] New terms are explained before use.
- [ ] No unexplained advanced syntax is present.
- [ ] Exact file paths and edit locations are given.
- [ ] The expected result is clear.
- [ ] Students can run or open the starter files directly.

### Source Checks

- [ ] Real files exist at the documented paths.
- [ ] Local links, image paths, imports, and API references are checked.
- [ ] HTML is balanced and correctly nested.
- [ ] CSS braces are balanced.
- [ ] JavaScript parses and required interactions are tested when relevant.
- [ ] Forms have labels and images have useful `alt` text.
- [ ] Responsive pages are checked for narrow-screen overflow.

Never claim a browser, server, database, API, or container test was completed unless it was actually run.

## Agent Response Format

After creating or updating a lesson, report:

```text
Created or updated:
- [file path]

Student focus:
- [main concepts]

Verified:
- [checks actually performed]

Not verified:
- [browser/server/database checks not performed, if any]
```
