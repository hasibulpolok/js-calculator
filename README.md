# Simple Calculator

A small, responsive calculator built with HTML, CSS, and JavaScript. It includes basic arithmetic, keyboard support, parentheses, backspace, and a simple input validation step before evaluation.

What I did
- Created a compact README documenting the three files (index.html, style.css, script.js), how to run the app, keyboard shortcuts, implementation notes, and how to customize or extend it.

Files
- `index.html` — markup and accessible layout for the calculator.
- `style.css` — responsive styling and CSS variables for easy theming.
- `script.js` — interaction logic, keyboard support, and a small safety check before evaluating expressions.

Features
- Basic arithmetic: addition, subtraction, multiplication, division
- Parentheses and decimal support
- AC (clear), backspace, and equals
- Keyboard support (numbers, operators, Enter, Backspace, Escape)
- Responsive layout for small screens
- Simple input validation before evaluating to reduce injection risk
- Accessible elements (aria labels, semantic grouping)

Quick start
1. Download the three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Open `index.html` in your browser.

Or, run a simple local server (useful for some browser setups):
- Python 3:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000` in your browser
- Node (http-server):
  - `npx http-server -p 8000`
  - Open `http://localhost:8000`

Keyboard shortcuts
- Digits: `0`–`9`
- Decimal point: `.`
- Enter: `=` (evaluate)
- Backspace: remove last character
- Escape: clear (AC)
- Operators: `+`, `-`, `*` (mapped to ×), `/` (mapped to ÷)
- Parentheses: `(` and `)`

Implementation notes
- The UI uses visual symbols `×` and `÷`. Before evaluating, the script replaces these with JavaScript operators `*` and `/`.
- The evaluation function performs a conservative validation: it only allows digits, whitespace, operators `+-*/`, parentheses, and decimal point. If the input contains unexpected characters, it throws an error and shows `Error` briefly.
- The expression is evaluated using a safe Function wrapper (not `eval`) and with limited allowed characters. This is adequate for a simple calculator, but do not treat it as cryptographically secure — for higher-security needs, use a proper expression parser or math library.
- The display has a max length to avoid overflow and poor UX.

Customization
- Theme colors are defined as CSS variables at the top of `style.css`:
  - `--bg`, `--panel`, `--accent`, `--btn`, `--btn-text`, `--display-bg`
  - Change those to quickly restyle the calculator.
- To add more functions (percent, memory, scientific functions), add buttons in `index.html` and implement logic in `script.js`. Consider using a math library (e.g., mathjs) if adding complex functions.

Accessibility
- The calculator uses `role="application"` and `aria-label` for the display and button group.
- Buttons are real `<button>` elements, making them focusable and operable by keyboard and assistive tech.

Extending ideas
- History pane showing previous calculations
- Long-press or hold for continuous backspace
- Scientific mode with trig/log functions
- More robust expression parser for better error messages and safety

License
- MIT License — feel free to reuse and modify.

Contact / Next steps
I've written this README describing how the project is structured and how to run and extend it. If you want, I can:
- Provide a single-file (HTML-only) distribution,
- Add a small test suite,
- Implement history, or
- Add additional scientific functions and examples.

```