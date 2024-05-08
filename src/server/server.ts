// Global dependencies
import dotenv from 'dotenv';
import express from 'express';

// Project dependencies
import connectDB from './db/db';
import errorHandler from './middleware/errorController';

// Initialization
dotenv.config();
const app = express();
const port = process.env.DEV_SERVER_PORT;
connectDB();

// Middlewares
app.use(express.static('../public'));

// Routes
app.use((_req, res) => {
  res.status(404).send('Page not found.');
});

// Error handling
app.use(errorHandler);

// Run server
app.listen(port, () => console.log(`Express server listening on port ${port}.`));