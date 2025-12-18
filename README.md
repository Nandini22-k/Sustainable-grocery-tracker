# 🥬 Sustainable Grocery Tracker – How to Run the Project

## Introduction

The **Sustainable Grocery Tracker** is a web-based application that allows users to browse grocery items and view sustainability-related information such as carbon score, packaging type, and organic status.
This project demonstrates **READ functionality**, database integration, and dynamic rendering using **Node.js, Express, MySQL, and Pug templates**.

---

## 🔧 Prerequisites

Make sure the following are installed on your system:

* **Node.js** (v14 or later recommended)
* **npm** (comes with Node.js)
* **Git**
* **XAMPP** (for MySQL / phpMyAdmin)
* **VS Code**

---

## 📥 Step 1: Clone the GitHub Repository

### Check if Git is installed:

```bash
git --version
```

If not installed, download and install Git:
👉 [https://git-scm.com/downloads](https://git-scm.com/downloads)
(Choose Windows and keep default options)

### Clone the repository:

```bash
git clone https://github.com/<your-username>/sustainable-grocery-tracker.git
```

Navigate into the project folder:

```bash
cd sustainable-grocery-tracker
```

---

## 📦 Step 2: Open the Project in VS Code

```bash
code .
```

Open the **VS Code Terminal**:

* Menu → Terminal → New Terminal
* OR press **Ctrl + `**

---

## 📦 Step 3: Install Project Dependencies

Run this in the VS Code terminal:

```bash
npm install
```

(Optional but recommended for development)

```bash
npm install -g nodemon
```

---

## 🗄️ Step 4: Database Setup (MySQL + phpMyAdmin)

### 1️⃣ Start XAMPP

* Open **XAMPP Control Panel**
* Start **Apache**
* Start **MySQL**

---

### 2️⃣ Open phpMyAdmin

Go to:

```
http://localhost/phpmyadmin
```

---

### 3️⃣ Create the Database

Run this SQL:

```sql
CREATE DATABASE sustainable_grocery;
USE sustainable_grocery;
```

---

### 4️⃣ Create Tables & Seed Data

Paste and run the following SQL (or import from `seed.sql` if included):

```sql
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category_id INT,
    carbon_score VARCHAR(10),
    packaging_type VARCHAR(50),
    organic_flag VARCHAR(10),
    expiry_date DATE,
    price DECIMAL(6,2),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (category_name) VALUES
('Fruits'), ('Vegetables'), ('Dairy'), ('Grains');

INSERT INTO products 
(name, category_id, carbon_score, packaging_type, organic_flag, expiry_date, price)
VALUES
('Organic Banana', 1, 'Low', 'Plastic-free', 'Yes', '2025-12-01', 1.50),
('Oat Milk', 3, 'Medium', 'Carton', 'Yes', '2025-11-15', 2.80),
('Chickpea Pasta', 4, 'Low', 'Paper', 'No', '2026-01-01', 3.20),
('Seasonal Carrots', 2, 'Low', 'Plastic-free', 'Yes', '2025-11-30', 1.20);
```

---

## ⚙️ Step 5: Configure Database Connection

Open `db.js` and update credentials if needed:

```js
host: 'localhost',
user: 'root',
password: '',
database: 'sustainable_grocery'
```

(Adjust password if your MySQL setup requires one.)

---

## ▶️ Step 6: Run the Application

### Development mode (recommended):

```bash
nodemon app.js
```

OR

### Normal mode:

```bash
node app.js
```

---

## 🌐 Step 7: Open in Browser

* **Home Page:**

  ```
  http://localhost:3000
  ```

* **Products (Dynamic Data):**

  ```
  http://localhost:3000/products
  ```

* **Product Detail Page:**

  ```
  http://localhost:3000/products/1
  ```

---

## 📁 Project Structure

```
sustainable-grocery-tracker/
│  app.js
│  db.js
│  package.json
│  README.md
│
├── controllers/
│     homeController.js
│     productController.js
│
├── routes/
│     index.js
│     products.js
│
├── views/
│     layout.pug
│     index.pug
│     products.pug
│     product-details.pug
│     about.pug
│
├── public/
│     styles.css
│
└── seeds/
      seed.sql
```

---

## ✅ Features Demonstrated (Sprint 3)

* PUG templates generating HTML pages
* Dynamic grocery data pulled from MySQL
* Product list and detail views
* MVC structure (routes, controllers, views)
* GitHub version control
* Task board tracking (Trello / GitHub Projects)

---
