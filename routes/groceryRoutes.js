const express = require("express");
const router = express.Router();

// Temporary in-memory database
let users = [];
let items = [
  { id: 1, name: "Tomatoes", price: 20 },
  { id: 2, name: "Milk", price: 30 },
  { id: 3, name: "Bread", price: 25 },
  { id: 4, name: "Onions", price: 18 },
  { id: 5, name: "Apples", price: 40 },
  { id: 6, name: "Rice", price: 50 }
];
let cart = [];

/* ------------------------
   BASIC PAGES (GET)
------------------------- */

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

/* ------------------------
   LOGIN + REGISTER
------------------------- */

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  users.push({ name, email, password });

  res.redirect("/login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) return res.send("Invalid credentials");

  req.session.user = user;

  res.redirect("/userhome");
});

router.get("/userhome", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("userhome", { user: req.session.user });
});

/* ------------------------
   MENU + ADD TO CART
------------------------- */

router.get("/menu", (req, res) => {
  res.render("menu", { items });
});

router.post("/add-to-cart", (req, res) => {
  const item = items.find((i) => i.id == req.body.id);
  if (item) cart.push(item);
  res.redirect("/cart");
});

/* ------------------------
   CART + REMOVE ITEM
------------------------- */

router.get("/cart", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  res.render("cart", { cart, total });
});

router.post("/remove-from-cart", (req, res) => {
  const index = req.body.index;
  cart.splice(index, 1);
  res.redirect("/cart");
});

/* ------------------------
   CHECKOUT + PAYMENT
------------------------- */

router.get("/checkout", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  res.render("checkout", { total });
});

router.get("/payment", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  res.render("payment", { total });
});

router.post("/payment-status", (req, res) => {
  cart = []; // empty cart after payment
  res.render("paymentstatus", { status: "success" });
});

/* ------------------------
   ADMIN PANEL
------------------------- */

router.get("/admin", (req, res) => {
  res.render("admin", { items });
});

router.post("/admin/add-item", (req, res) => {
  const { name, price } = req.body;
  items.push({ id: items.length + 1, name, price });
  res.redirect("/admin");
});

router.post("/admin/delete-item", (req, res) => {
  const id = req.body.id;
  items = items.filter((item) => item.id != id);
  res.redirect("/admin");
});

module.exports = router;

