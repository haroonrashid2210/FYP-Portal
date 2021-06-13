const express = require("express");
const router = express.Router();

// Students
const Students = require("./routes/students");
router.get("/students/getall", Students.getAll);
router.get("/students/get/:name", Students.get);

// Supervisors
const Supervisors = require("./routes/supervisors");
router.get("/Supervisors/getall", Supervisors.getAll);
router.get("/Supervisors/get/:name", Supervisors.get);

// Export
module.exports = router;
