const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');






const db = mysql.createConnection(
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

const startApp = () => 
inquirer.prompt([
   {
       type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: 
        [ "View all employees", 
         "View all roles",
         "View all departments", 
         "Add an employee", 
         "Add a role", 
         "Add a department", 
         "update role for an employee", 
         "update employee's manager", 
         "quit"],
         
       }
    
])

app.get('/api/employees', (req, res) => {
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.post('/api/employee', ({ body }, res) => {
  const errors = inputCheck(body, 'first_name', 'last_name', 'department_name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
});



      
 




    