'use strict';
console.log('up and running');

// 1. Create a javascript object that represents a food store product.
// The item should contain a name, description, bulk price, and consumer price. 
// console.log the result
const genericFoodStoreObject = {
    name: 'Generic Food Store Product',
    description: 'The most generic food store product you will ever find!',
    bulkPrice: 75,
    consumerPrice: 5
}
console.log(genericFoodStoreObject);

// 2. Create a single method for printing the above object's name and description.
genericFoodStoreObject.printNameAndDescription = function(){
    console.log(
    `Name: ${genericFoodStoreObject.name}
Description: ${genericFoodStoreObject.description}`)
}
genericFoodStoreObject.printNameAndDescription();

// 3. Create another method on the object from step 1 that returns a product's price with a discount applied.
// Supposing the product's price is 5, calling the discount method with a discount of 15% (0.15) will return 4.25.
genericFoodStoreObject.returnPriceWithDiscount = function(discount){
    //passes in a discount, we need a number, we'll turn it into a float with *.01
    discountedConsumerPrice = this.consumerPrice * (discount * .01);
    discountedBulkPrice = this.bulkPrice * (discount * .01);
    console.log(`Discounted Consumer Price: ${discountedConsumerPrice}
Discounted Bulk Price: ${discountedBulkPrice}`);
    return (discountedConsumerPrice, discountedBulkPrice);
}

// 4. Use a for-in loop to print out each property of the method (requires research from you :) )
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }
for(const prop in genericFoodStoreObject){
    console.log(`${prop}: ${genericFoodStoreObject[prop]}`)
}