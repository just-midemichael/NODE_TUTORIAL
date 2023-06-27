const upperCase = require("upper-case").upperCase;

const greet = (name) => {
    console.log(`Hello ${upperCase(name)}`);
};
greet("Olumide");

module.exports = greet;