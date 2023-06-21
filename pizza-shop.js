const EventEmitter = require("node:events");


class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = -1;
    };
    getOrder(size, topping) {
        if(this.orderNumber <= 0) {
            return false; 
        }
        else {
            this.orderNumber++;
        }
        // Adding Event Emitter
        this.emit("order", size, topping);
    };
    displayOrderNumber() {
        if(this.orderNumber === 0) {
            console.log("No order has been made!");
        }
        else if(this.orderNumber < 0) {
            console.log(`An order of: ${this.orderNumber} have been cancled`)
        }
        else {
            console.log(`Current order number: ${this.orderNumber}`);
        };
    }
    setOrderNumber(orderNumber) {
        this.orderNumber = orderNumber;
    };
}

module.exports = PizzaShop;