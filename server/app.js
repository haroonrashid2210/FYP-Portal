const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./router");
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", router);

mongoose
  .connect("mongodb://localhost:127.0.0.1:27017/fypportal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("Server has started! > 5000");
    });
  });
