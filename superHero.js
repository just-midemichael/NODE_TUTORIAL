class SuperHeros {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }
}

// Exporting an instance the module to inde dot js file
// module.exports = new SuperHeros("Batman");

// Exporting the class "SuperHeros" itself
module.exports = SuperHeros;