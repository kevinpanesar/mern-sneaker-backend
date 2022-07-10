const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/postRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) return console.error(err);
    console.log("MongoDB connection established");
});

