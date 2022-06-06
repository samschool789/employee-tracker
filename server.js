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
    
]).then((answer) => {
  switch (answer.action) {
    case 'View all employees':
      showAll();
      break;
  }
})

const showAll = () => {
  db.query(allEmployeeQuery, (err, results) => {
    if (err) throw err;
    console.log('');
    console.table(('All Employees'), results)
    startApp()
  })
}



      
 




    