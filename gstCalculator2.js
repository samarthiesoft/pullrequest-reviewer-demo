// gstCalculator.js

// Get the price and goods type from the command-line arguments
const price = parseFloat(process.argv[2]);
const goodsType = process.argv[3]?.toLowerCase();

if (isNaN(price) || !goodsType) {
    console.error(
        "Please provide a valid price and goods type as command-line arguments."
    );
    console.error("Usage: node gstCalculator.js <price> <goodsType>");
    process.exit(1);
}

// Function to determine GST percentage based on goods type
function getGSTRate(goodsType) {
    switch (goodsType) {
        case "essential":
            return 0.05; // 5%
        case "luxury":
            return 0.18; // 18%
        case "services":
            return 0.12; // 12%
        case "other":
            return 0.28; // 28%
        default:
            console.error(
                "Unknown goods type. Please use one of: essential, luxury, services, other."
            );
            process.exit(1);
    }
}

// Function to calculate GST and total price
function calculateGST(price, gstRate) {
    const gstAmount = price * gstRate;
    const totalPrice = price + gstAmount;
    return { gstAmount, totalPrice };
}

// Get the GST rate for the provided goods type
const gstRate = getGSTRate(goodsType);

// Calculate GST and total price
const { gstAmount, totalPrice } = calculateGST(price, gstRate);

// Display the result
console.log(`For a price of ${price} and goods type "${goodsType}":`);
console.log(`GST Amount: ${gstAmount}`);
console.log(`Total Price (including GST): ${totalPrice}`);
