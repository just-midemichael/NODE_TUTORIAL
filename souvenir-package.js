class SouvenirPackage {
    giveSouvenir(topping) {
        if(topping !== undefined) {
            console.log(`Giving Customer a free ${topping} souvenir`);
        };
    };
};

// Export the class components;
module.exports = SouvenirPackage;