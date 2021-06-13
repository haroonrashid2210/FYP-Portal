const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  available: Boolean,
});

module.exports = mongoose.model("Supervisor", schema);
