console.log("Hello from index dot js");

// Multiply function is store in a constant
const multiply = require("./multiply.js");
const multiply_1 = multiply(2, 2)
const multiply_2 = multiply(3, 3)
console.log("2 * 2 =", multiply_1,",", "3 * 3 =", multiply_2, "<-- multiply")


// Add function is stored in a constant
const addition = require("./add.js");
const sum_1 = addition(2, 2);
const sum_2 = addition(3, 3);
console.log("2 + 2 =", sum_1,",", "3 + 3 =", sum_2, "<-- addition");

// Sub function is stored in a constant
const subtraction = require("./substraction.js")
const sub_1 = subtraction(2, 3);
const sub_2 = subtraction(3, 2);
console.log("2 - 3=", sub_1,",", "3 - 2= ", sub_2, "<-- substration")