const Students = require("../modals/Students");

// Get all
async function getAll(req, res) {
  const students = await Students.find();
  res.send(students);
}

// Get one
async function get(req, res) {
  const students = await Students.findOne({ name: req.params.name });
  res.send(students);
}

module.exports = { get, getAll };
