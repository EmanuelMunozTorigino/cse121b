/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */


function add (number1, number2) {
    return number1 + number2;
};

function addNumbers() {
    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(number1, number2);
};

document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
};

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract (subtract1, subtract2);
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) =>  factor1 * factor2;
 
const multiplyNumbers = () => {

    let factor1 = Number(document.querySelector("#factor1").value);

    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply (factor1, factor2);
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) =>  dividend / divisor;
 
const divideNumbers = () => {

    let dividend = Number(document.querySelector("#dividend").value);

    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide (dividend, divisor);

};

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);




/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click", () => {
    let subtotal = Number(document.querySelector("#subtotal").value)
    if (subtotal < 0) {
        alert("Sorry, you need to enter a positive Number. Negative numbers is not allowing")
    }
    else {
        if (document.querySelector("#member").checked) {
            let discount = subtotal * .20;
            let total = (subtotal - discount);
            document.querySelector("#total").innerHTML = `${total.toFixed(2)}`;
        }
    
        else {
            document.querySelector("#total").innerHTML = `${subtotal.toFixed(2)}`;
        }
    }
    
})


/* ARRAY METHODS - Functional Programming */

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */

const oddsNumbers = numbersArray.filter((number) => number % 2 === 1 );

document.querySelector("#odds").innerHTML = oddsNumbers;

/* Output Evens Only Array */


document.querySelector("#evens").innerHTML = numbersArray.filter((number) => number % 2 === 0 );
/* Output Sum of Org. Array */


const sumArray = numbersArray.reduce(
  (sumArray, number) => sumArray + number
);


document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */


const multipliedArray = numbersArray.map(number => number * 2);

document.querySelector("#multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

const sumMultipliedArray = multipliedArray.reduce((sumMultipliedArray, number) => sumMultipliedArray + number
);

document.querySelector("#sumOfMultiplied").innerHTML = sumMultipliedArray;