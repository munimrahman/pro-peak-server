const express = require("express");
const cors = require("cors");
const router = require("./api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", router);

app.get("/", async (req, res) => {
  res.send("Hello! Pro Peak Server is Working Successfully!");
});

module.exports = app;
