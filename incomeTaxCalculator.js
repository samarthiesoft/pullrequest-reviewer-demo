// incomeTaxCalculator.js

// Get the income from the command-line argument
const income = parseFloat(process.argv[2]);

if (isNaN(income)) {
    console.error(
        "Please provide a valid income value as a command-line argument."
    );
    process.exit(1);
}

// Function to calculate tax based on the given slabs
function calculateTax(income) {
    let tax = 0;

    if (income <= 50000) {
        tax = income * 0.05;
    } else if (income <= 100000) {
        tax = 50000 * 0.05 + (income - 50000) * 0.1;
    } else if (income <= 200000) {
        tax = 50000 * 0.05 + 50000 * 0.1 + (income - 100000) * 0.2;
    } else {
        tax =
            50000 * 0.05 + 50000 * 0.1 + 100000 * 0.2 + (income - 200000) * 0.3;
    }

    return tax;
}

// Calculate the tax
const tax = calculateTax(income);

// Display the result
console.log(`For an income of ${income}, the calculated tax is ${tax}.`);
