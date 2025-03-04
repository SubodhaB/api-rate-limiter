const express = require("express");
const app = express();

// Default route
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Ensure Railway assigns a valid PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {  
    console.log(`Server is running on port ${PORT}`);
});
