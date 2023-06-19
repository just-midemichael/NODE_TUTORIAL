// Every node modules are wrapped in an IIFE before being loaded
// Codes are wrapped in a function wrapper (function(){ codes.....})();
// The function wrapper prevents conflicts of variables
// IIFE helps keep top-level variables scoped to the module rathan than the
// global object

(function(){
    const superHero = "Batman";
    console.log(superHero);
})();

(function(){
    const superHero = "Superman";
    console.log(superHero);
})();