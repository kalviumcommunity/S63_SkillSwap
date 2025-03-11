const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skill: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("Skill", SkillSchema);
