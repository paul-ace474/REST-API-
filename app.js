const express = require("express");
const connect = require("./config/config");
const router = require("./router/user.route.js");
const cors = require("cors")
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors())
app.use("/api", router);  

connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
