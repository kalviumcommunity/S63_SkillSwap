const mongoose = require("mongoose");

const entitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    skill: { type: String, required: true },
});

module.exports = mongoose.model("Entity", entitySchema);
