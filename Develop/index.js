const inquirer = require("inquirer");
const fs = require("fs").promises;
getDocument = require("./src/getSite.js");
getBob = require("./bob");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const employeeArray = [];

const init = () => {
  inquirer
    .prompt([
      {
        name: "position",
        type: "list",
        message: "Hello what would you like to do today?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((result) => {
      if (result.position === "Manager") {
        inquirer
          .prompt([
            {
              name: "managerName",
              type: "input",
              message: "What is the manager's name?",
            },
            {
              name: "managerId",
              type: "input",
              message: "What is the manager's ID?",
            },
            {
              name: "managerEmail",
              type: "input",
              message: "What is the manager's email?",
            },
            {
              name: "managerNumber",
              type: "input",
              message: "What is the manager's office number?",
            },
          ])
          .then((managerResult) => {
            const newManager = new Manager(
              managerResult.managerName,
              managerResult.managerId,
              managerResult.managerEmail,
              managerResult.managerNumber
            );
            console.log(newManager);
            employeeArray.push(newManager);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Are you done adding team members?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  console.log(employeeArray);
                } else {
                  init();
                }
              });
          });
      } else if (result.position === "Engineer") {
        inquirer
          .prompt([
            {
              name: "engineerName",
              type: "input",
              message: "What is the engineer's name?",
            },
            {
              name: "engineerId",
              type: "input",
              message: "What is the engineer's ID?",
            },
            {
              name: "engineerEmail",
              type: "input",
              message: "What is the engineer's email?",
            },
            {
              name: "engineerGithub",
              type: "input",
              message: "What is the engineer's github?",
            },
          ])
          .then((engineerResult) => {
            const newEngineer = new Engineer(
              engineerResult.engineerName,
              engineerResult.engineerId,
              engineerResult.engineerEmail,
              engineerResult.engineerGithub
            );
            console.log(newEngineer);
            employeeArray.push(newEngineer);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Are you done adding team members?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  console.log(employeeArray);
                } else {
                  init();
                }
              });
          });
      } //todo else if Intern
      //todo add a call init within init
    });
};

init();
module.exports = employeeArray;
// this stuff below is asynchronous and putting it in last
