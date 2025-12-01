CREATE DATABASE IF NOT EXISTS sustainable_grocery_tracker;
USE sustainable_grocery_tracker;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('buyer','admin') NOT NULL DEFAULT 'buyer'
);

CREATE TABLE IF NOT EXISTS grocery_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  category VARCHAR(100),
  eco_score INT,
  carbon_footprint DECIMAL(5,2),
  packaging_type VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS user_grocery_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  grocery_item_id INT,
  quantity INT DEFAULT 1,
  date_added DATE,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (grocery_item_id) REFERENCES grocery_items(id)
);

INSERT INTO users (name, email, password, role)
VALUES 
('Admin User', 'admin@example.com', 'admin123', 'admin'),
('Sravya Savirigam', 'sravya@example.com', 'password123', 'buyer'),
('Nandini Kadiyala', 'nandini@example.com', 'password123', 'buyer');

INSERT INTO grocery_items (name, category, eco_score, carbon_footprint, packaging_type) VALUES
('Organic Apples', 'Fruits', 90, 0.40, 'Compostable'),
('Bananas', 'Fruits', 85, 0.30, 'Recyclable'),
('Broccoli', 'Vegetables', 88, 0.50, 'No Packaging'),
('Almond Milk', 'Dairy Alternatives', 70, 1.20, 'Recyclable'),
('Oat Milk', 'Dairy Alternatives', 78, 0.80, 'Recyclable'),
('Brown Rice', 'Grains', 82, 1.10, 'Paper Bag'),
('White Rice', 'Grains', 62, 1.50, 'Plastic Bag'),
('Tomatoes', 'Vegetables', 84, 0.60, 'No Packaging'),
('Potatoes', 'Vegetables', 75, 0.70, 'Mesh Bag'),
('Eggs (Free-Range)', 'Dairy', 92, 1.10, 'Recyclable Carton'),
('Eggs (Regular)', 'Dairy', 60, 1.60, 'Plastic Carton'),
('Soy Sauce', 'Condiments', 65, 2.00, 'Glass Bottle'),
('Organic Pasta', 'Grains', 80, 1.05, 'Cardboard'),
('Cereal (Eco Brand)', 'Breakfast', 88, 0.90, 'Recyclable'),
('Cereal (Regular)', 'Breakfast', 55, 1.40, 'Plastic'),
('Olive Oil', 'Pantry', 70, 2.10, 'Glass Bottle'),
('Sunflower Oil', 'Pantry', 58, 2.50, 'Plastic Bottle'),
('Tofu', 'Protein', 72, 1.40, 'Plastic Wrap'),
('Lentils', 'Protein', 90, 0.95, 'Paper Bag'),
('Chickpeas (Canned)', 'Protein', 80, 1.30, 'Recyclable Can');

INSERT INTO user_grocery_log (user_id, grocery_item_id, quantity, date_added)
VALUES
(2, 1, 2, '2025-01-10'),
(2, 4, 1, '2025-01-11'),
(3, 2, 5, '2025-01-12'),
(2, 10, 1, '2025-01-15'),
(3, 19, 3, '2025-01-18');
