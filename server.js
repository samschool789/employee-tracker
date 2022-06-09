const connection = require("./config/connection");
const inquirer = require("inquirer");

const cTable = require("console.table");

const startApp = () =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all roles",
          "View all departments",
          "Add an employee",
          "Add a role",
          "Add a department",
          "update role for an employee",
          "update employee's manager",
          "quit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers.action);
      if (answers.action === "View all employees") {
        viewEmployees();
      } else if (answers.action === "View all roles") {
        viewRoles();
      } else if (answers.action === "View all departments") {
        viewDepartments();
      } else {
        process.exit();
      }
    });

const viewEmployees = () => {
  console.log("query database for employees");
  connection.query("select * from employees", function (err, result) {
    if (err) console.log(err);
    console.table(result);
    startApp();
  });
};

const viewRoles = () => {
  console.log("query database for roles");
  connection.query("select * from roles", function (err, result) {
    if (err) console.log(err);
    console.table(result);
    startApp();
  });
};

const viewDepartments = () => {
  console.log("query database for departments");
  connection.query("select * from departments", function (err, result) {
    if (err) console.log(err);
    console.table(result);
    startApp();
  });
};

startApp();
