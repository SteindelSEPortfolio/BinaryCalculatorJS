const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const res = document.getElementById('res');

let operand1 = "";
let operator = "";
let operand2 = "";
let result = null;

/**
 * Updates the div 'res' with either the result to an equation or the 
 * updated equation itself.
 * @param {boolean} solve - true to show result, false to show equation
 */
function updateRes(solve) {
    if (solve) {
        // Do nothing if asked to solve without all criteria
        if (operand1 !== "" && operand2 != "" && operator != "") {
            result = Number(eval(`${parseInt(operand1, 2)} ${operator} ${parseInt(operand2, 2)}`));
            res.textContent = result.toString(2);
    
            operand1 = res.textContent;
            operator = "";
            operand2 = "";
            result = null;
        }
    } else {
        res.textContent = `${operand1}${operator}${operand2}`
    }
}

btn0.addEventListener('click', function() {
    // If we haven't picked an operator, we're working
    // on the first operand, otherwise the second.
    if (operator === "") {
        operand1 += "0";
    } else {
        operand2 += "0";
    }
    updateRes(false);
});

btn1.addEventListener('click', function() {
    // If we haven't picked an operator, we're working
    // on the first operand, otherwise the second.
    if (operator === "") {
        operand1 += "1";
    } else {
        operand2 += "1";
    }
    updateRes(false);
});

// Clear
btnClr.addEventListener('click', function() {
    operand1 = "";
    operator = "";
    operand2 = "";
    result = null;
    updateRes(false);
});

// Solve Equation (=)
btnEql.addEventListener('click', function() {
    updateRes(true);
});

btnSum.addEventListener('click', function() {
    operator = "+";
    updateRes(false);
});

btnSub.addEventListener('click', function() {
    operator = "-";
    updateRes(false);
});

btnMul.addEventListener('click', function() {
    operator = "*";
    updateRes(false);
});

btnDiv.addEventListener('click', function() {
    operator = "/";
    updateRes(false);
});