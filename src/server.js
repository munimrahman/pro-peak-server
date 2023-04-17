const dotenv = require('dotenv');
const colors = require('colors');
const app = require('./app');
const createDBConnection = require('./db/db-connection');
const config = require('./config');

dotenv.config();

const { PORT } = config;

createDBConnection();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`.yellow.bold);
});
