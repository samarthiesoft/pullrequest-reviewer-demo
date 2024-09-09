const express = require("express");
const moment = require("moment-timezone");

const app = express();
const port = 3000;

// Middleware to count requests
let requestCount = 0;
app.use((req, res, next) => {
    requestCount++;
    next();
});

// 1. Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", message: "Server is healthy" });
});

// 2. Get current time (with optional timezone)
app.get("/time", (req, res) => {
    const timezone = req.query.timezone || "UTC";

    try {
        const currentTime = moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
        res.status(200).json({ currentTime, timezone });
    } catch (error) {
        res.status(400).json({ error: "Invalid timezone" });
    }
});

// 3. Get request count
app.get("/request-count", (req, res) => {
    res.status(200).json({ requestCount });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
