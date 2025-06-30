const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const { name, location, quantity, product } = req.body;
    console.log("📦 Incoming order:", req.body); // MUST appear if connected

    if (!name || !location || !quantity || !product) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new Order({ name, location, quantity, product });
    await newOrder.save();

    console.log("✅ Order saved to MongoDB");
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("❌ Failed to save order:", err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
