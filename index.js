require('dotenv').config()
const express = require('express');
const connectDB = require('./src/config/db');
const app = express();
const userRouter = require('./src/routes/User');
const taskRouter = require('./src/routes/Task');
const port = process.env.PORT;

// Connect to Databse
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})