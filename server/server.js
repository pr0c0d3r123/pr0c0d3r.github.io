// Imports

const express = require("express"); // Express JS is javascript framework for creating APIs
const BodyParser = require("body-parser");
const mysql = require("mysql"); // MySQL is for connection with MySQL database
const cors = require("cors"); // Cors for accessing external links. Is used with Express JS
const path = require("path"); // Path for manipulating filesystem

// Database connections

const usersdb = mysql.createConnection({
  // Creating connection with user database
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

const productsdb = mysql.createConnection({
  // Creating connection with products database
  host: "localhost",
  user: "root",
  password: "",
  database: "products",
});

const app = express(); // Creating Express app

app.use(cors()); // Putting cors inside webapp
app.use(BodyParser.json()); // Putting BodyParser.json() function because of POST requests (we are sending data to server and we need data to be in JSON format)
app.use(BodyParser.urlencoded({ extended: true })); // Putting BodyParser.urlencoded() function for parsing incoming JSON objects

// Server running on this port

const port = 5000;

// Login

usersdb.connect((err) => {
  // Connecting to database users
  if (err) throw err;
  console.log("Connected to users database!");
});

// TODO Post user data from signup form using function "postUserData" from API class

app.post("/api/users", (req, res) => {});

// Products

productsdb.connect((err) => {
  // Connecting to database products
  if (err) throw err;
  console.log("Connected to products database!");
});

app.get("/api/products", (req, res) => {
  // Making API for delivering data into /api/products path
  const query = "SELECT * FROM product_info";
  productsdb.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Error on wrong URL

app.get("/api/:universalURL", (req, res) => {
  res.send("Error 404. Not Found");
});

// Running server

app.listen(port, () => {
  console.log("Listening...");
});
