const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",   // <-- PUT YOUR MYSQL PASSWORD HERE
  database: "sustainable_grocery_tracker"
});

module.exports = db;
