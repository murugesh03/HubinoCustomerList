const express = require("express");
const router = express.Router();
const userSchema = require("../models/schema");

router.post("/", async (req, res) => {
  const users = new userSchema({
    username: req.body.username,
    id: req.body.id,
    phone: req.body.phone,
    email: req.body.email,
  });
  console.log(req.body);
  try {
    const newusers = await users.save();
    res.status(201).json(`posted succesfully ${newusers}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await userSchema.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
