const app = require("./app");
const dotenv = require("dotenv");
const colors = require("colors");
const createDBConnection = require("./db/db-connection");

dotenv.config();

const PORT = process.env.PORT || 5005;

createDBConnection();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.yellow.bold);
});
