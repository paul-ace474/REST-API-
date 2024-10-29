const express = require("express");
const connect = require("./config/config");
const router = require("./router/user.route.js");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", router);

connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
