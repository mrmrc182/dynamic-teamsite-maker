const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
module.exports = function(){
    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?"
        }
    ]);
    .then((result)=>{
        return result;
    })
};
