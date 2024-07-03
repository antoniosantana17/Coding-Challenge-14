import { calculateInterest } from './interest.js';
import { calculateLoanPayment } from './loan.js';
import { calculateInvestmentReturn } from './investment.js';

window.calculateInterest = function() {
    const principal = parseFloat(document.getElementById('interestPrincipal').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('interestTime').value);
    const result = calculateInterest(principal, rate, time);
    document.getElementById('interestResult').innerText = `Interest: ${result.toFixed(2)}`;
};

window.calculateLoanPayment = function() {
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value);
    const numberOfPayments = parseInt(document.getElementById('loanNumberOfPayments').value, 10);
    const result = calculateLoanPayment(principal, rate, numberOfPayments);
    document.getElementById('loanResult').innerText = `Monthly Payment: ${result.toFixed(2)}`;
};

window.calculateInvestmentReturn = function() {
    const principal = parseFloat(document.getElementById('investmentPrincipal').value);
    const rate = parseFloat(document.getElementById('investmentRate').value);
    const time = parseFloat(document.getElementById('investmentTime').value);
    const timesCompounded = parseInt(document.getElementById('investmentTimesCompounded').value, 10);
    const result = calculateInvestmentReturn(principal, rate, time, timesCompounded);
    document.getElementById('investmentResult').innerText = `Future Value: ${result.toFixed(2)}`;
};
