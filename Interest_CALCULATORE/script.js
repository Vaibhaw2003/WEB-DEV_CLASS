// script.js
// Main script that uses calculator and display modules

import { calculateInterest } from './calculator.js';
import { displayResult } from './display.js';

const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const interest = calculateInterest(principal, rate, time);
    displayResult(interest, principal, rate, time);
});
