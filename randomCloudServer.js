// randomCloudServer.js
const express = require("express");
const app = express();

// Function to generate random ASCII cloud shapes
function getRandomCloud() {
    const clouds = [
        `
        ☁️   ☁️   ☁️
      ☁️      ☁️
    ☁️   ☁️    ☁️   ☁️
    `,
        `
        ☁️ ☁️     ☁️
    ☁️         ☁️   ☁️
      ☁️    ☁️
    `,
        `
    ☁️   ☁️   ☁️   ☁️
       ☁️      ☁️   ☁️
          ☁️    ☁️
    `,
        `
    ☁️      ☁️       ☁️
         ☁️     ☁️
    ☁️          ☁️
    `,
    ];

    // Select a random cloud from the array
    const randomCloud = clouds[Math.floor(Math.random() * clouds.length)];
    return randomCloud;
}

// Route to get a random cloud
app.get("/random-cloud", (req, res) => {
    const randomCloud = getRandomCloud();
    res.send(`<pre>${randomCloud}</pre>`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
