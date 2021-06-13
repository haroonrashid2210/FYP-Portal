const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  regNo: {
    batch: String,
    group: String,
    rollNo: String,
  },
  available: Boolean,
});

module.exports = mongoose.model("Student", schema);
