const express = require("express");
const Skill = require("../models/Skill"); // Import Skill model

const router = express.Router();

// @route   POST /api/skillswap
// @desc    Add skill swap entry
router.post("/", async (req, res) => {
    try {
        const { name, skill, description } = req.body;
        const newSkill = new Skill({ name, skill, description });
       
       console.log(name , skill, description);
        await newSkill.save();
        res.status(201).json({ message: "Skill added successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// @route   GET /api/skillswap
// @desc    Fetch all skill swap entries
router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch skills" });
    }
});

module.exports = router;
