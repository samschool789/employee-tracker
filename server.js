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
      } else if (answers.action === "Add an employee") {
        addEmployee();
      } else if (answers.action === "Add a role") {
        addRole();
      } else if (answers.action === "Add a department") {
        addDepartment();
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


function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "eeFirstName",
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "eeLastName",
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "rolesID",
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)",
        [
          answer.eeFirstName,
          answer.eeLastName,
          answer.rolesID,
          answer.managerID,
        ],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startApp();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "roleName",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salaryTotal",
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "deptID",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO roles (title, salary, departments_id) VALUES (?, ?, ?)",
        [answer.roleName, answer.salaryTotal, answer.deptID],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startApp();
        }
      );
    });
}
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the department?",
      name: "deptName",
    })
    .then(function (answer) {
      connection.query(
        "INSERT INTO departments (departments_name) VALUES (?)",
        [answer.deptName],
        function (err, res) {
          if (err) throw err;
          console.table(res);
          startApp();
        }
      );
    });
}

startApp();
