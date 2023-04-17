const express = require('express');
const cors = require('cors');
const router = require('./api');
const notFoundHandler = require('./utils/error/notFoundHandler');
const globalErrorHandler = require('./utils/error/globalErrorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1', router);
app.all('*', notFoundHandler);
app.use(globalErrorHandler);

app.get('/', async (req, res) => {
    res.send('Hello! Pro Peak Server is Working Successfully!');
});

module.exports = app;
