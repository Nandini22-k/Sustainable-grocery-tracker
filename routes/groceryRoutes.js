const express = require("express");
const router = express.Router();
const db = require("../db/db");

// Home (static)
router.get("/", (req, res) => {
  res.render("index");
});

// Static About Page
router.get("/about", (req, res) => {
  res.render("about");
});

// Buyer – dynamic grocery list
router.get("/groceries", async (req, res) => {
  try {
    const [items] = await db.query("SELECT * FROM grocery_items");
    res.render("grocery_list", { items });
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

// Admin – dynamic list of master grocery items
router.get("/admin/items", async (req, res) => {
  try {
    const [list] = await db.query("SELECT * FROM grocery_items");
    res.render("admin_items", { list });
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

module.exports = router;
router.get("/usecases", (req, res) => {
  res.render("usecases");
});
router.get("/menu", (req, res) => {
  res.render("menu");
});

router.get("/admin", (req, res) => {
  res.render("admin");
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/cart", (req, res) => {
  res.render("cart");
});

