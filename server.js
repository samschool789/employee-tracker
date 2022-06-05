
const express = require('express');
//const inquirer = require("inquirer");
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


/*inquirer.prompt([
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
     ]);*/
      
     db.query(`SELECT * FROM roles`, (err, rows) => {
      console.log(rows);
    }); 


 app.use((req, res) => {
  res.status(404).end();
});

 app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    