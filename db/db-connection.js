const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const createDBConnection = () => {
  const connectionString = process.env.DB_URL;
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
