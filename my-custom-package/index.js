const upperCase = require("upper-case").upperCase;

const greet = (name) => {
    console.log(`Hello ${upperCase(name)}, welcome to 2023`);
};
// greet("Olumide");

module.exports = greet;