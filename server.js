const inquirer = require("inquirer");


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
      
     