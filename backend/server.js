
const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDb');
const { json } = require('express');
// const Task = require('./model/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("/api/tasks",taskRoutes);
// routes
app.get("/", (req, res) => {
    res.send("Hello world");
})

const startServer = async () => {
    try {
        await connectDB();
        // server
        app.listen(PORT, () => {
            console.log(`listening on port : ${PORT} `);
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();