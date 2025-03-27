require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const verify = require("./middleware/verifyjwt");
const credentials = require("./middleware/credentials");
const connectDB = require("./config/dbConn");

connectDB();

app.use(credentials);

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());


// public routes

app.use("/register", require("./routes/register"));
app.use("/signin", require("./routes/signin"));
app.use("/refresh", require("./routes/refresh"));
app.use("/signout", require("./routes/logout"));
app.use("/appointments", require("./routes/api/appointmentHandler"));

// protected routes
app.use(verify);

app.use("/patients", require("./routes/api/patientsHandler"));


mongoose.connection.once("open",()=>{
    console.log("connected to MongoDB")
    app.listen(5500, ()=> console.log("listening on port 5500"))
})