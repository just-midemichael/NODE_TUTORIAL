// Lesson 0
// console.log("Hello from index dot js");

// // Multiply function is store in a constant
// const multiply = require("./multiply.js");
// const multiply_1 = multiply(2, 2)
// const multiply_2 = multiply(3, 3)
// console.log("2 * 2 =", multiply_1,",", "3 * 3 =", multiply_2, "<-- multiply")


// // Add function is stored in a constant
// const addition = require("./add.js");
// const sum_1 = addition(2, 2);
// const sum_2 = addition(3, 3);
// console.log("2 + 2 =", sum_1,",", "3 + 3 =", sum_2, "<-- addition");

// // Sub function is stored in a constant
// const subtraction = require("./substraction.js")
// const sub_1 = subtraction(2, 3);
// const sub_2 = subtraction(3, 2);
// console.log("2 - 3=", sub_1,",", "3 - 2= ", sub_2, "<-- substration")


// Lesson 1
// require("./batman.js");
// require("./superman.js");


// Lesson 2
// const superHero = require("./superHero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./superHero");
// console.log(newSuperHero.getName());

// const SuperHero = require("./superHero.js");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());
// superman.setName("Clark kent");
// console.log(superman.getName());


// Lesson 3
// const math = require("./math.js");

// Destructuring math according to ES6 practice 
// const { add, subtract} = math;

// console.log(add(8, 2), subtract(8, 2));


// Lesson 4
// getting data from json.data
//const jsondata = require("./data.json");
//console.log(jsondata.address.city);


// Lesson 5
// Path Built-modules
// const path = require("node:path")

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// joining paths
// console.log(path.join("NODE_TUTORIAL", "lesson_1", "19.path_module"))
// console.log(path.isAbsolute(path.join(__dirname), "data.json"));

// resolving path
// console.log(path.resolve("nodejs", "./lesson_1", "../path_module"));


// Lesson 6
// const greet = (name) => {
//     console.log("Hello, are we good?", name);
// };

// greetAuthor is a higher order function (HOF), 
// authorsName is a callback function
// const greetAuthor = (authorsName) => {
//     authorsName("Olu");
// };
// greetAuthor(greet);

// lesson 7
// Custom event

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// Event listener 
// emitter.on("order-pizza", (size, topping, paste) => {
//     console.log(`order recieved! Baking ${size} sweet pizza with ${topping} & ${paste}`);
// });

// Addition Event listener
// emitter.on("order-pizza", (size) => {
    // Conditional Loop that log statement based on requirement
    // From the Event Emittter
//     if(size === "large") {
//         console.log("Serving pizza with complimentary drinks");
//     }
//     else {
//         console.log("Serving just the pizza without complimentary drinks")
//     };
// });

// Event Emitter
// emitter.emit("order-pizza", "large", "mushroom", "ketchup");


// Lesson 8
// const PizzaShop = require("./pizza-shop.js");
// const DrinkMachine = require("./drink-machine.js");
// const SouvenirPackage = require("./souvenir-package.js");

// Making an object of pizzaShop by creating a new instance;
// const pizzaShop = new PizzaShop();
// const drinkMachine =  new DrinkMachine();
// const souvenirPackage = new SouvenirPackage();


// // Adding Event listener to our Event Emitter in pizza-shop.js 
// pizzaShop.on("order", (size, topping) => {
//     if(size === undefined || topping === undefined) {
//         console.log("Yet to recieve any order")
//     }
//     else {
//         console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
//     }
//     drinkMachine.serveDrink(size);
//     souvenirPackage.giveSouvenir(topping);
// });



// Scenario 1: no order

// less than 1 order was gotten
// pizzaShop.getOrder();

// if order number is 0; order number will display message(No order has been made!)
// if order number is less than 0; order number will display message(An order of: -orderNumber has been cancled) 
// pizzaShop.displayOrderNumber();

// This display message(Yet to recieve any order) 
// because less than 1 order has been made as seen in pizzashop.getOrder();
// So size & topping which hase a value of = "large" & "ketchup" respectively
// Will now be undefine
// pizzaShop.getOrder("large", "ketchup");


// Scenario 2

// An order of aleast 1 (20 orders) has now been made here with
// setorderNumber()
// pizzaShop.setOrderNumber(3);

// This check the order number;
// if order is now atleast 1; current order will be increased by 1
// pizzaShop.getOrder();

// if the order is now atleast 1;
// message(Current order number: pizzaShop.setOrderNumber( + 1));
// pizzaShop.displayOrderNumber();

// This displays; 
// message(Order recieved! Baking ${size} pizza with ${topping}) 
// because atleast 1 order has been made 
// as seen in pizzashop.setOrderNumber();
// So size & topping which has a value of = "large" & "ketchup" respectively
// Will now be defined

// pizzaShop.getOrder("large", "ketchup");

// Lesson 9
// Streams and Buffer
// Creating a new instance
// Default encoding value is  utf-8 (character Encoding value in 8bits)
// const buffer = new Buffer.from("Olu",);

// Because buffer as limited memory.. "AMARA" overwrites "Olu";
// last two letters "RA" were ignored from "AMARA" also
// This is because "olu" is a 3 letter character word, thus
// Only 3 character space are reserved 
// buffer.write("AMARA");
// console.log(buffer.toString().toUpperCase());
// console.log(buffer.toJSON());



// Lesson 10
// FS module
// Fs module use internal buffer
// const fs = require("node:fs");

// console.log("First");

// Added second argument UTF-8
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);


// console.log("Second");

// Reading file asynchronously
// fs.readFile("./file.txt", "utf-8", (error, data) => {
// if(error) {
//     console.log(error);
// }
// else {
//     console.log(data);    
// };
// });

// console.log("Third");


// fs.writeFileSync("./greet.txt", "Hello-World!");


// This overrides the synchronous fs.writeFileSync
// fs.writeFile("./greet.txt", " Hello Africa!", {flag: "a"}, (error) => {
//     if(error) {
//         console.log(error);
//     }
//     else {
//         console.log("File written");
//     };
// }); 


// const { error } = require("node:console");
// const fs = require("node:fs/promises");

// console.log("First");

// fs.readFile("file.txt", "utf-8")
//     .then (data => console.log(data))
//     .catch (error => console.log(error));

// console.log("Second");

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8")
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Sorry", error)
//     };
// };
// readFile();

// async function writeFile() {
//     try {
//         const data = await fs.writeFile(
//             "./async-awaite.txt", 
//             "This is async awaite",
//             )
//         const data1 = await fs.writeFile(
//             "./file.txt", 
//             "Good Day Olumide",
//             )
//         const data2 = await fs.readFile("async-awaite.txt", "utf-8");
//         console.log(data2);
//     }
//     catch (error) {
//         console.log(error);
//     };
// };
// writeFile();

// Stream fs module method
// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzib = zlib.createGzip();

// const readableStream = fs.createReadStream("./file1.txt", {
//     encoding: "utf-8",
//     highWaterMark: 5,
// });

// readableStream.pipe(gzib).pipe(fs.WriteStream("./file2.txt.gz"))

// const writeableStream = fs.createWriteStream("./file2.txt");

// Adding Event listener
// readableStream.on("data", (chunk) => {
//     console.log(chunk.trim());
//     writeableStream.write(chunk);
// });

// using pipes
// readableStream.pipe(writeableStream);


// Lesson 11
// http web server
const { error } = require("node:console");
const http = require("node:http");
const port = 3000;

// Creating the server
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Thank you for visiting");
});

// listening to port with call back for async
server.listen(port, (error) => {
    if(error) {
        console.log("Runtime Error", error);
    }
    else {
        console.log(`Server is running on port: ${port}`)
    }
});
