// Funcion test sum
const sum =(a, b) => {  
    return a + b;
}

console.log(sum(7, 3));

// Object 1 Euro is JPY, USD, GBP
const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

// Function that converts dollars to yen
const fromDollarToYen = (dollar) => {
    return dollar / oneEuroIs.JPY * oneEuroIs.USD;
}

// Function that converts euros to dollars
const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

// Function that converts yen to pounds
const fromYenToPound = (yen) => {
    return yen / oneEuroIs.JPY * oneEuroIs.GBP;
}

// Exporting the functions to test
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs};