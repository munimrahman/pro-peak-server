const app = require("./app");
const dotenv = require("dotenv");
const colors = require("colors");
const createDBConnection = require("./db/db-connection");
const config = require("./config");

dotenv.config();

const PORT = config.PORT;

createDBConnection();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.yellow.bold);
});
