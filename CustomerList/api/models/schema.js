const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("userdetails", UserSchema);
