Sustainable Grocery Tracker

A Node.js application designed to help users track grocery consumption, reduce food waste, and make more sustainable shopping decisions. This project uses a local MySQL/MariaDB database (via XAMPP) to store user and grocery data.

📌 Prerequisites

Make sure the following are installed on your system:

Node.js (v14+ recommended)

npm (bundled with Node.js)

XAMPP (includes Apache + MySQL/MariaDB)

The provided SQL dump file: sql_dump.sql

🚀 Project Setup
1. Navigate to the project root

Open your terminal where index.js is located:

cd node_template

2. Install dependencies
npm install

⚙️ Environment Configuration

Create or edit a .env file.

If .env does not exist, rename env_sample.txt → .env.

Add your environment variables:

DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=


Adjust the values to match your MySQL/XAMPP configuration.

🗄️ Initialize MySQL using XAMPP

Open XAMPP Control Panel

Start Apache and MySQL

Visit phpMyAdmin
http://localhost/phpmyadmin

Create a new database (if not already created)

Import the SQL dump:

Go to the SQL tab

Paste or upload the contents of sql_dump.sql

Execute the script

Your database is now initialized.

▶️ Run the Application

Start the Node.js server:

node index.js


The app should now be running locally.

💡 PowerShell Notes (Windows Users)

If PowerShell blocks script execution, allow local scripts by running:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

📚 About Sustainable Grocery Tracker

The Sustainable Grocery Tracker helps users:

Track grocery purchases

Monitor expiration dates

Reduce food waste

Make sustainable shopping choices

Analyze consumption patterns

This project aims to support environmentally conscious habits through simple, user-friendly tools.
