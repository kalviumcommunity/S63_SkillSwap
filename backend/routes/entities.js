const express = require("express");
const router = express.Router();
const Entity = require("../models/Entity"); // Ensure you have a model

// GET all entities
router.get("/", async (req, res) => {
    try {
        const entities = await Entity.find();
        res.json(entities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new entity
router.post("/", async (req, res) => {
    const { name, skill } = req.body;
    if (!name || !skill) return res.status(400).json({ message: "All fields required" });

    try {
        const newEntity = new Entity({ name, skill });
        await newEntity.save();
        res.status(201).json(newEntity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🔄 Update an entity
router.put("/:id", async (req, res) => {
    try {
      const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedEntity);
    } catch (err) {
      res.status(500).json({ message: "Update failed: " + err.message });
    }
  });
  
  // 🗑️ Delete an entity
  router.delete("/:id", async (req, res) => {
    try {
      await Entity.findByIdAndDelete(req.params.id);
      res.json({ message: "Entity deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Delete failed: " + err.message });
    }
  });
  

module.exports = router;
