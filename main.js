import { calculateInterest } from './interest.js';
import { calculateLoanPayment } from './loan.js';
import { calculateInvestmentReturn } from './investment.js';

function validateInput(inputs) {
    for (let input of inputs) {
        if (isNaN(input) || input === '') {
            return false;
        }
    }
    return true;
}

window.calculateInterest = function() {
    const principal = parseFloat(document.getElementById('interestPrincipal').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('interestTime').value);

    if (!validateInput([principal, rate, time])) {
        document.getElementById('interestResult').innerText = 'Please enter valid numbers.';
        return;
    }

    const result = calculateInterest(principal, rate, time);
    document.getElementById('interestResult').innerText = `Interest: ${result.toFixed(2)}`;
};

window.calculateLoanPayment = function() {
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value);
    const numberOfPayments = parseInt(document.getElementById('loanNumberOfPayments').value, 10);

    if (!validateInput([principal, rate, numberOfPayments])) {
        document.getElementById('loanResult').innerText = 'Please enter valid numbers.';
        return;
    }

    const result = calculateLoanPayment(principal, rate, numberOfPayments);
    document.getElementById('loanResult').innerText = `Monthly Payment: ${result.toFixed(2)}`;
};

window.calculateInvestmentReturn = function() {
    const principal = parseFloat(document.getElementById('investmentPrincipal').value);
    const rate = parseFloat(document.getElementById('investmentRate').value);
    const time = parseFloat(document.getElementById('investmentTime').value);
    const timesCompounded = parseInt(document.getElementById('investmentTimesCompounded').value, 10);

    if (!validateInput([principal, rate, time, timesCompounded])) {
        document.getElementById('investmentResult').innerText = 'Please enter valid numbers.';
        return;
    }

    const result = calculateInvestmentReturn(principal, rate, time, timesCompounded);
    document.getElementById('investmentResult').innerText = `Future Value: ${result.toFixed(2)}`;
};
