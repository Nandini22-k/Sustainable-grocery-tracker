const express = require("express");
const session = require("express-session");
const path = require("path");
const routes = require("./routes/groceryRoutes");

const app = express();

// Set View Engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "secret-key-123",
    resave: false,
    saveUninitialized: true,
  })
);

// Connect all routes
app.use("/", routes);

// Start Server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
