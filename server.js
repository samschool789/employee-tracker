
const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

inquirer.prompt([
   {
       type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: 
        [ "View all employees", 
         "View all roles",
         "View all departments", 
         "add an employee", 
         "add a role", 
         "add a department", 
         "update role for an employee", 
         "update employee's manager", 
         "view employees by manager", 
         "delete a department", 
         "delete a role", 
         "delete an employee", 
         "View the total utilized budget of a department", 
         "quit"],
       }
     ]);
      
     



 app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    