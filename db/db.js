const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "your_mysql_root_password",
  database: "sustainable_grocery_tracker",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
