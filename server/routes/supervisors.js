const Supervisors = require("../modals/Supervisors");

// Get all
async function getAll(req, res) {
  const supervisors = await Supervisors.find();
  res.send(supervisors);
}

// Get one
async function get(req, res) {
  const supervisors = await Supervisors.findOne({ name: req.params.name });
  res.send(supervisors);
}

module.exports = { get, getAll };
