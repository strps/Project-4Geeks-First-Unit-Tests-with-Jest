// import the function sum from the app.js file
const  app  = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    const {sum} = app
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One dollar should be 106.58 yens", function(){
    //import the function from app.js
    const  {fromDollarToYen}  = app

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(4)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (4 / 1.2)*127.9; 
    
    // this is the comparison for the unit test
    expect(fromDollarToYen(4)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const  {fromEuroToDollar}  = app

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One Yen should be 1.206 pounds", function(){
    //import the function from app.js
    const  {fromYenToPound}  = app

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(7)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (7/127.9) * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(7)).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})