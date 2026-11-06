# Homework 9: JavaScript Built-In Objects (CIT 384) Erik Nazarian

## GitHub Pages Link

[Live Page:](https://nazarianerik.github.io/CIT384-HW9/)

## Screenshot

Path: `HW9_Webpage.png`

![Screenshot of the finished webpage](screenshot.png)

## Built-In Objects and Methods Used

**`Date` object**
- `new Date()`
- `getMonth()`
- `getDate()`
- `getFullYear()`

**`Number` object and number methods**
- `Number()`
- `Number.isNaN()`
- `Number.isInteger()`
- `toFixed()`

**Other built-ins**
- `String()`
- `document.getElementById()` and `innerHTML` (DOM)

**Language features**
- `if / else if / else` statements
- Arithmetic operators (`+`, `-`, `*`, `/`)
- Comparison operators (`===`, `>=`, `<`)
- `typeof` operator (extra credit)

## Reflection

The easiest part was the price calculator because it was just arithmetic and `toFixed(2)` to make the results look like real money. The hardest part was Part 2, since I wrote each conversion as its own set of statements, I think using arrays or loops will be cleaner. I learned that the `Date` object counts months starting at 0, so `getMonth()` needs a +1, and that it does not add leading zeros by itself. I learned that `Number()` returns `NaN` for text like "hello" and that `Number.isNaN()` and `Number.isInteger()` are decent ways to check the result. Using `innerHTML` showed me that JavaScript can build and update the page itself, not only print to the console.

## Extra Credit: `typeof` Section

A fourth section on the page uses the `typeof` operator to identify the type of five values:

| Value | result |
|---|---|
| `"hello"` | `"string"` |
| `19.99` | `"number"` |
| `true` | `"boolean"` |
| a variable with no value (`undefined`) | `"undefined"` |
| `null` | `"object"` |

`typeof null` returns `"object"` even though `null` is not an object. This is a long-standing quirk in JavaScript.

## Sources

- MDN Web Docs: `Date`, `Number`, `Number.isNaN()`, `Number.isInteger()`, `Number.prototype.toFixed()`, `typeof`
- CIT 384 lecture slides
