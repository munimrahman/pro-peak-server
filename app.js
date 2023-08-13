/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const router = require('./api');
const notFoundHandler = require('./utils/error/notFoundHandler');
const globalErrorHandler = require('./utils/error/globalErrorHandler');
const cloudinary = require('./config/cloudinaryConfig');

const app = express();

app.use(cors());
app.use(express.json());
app.use('*', cloudinary.cloudinaryConfig);

app.use(
    morgan((tokens, req, res) =>
        [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.date('clf')
        ].join(' '))
);

app.get('/', async (req, res) => {
    res.send('Hello! Pro Peak Server is Running Successfully!');
});

app.use('/api/v1', (req, res, next) => {
    // let i = 0;
    // while (i < 99999) {
    //     console.log(i);
    //     i += 1;
    // }
    next();
}, router);

app.all('*', notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
