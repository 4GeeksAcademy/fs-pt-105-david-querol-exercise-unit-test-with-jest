
// import functions from app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound, oneEuroIs } = require('../app.js');

// begin first test
test('14 + 9 es igual a 23', () => {
    
    const total = sum(14, 9);
    
    expect(total).toBe(23);

});

// begin second test money conversion
describe("Test funciones conversion monedas", ()=> { 

// test Euro to Dollar
  test("un euro son 1.07 dolares", () => {

      const expected = fromEuroToDollar(3.5);
      const dollar = 3.5 * oneEuroIs.USD;

      expect(expected).toBe(dollar);

  });
 
// test Dollar to Yen
  test("un dolar son 156.5 yenes", () => {

      const expected = fromDollarToYen(3.5);
      const yen = 3.5 / oneEuroIs.JPY * oneEuroIs.USD;

      expect(expected).toBe(yen);

  });

// test Yen to Pound
  test("un yen son 0.006 libras", () => {

      const expected = fromYenToPound(3.5);
      const pound = 3.5 / oneEuroIs.JPY * oneEuroIs.GBP;
  
      expect(expected).toBe(pound);

  });
});
