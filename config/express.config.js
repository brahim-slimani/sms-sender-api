//EXPRESS MIDDLEWARE CONFIG
const express = require("express");
const config = express();

//HTTP REQUEST MIDDLEWARE LOGGER
const morgan = require("morgan");

//DATA BINDING INTO JSON FROM HTTP REQUEST
const bodyParser = require("body-parser");

//ENABLE .env CONFIG
const dotenv = require("dotenv");
dotenv.config();

//INCLUDE API ROUTES
const routes = require("../routes/router");

config.use(morgan("combined"));
config.use(bodyParser.json());
config.use("/", routes);


//EXPORT CONFIG
module.exports = config;


