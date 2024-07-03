export function calculateInvestmentReturn(principal, rate, time, timesCompounded) {
    return principal * Math.pow((1 + rate / timesCompounded), (timesCompounded * time));
}
