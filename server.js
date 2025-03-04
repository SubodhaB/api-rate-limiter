const express = require("express");
const app = express();

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Use Railway’s assigned PORT or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
