# JavaScript - Check if a Number is Even or Odd

## Task

Create a JavaScript program that checks whether a given number is **even or odd**.

## Objective

The objective of this assignment is to use JavaScript conditional statements and the modulus (`%`) operator to determine whether a number is divisible by 2.

## Files

- `index.html` - HTML structure of the application.
- `style.css` - Styling for the input, button, result, and page layout.
- `script.js` - JavaScript logic used to check whether the number is even or odd.

## How It Works

1. The user enters a number in the input field.
2. The **Check** button calls the `checkEvenOdd()` function.
3. The entered value is converted into a number using `Number()`.
4. The modulus operator `%` is used to find the remainder after division by 2.
5. An `if...else` statement checks the remainder:
   - Remainder `0` → the number is **Even**.
   - Any other remainder → the number is **Odd**.
6. The result is displayed on the webpage.

## Logic

```javascript
if (number % 2 === 0) {
    // Even number
} else {
    // Odd number
}
```

## Example

For an input of:

```text
8
```

The output will be:

```text
8 is an Even Number.
```

For an input of:

```text
7
```

The output will be:

```text
7 is an Odd Number.
```

## HTML Elements Required

The JavaScript expects the HTML page to contain:

```html
<input type="number" id="numberInput">
<button onclick="checkEvenOdd()">Check</button>
<p id="result"></p>
```

And the JavaScript file should be included before the closing `body` tag:

```html
<script src="script.js"></script>
```

The stylesheet can be linked in the `head` section:

```html
<link rel="stylesheet" href="style.css">
```

## Concepts Used

- JavaScript functions
- Variables
- `Number()`
- Modulus operator `%`
- `if...else`
- DOM selection using `getElementById()`
- `textContent`
- Basic input validation

## How to Run

1. Keep `index.html`, `style.css`, and `script.js` in the same folder.
2. Open `index.html` in a web browser.
3. Enter any number.
4. Click **Check**.
5. The program will display whether the number is even or odd.
