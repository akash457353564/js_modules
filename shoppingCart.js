
//Exporting module

console.log('Exporting module')

export const shippingCost = 10
const cart = []

export const add_to_cart = function(product, quantity){
    console.log(`${quantity} ${product} added to cart`)
}

const total_cost = 30;
const total_quantity = 2

export {total_cost, total_quantity}