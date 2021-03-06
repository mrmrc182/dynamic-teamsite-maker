const inquirer = require("inquirer");
const fs = require("fs");
const getSite = require("./src/getSite.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Janitor = require("./lib/Janitor");

const employeeArray = [];

const init = () => {
  inquirer
    .prompt([
      {
        name: "position",
        type: "list",
        message: "What position would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "Janitor"],
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
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
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
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          });
      } else if (result.position === "Intern"){
        inquirer
          .prompt([
            {
              name: "internName",
              type: "input",
              message: "What is the intern's name?",
            },
            {
              name: "internId",
              type: "input",
              message: "What is the intern's ID?",
            },
            {
              name: "internEmail",
              type: "input",
              message: "What is the intern's email?",
            },
            {
              name: "internSchool",
              type: "input",
              message: "What is the intern's school?",
            },
          ])
          .then((internResult) => {
            const newIntern = new Intern(
              internResult.internName,
              internResult.internId,
              internResult.internEmail,
              internResult.internSchool
            );
            employeeArray.push(newIntern);
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
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          })
      } else {
        inquirer
          .prompt([
            {
              name: "janitorName",
              type: "input",
              message: "What is the janitor's name?",
            },
            {
              name: "janitorId",
              type: "input",
              message: "What is the janitor's ID?",
            },
            {
              name: "janitorEmail",
              type: "input",
              message: "What is the janitor's email?",
            },
            {
              name: "janitorLevel",
              type: "input",
              message: "What is the janitor's clearance level?",
            },
          ])
          .then((janitorResult) => {
            const newJanitor = new Janitor(
              janitorResult.janitorName,
              janitorResult.janitorId,
              janitorResult.janitorEmail,
              janitorResult.janitorLevel
            );
            employeeArray.push(newJanitor);
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
                  const employeeCards = getSite(employeeArray);
                  fs.writeFile(`./dist/Site.html`, employeeCards, (err) =>
                    err
                      ? console.log("Site Generation failed.")
                      : console.log("Site Created!")
                  );
                } else {
                  init();
                }
              });
          });
      }
    });
};

init();
module.exports = employeeArray;
