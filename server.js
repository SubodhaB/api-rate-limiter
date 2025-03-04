const express = require("express");
const app = express();

// Trust Railway's proxy to handle HTTPS correctl
app.set("trust proxy", true);

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Log every request for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${req.ip}`);
    next();
});

// Use Railway’s assigned PORT or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
