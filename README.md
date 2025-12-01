README
Summary
Brief instructions to run app with Node.js and to initialize a local MySQL database using XAMPP

Prerequisites
Node.js (v14+ recommended)
npm (comes with Node.js)
XAMPP (includes Apache + MySQL / MariaDB)
The SQL dump file (sql_dump.sql) included in this repository
Setup (project)
Open a terminal in the project root (where index.js lives):
cd node_template
Install dependencies:
npm install
Configure database connection
COnfigure environmental variables in .env file. If not then rename env_sample.txt to .env. Backup contents if needed

DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
Adjust keys to match your project's configuration names.

Initialize XAMPP and MySQL
Start XAMPP Control Panel.
Start Apache and MySQL services.
Open phpMyAdmin: http://localhost/phpmyadmin
Paste SQL dump into sql tab of phpMyAdmin
Run the application
Start the Node.js process:

node index.js
For PowerShell
Allows to run Scripts

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
