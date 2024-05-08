require('dotenv').config();
const express = require('express');

const connectDB = require('./db/db');

const app = express();
const port = process.env.DEV_SERVER_PORT;
connectDB();

app.use(express.static('../public'));



app.listen(port, () => console.log('Express server listening on port', port));