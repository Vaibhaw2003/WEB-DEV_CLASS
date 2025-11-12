// display.js
// Module to display the result

export const displayResult = (interest, principal, rate, time) => {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `For Principal ₹${principal}, Rate ${rate}% per annum, and Time ${time} years, the Simple Interest is ₹${interest.toFixed(2)}.`;
};
