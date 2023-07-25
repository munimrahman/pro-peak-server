const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./api');
const notFoundHandler = require('./utils/error/notFoundHandler');
const globalErrorHandler = require('./utils/error/globalErrorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.get('/', async (req, res) => {
    res.send('Hello! Pro Peak Server is Running Successfully!');
});

app.use('/api/v1', router);
app.all('*', notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
