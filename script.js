//Erik Nazarian

// Part 1: Date Display


// Create a Date object for the current date and time
const currentDate = new Date();

// Get the month (+1 because JavaScript months are 0-based), day, and year
const monthNumber = currentDate.getMonth() + 1;
const dayNumber = currentDate.getDate();
const yearNumber = currentDate.getFullYear();

// NOTE: this if/else statement counts toward the two if/else statements required in Part 4.
let monthText;
if (monthNumber >= 10) {
  monthText = String(monthNumber);
} else {
  monthText = "0" + monthNumber;
}

// this if/else statement also counts toward the Part 4 requirement.
let dayText;
if (dayNumber < 10) {
  dayText = "0" + dayNumber;
} else {
  dayText = String(dayNumber);
}

// Build the message in the normal format "Today is MM/DD/YYYY"
const dateMessage = "Today is " + monthText + "/" + dayText + "/" + yearNumber;

// Display the result on the page
document.getElementById("dateOutput").innerHTML = dateMessage;


// Part 2: Number Conversion


// Starting values (all strings): two whole numbers, one decimal, one non-numeric
const num1String = "62";
const decString = "27.75";
const wordString = "hello";
const num2String = "100";

// ---- Value 1: num1String ----
// Convert with Number(), then check with Number.isNaN() and Number.isInteger()
const num1Converted = Number(num1String);
const num1IsNaN = Number.isNaN(num1Converted);
const num1IsInteger = Number.isInteger(num1Converted);

// Part 4 conditional: print a plain-English message for this value
let num1Message;
if (num1IsNaN === true) {
  num1Message = "This value is not a valid number.";
} else if (num1IsInteger === true) {
  num1Message = "This value is an integer.";
} else {
  num1Message = "This value is a decimal.";
}

// ---- Value 2: decString ----
const decConverted = Number(decString);
const decIsNaN = Number.isNaN(decConverted);
const decIsInteger = Number.isInteger(decConverted);

// Part 4 conditional: message for this value
let decMessage;
if (decIsNaN === true) {
  decMessage = "This value is not a valid number.";
} else if (decIsInteger === true) {
  decMessage = "This value is an integer.";
} else {
  decMessage = "This value is a decimal.";
}

// ---- Value 3: wordString ----
const wordConverted = Number(wordString);
const wordIsNaN = Number.isNaN(wordConverted);
const wordIsInteger = Number.isInteger(wordConverted);

// Part 4 conditional: message for this value
let wordMessage;
if (wordIsNaN === true) {
  wordMessage = "This value is not a valid number.";
} else if (wordIsInteger === true) {
  wordMessage = "This value is an integer.";
} else {
  wordMessage = "This value is a decimal.";
}

// ---- Value 4: num2String ----
const num2Converted = Number(num2String);
const num2IsNaN = Number.isNaN(num2Converted);
const num2IsInteger = Number.isInteger(num2Converted);

// Part 4 conditional: message for this value
let num2Message;
if (num2IsNaN === true) {
  num2Message = "This value is not a valid number.";
} else if (num2IsInteger === true) {
  num2Message = "This value is an integer.";
} else {
  num2Message = "This value is a decimal.";
}

// Build one sentence (list item) for each value
const num1Sentence = "<li>Original: \"" + num1String + "\" &rarr; Converted: " + num1Converted +
  " &rarr; isNaN: " + num1IsNaN + " &rarr; isInteger: " + num1IsInteger +
  "<br><em>" + num1Message + "</em></li>";

const decSentence = "<li>Original: \"" + decString + "\" &rarr; Converted: " + decConverted +
  " &rarr; isNaN: " + decIsNaN + " &rarr; isInteger: " + decIsInteger +
  "<br><em>" + decMessage + "</em></li>";

const wordSentence = "<li>Original: \"" + wordString + "\" &rarr; Converted: " + wordConverted +
  " &rarr; isNaN: " + wordIsNaN + " &rarr; isInteger: " + wordIsInteger +
  "<br><em>" + wordMessage + "</em></li>";

const num2Sentence = "<li>Original: \"" + num2String + "\" &rarr; Converted: " + num2Converted +
  " &rarr; isNaN: " + num2IsNaN + " &rarr; isInteger: " + num2IsInteger +
  "<br><em>" + num2Message + "</em></li>";

// Combine all results into ONE string (a bulleted list)
const conversionResults = "<ul>" + num1Sentence + decSentence + wordSentence + num2Sentence + "</ul>";

// Display the final result on the page
document.getElementById("numberConversionOutput").innerHTML = conversionResults;


// Part 3: Math & Formatting


// Numeric values for the price calculator
const product1 = 19.99;
const product2 = 79.99;
const product3 = 45.99;
const discount = 0.05; // 5% discount on each product
const taxRate = 0.1025; // 10.25% sales tax
const freightCost = 10.00; // shipping cost

// 1. Subtract the discount percentage from the unit price of each product
const product1Discounted = product1 - (product1 * discount);
const product2Discounted = product2 - (product2 * discount);
const product3Discounted = product3 - (product3 * discount);

// 2. Find the subtotal by adding all of the discounted prices
const subtotal = product1Discounted + product2Discounted + product3Discounted;

// 3. Multiply the subtotal by the tax rate to find the tax amount
const taxAmount = subtotal * taxRate;

// 4. Add all prices + tax (+ freight) to find the total price
const totalPrice = subtotal + taxAmount + freightCost;

// 5. Divide by 3 to find the average price per product
const averagePrice = subtotal / 3;

// Build the results string, formatting every money value with toFixed(2)
const mathResults = "<ul>" +
  "<li>Product 1: $" + product1.toFixed(2) + " &rarr; after discount: $" + product1Discounted.toFixed(2) + "</li>" +
  "<li>Product 2: $" + product2.toFixed(2) + " &rarr; after discount: $" + product2Discounted.toFixed(2) + "</li>" +
  "<li>Product 3: $" + product3.toFixed(2) + " &rarr; after discount: $" + product3Discounted.toFixed(2) + "</li>" +
  "<li>Subtotal (after " + (discount * 100).toFixed(0) + "% discount): $" + subtotal.toFixed(2) + "</li>" +
  "<li>Tax amount (" + (taxRate * 100).toFixed(2) + "%): $" + taxAmount.toFixed(2) + "</li>" +
  "<li>Freight cost: $" + freightCost.toFixed(2) + "</li>" +
  "<li><strong>Total price (subtotal + tax + freight): $" + totalPrice.toFixed(2) + "</strong></li>" +
  "<li>Average price per product: $" + averagePrice.toFixed(2) + "</li>" +
  "</ul>";

// Display the results on the page
document.getElementById("mathOutput").innerHTML = mathResults;


// Part 4: Conditionals


// The if/else statements for Part 4 are used in the sections above:
// 1. Part 1: leading-zero if/else statements for the month and the day
// 2. Part 2: if / else if / else statements that show "not a valid number",
//    "an integer", or "a decimal" for each converted value


// Extra Credit: typeof


// Five different values to identify with the typeof operator
const sampleText = "hello";
const samplePrice = 19.99;
const sampleIsOnSale = true;
let sampleNotAssigned; // here we assign nothing to the variable, making it undefined
const sampleEmptyValue = null; // here is a null, different from undefined

// Use typeof to find the type of each value
const sampleTextType = typeof sampleText;
const samplePriceType = typeof samplePrice;
const sampleIsOnSaleType = typeof sampleIsOnSale;
const sampleNotAssignedType = typeof sampleNotAssigned;
const sampleEmptyValueType = typeof sampleEmptyValue;

// Build the typeof results string
const typeResults = "<ul>" +
  "<li>\"" + sampleText + "\" &rarr; typeof: " + sampleTextType + "</li>" +
  "<li>" + samplePrice + " &rarr; typeof: " + samplePriceType + "</li>" +
  "<li>" + sampleIsOnSale + " &rarr; typeof: " + sampleIsOnSaleType + "</li>" +
  "<li>" + sampleNotAssigned + " (a variable with no value) &rarr; typeof: " + sampleNotAssignedType + "</li>" +
  "<li>" + sampleEmptyValue + " &rarr; typeof: " + sampleEmptyValueType +
  " (a known JavaScript quirk: typeof null is \"object\")</li>" +
  "</ul>";

// Display the typeof results on the page
document.getElementById("typeofOutput").innerHTML = typeResults;
