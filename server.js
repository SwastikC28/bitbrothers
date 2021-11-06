const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

//Initializing
dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.json());
connectDB();

//Requiring Routers
const user = require("./routes/user");

//Mounting Routers
app.use("/api/user", user);

let PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log(`Server Started on PORT ${PORT}`.yellow);
});
