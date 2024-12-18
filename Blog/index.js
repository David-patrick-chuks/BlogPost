const express = require("express");
const cors = require("cors");
const mongoDbConnect = require('./config/database');
const userRoute = require("./routes/userRoute");
const postRoute = require("./routes/postRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4500;
app.use(express.json());
mongoDbConnect()

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    // credentials: true, // enable cookies in requests
    // optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

