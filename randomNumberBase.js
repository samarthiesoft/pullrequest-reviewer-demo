// randomNumberServer.js
const express = require("express");
const app = express();

// Function to generate a random number and base
function getRandomNumberAndBase() {
    const randomNumber = Math.floor(Math.random() * 1000); // Random number between 0 and 999
    const randomBase = Math.floor(Math.random() * (16 - 2 + 1)) + 2; // Random base between 2 and 16
    const numberInRandomBase = randomNumber.toString(randomBase); // Convert the number to the random base

    return {
        number: randomNumber,
        base: randomBase,
        representation: numberInRandomBase,
    };
}

// Route to get a random number and its base
app.get("/random-number", (req, res) => {
    const { number, base, representation } = getRandomNumberAndBase();
    res.json({
        original_number: number,
        base: base,
        representation_in_base: representation,
    });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
