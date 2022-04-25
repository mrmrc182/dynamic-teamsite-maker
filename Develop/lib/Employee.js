const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is your first name?",
        value: this.name,
      },
    ]);
    return this.name;
  }
  getId() {
    inquirer.prompt([
      {
        name: "id",
        type: "input",
        message: "What is the employee's ID?",
        value: this.id,
      },
    ]);
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
