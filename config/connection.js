const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Whatup789',
      database: 'employee_DB'
    },
    console.log('Connected to the employee database.')
  );

module.exports = connection;