require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const Redis = require("ioredis");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Redis
const redisClient = new Redis(process.env.REDIS_URL);

// Configure Rate Limiting
const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW * 1000, // Convert seconds to milliseconds
  max: process.env.RATE_LIMIT_MAX,
  handler: (req, res) => {
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
});

// Apply rate limiting to all routes
app.use(limiter);

app.get("/", (req, res) => {
  res.send("Welcome to the API Rate Limiter Service!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
