// randomColorServer.js
const express = require("express");
const app = express();

// Function to generate a random hex color
function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`; // Ensures the hex has 6 digits
}

// Route to get a random color
app.get("/random-color", (req, res) => {
    const randomColor = getRandomHexColor();
    res.json({ color: randomColor });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
