const express = require("express");
const cors = require("cors");
const connectDB = require("./MongoDB");
const skillSwapRoutes = require("./routes/skillSwapRoutes"); // Import routes

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend communication

// Routes
app.use("/api/skillswap", skillSwapRoutes); 

app.get("/", (req, res) => {
    res.send("🚀 SkillSwap Backend Connected Successfully!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
