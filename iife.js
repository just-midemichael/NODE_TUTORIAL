// Every node modules are wrapped in an IIFE before being loaded
// Codes are wrapped in a function wrapper (function(){ codes.....})();
// The function wrapper prevents conflicts of variables
// IIFE helps keep top-level variables scoped to the module rathan than the
// global object

// Passing "message" parameter to the function with argument "Hello" or "Hi"
(function(message){
    const superHero = "Batman";
    console.log(message, superHero);
})("Hello");

(function(message){
    const superHero = "Superman";
    console.log(message, superHero);
})("Hi");