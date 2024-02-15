const express = require('express');
const userRoutes = require('./src/api/users');
const questionRoutes = require('./src/api/questions');
const errorHandler = require('./src/middleware/errorHandler');
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);

app.use(errorHandler);

module.exports = app;