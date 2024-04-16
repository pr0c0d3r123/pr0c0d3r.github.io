//* Imports

const express = require("express"); // Express JS is javascript framework for creating APIs
const BodyParser = require("body-parser"); // BodyParser is module for parsing data into JSON objects
const mysql = require("mysql"); // MySQL is used for connection with MySQL database
const cors = require("cors"); // Cors is used for accessing external links. Is is used with Express JS
const path = require("path"); // Path is used for manipulating filesystem
const crypto = require("crypto"); // Crypto is used for hashing passwords

// * Database connections

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

app.use(cors()); // Putting cors inside app
app.use(BodyParser.json()); // Putting BodyParser.json() function because of POST requests (we are sending data to server and we need data to be in JSON format)
app.use(BodyParser.urlencoded({ extended: true })); // Putting BodyParser.urlencoded() function for parsing incoming JSON objects

const port = 5000; // Server running on this port

// * Login

usersdb.connect((err) => {
  // Connecting to database users
  if (err) throw err; // If connection was unsuccessful then server will send an error message
});

app.post("/api/users", (req, res) => {
  // Making API for posting data into /api/users path from sign up form
  const query =
    "INSERT INTO user_information (first_name, last_name, email, passwd) VALUES (?, ?, ?, ?)"; // Query for inserting data into user_information table
  const { fname, lname, email, password } = req.body; // "req.body" contains values from form on "SignUp.jsx" component and to get variables for those values, we need to destruct "req.body"
  const vals = [
    // Storing variables into "vals" array for further use
    fname,
    lname,
    email,
    crypto.createHash("md5").update(password).digest("hex"), // Password is being hashed into "MD5" hash and it's going to be stored in database as hash string
  ];

  if (!fname || !lname || !email || !password)
    // Checking if fields are empty
    res.send("Please fill all fields!"); // Sending warning message to /api/users if fields are empty

  usersdb.query(query, vals, (err, result) => {
    // Executing query into database
    if (err) throw err; // If error occurs server throws an error
    res.send(result); // If everything is successful server returns data to /api/users
  });
});

app.get("/api/users", (req, res) => {}); // * COMING SOON...

// * Products

productsdb.connect((err) => {
  // Connecting to database products
  if (err) throw err; // If connection was unsuccessful then server will send an error message
});

app.get("/api/products", (req, res) => {
  // Making API for delivering data into /api/products path
  const query = "SELECT * FROM product_info"; // Getting data from product_info table in database
  productsdb.query(query, (err, result) => {
    // Executing query
    if (err) throw err; // If error occured then server is throwing exception
    res.send(result); // If everything was successful then server is sending results on /api/products
  });
});

app.get("/api/:universalURL", (req, res) => {
  // Protection from user trying to input non-existing page
  res.send("Error 404. Not Found"); // If user tries to search for a non-existing page then server is sending "Error 404. Not Found"
});

app.listen(port, () => {
  // Running server
  console.log("Listening..."); // If everything was successful then message "Listening..." will be displayed in the console
});
