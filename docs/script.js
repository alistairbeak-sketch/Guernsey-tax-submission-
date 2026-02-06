// tax.js script for Guernsey Tax Submission Form

// Function to calculate tax
function calculateTax(income) {
    // Assuming a simple tax rate of 20%
    const taxRate = 0.20;
    return income * taxRate;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    if (isNaN(income)) {
        alert('Please enter a valid income.');
        return;
    }
    const tax = calculateTax(income);
    document.getElementById('taxOutput').innerText = `Calculated Tax: £${tax.toFixed(2)}`;
}

// Event listener for the form submission
document.getElementById('taxForm').addEventListener('submit', handleSubmit);