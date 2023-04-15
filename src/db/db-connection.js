const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const config = require("../config");

dotenv.config();

const createDBConnection = () => {
  const connectionString = config.DATABASE_URL;
  mongoose.set("strictQuery", true);
  mongoose
    .connect(connectionString, {})
    .then(() => {
      console.log("Database Connected Successfully".green.bold);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDBConnection;
