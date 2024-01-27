/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function declaration for the add function
function add(number1, number2) {
    // Return the sum of the parameters//
    return number1 + number2;
}

// Function declaration for the addNumbers function//
function addNumbers() {
    // Get the values of the HTML form controls and convert them to numbers//
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Call the add function with the obtained values and assign the result to the sum element
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a "click" event listener to the HTML button with an ID of addNumbers//
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
//Function declaration for the subtract function//
function subtract(number1, number2) {
    //Returns difference of two parameters//
    return number1 - number2;
}
//Function declaration for subtractNumbers function//
function subtractNumbers() {
    //Get the values of the HTML form controls and convert them to numbers//
    let subtract1 = parseFloat(document.querySelector('#subtract1').value);
    let subtract2 = parseFloat(document.querySelector('#subtract2').value);

    //Call the subtraction function//
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
//Add a 'click' event listener to the HTML button with an ID of subtractNumbers//
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (a, b) => a * b;

//Arrow function for multipication//
const multiplyNumbers = () => {
    //Get values from input fields//
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);

    //Execute Multiplication//
    let product = multiply(factor1, factor2);

    //Display result//
    document.getElementById('product').value = product;
}
//Attach click event to the multiplyNumbers button
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (a, b) => a / b;

// Arrow function for division//
const divideNumbers = () => {
    // Get values from input fields//
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);

    // Execute Division//
    let quotient = divide(dividend, divisor);

    // Display result//
    document.getElementById('quotient').value = quotient;
}

// Attach click event to the divideNumbers button//
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    let total = 0;
    // Get the subtotal value from the input field//
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    // Check if the membership checkbox is checked//
    if (document.getElementById('member').checked) {
        //apply discount
        subtotal = subtotal * 0.8; //20% discount//
    } 
        
    // Output the total to the total span with two decimals using a template string//
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;

}

//Add event listener on click//
document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
// Declare and instantiate an array variable to hold the numbers 1 through 13.//
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);