const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'root',
      database: 'employee_DB'
    },
    console.log('Connected to the employee database.')
  );

module.exports = connection;