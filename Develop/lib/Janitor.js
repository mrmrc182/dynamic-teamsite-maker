const Employee = require("../lib/Employee");

class Janitor extends Employee {
  constructor(name, id, email, clearance) {
    super(name, id, email);
    this.clearance = clearance;
  }
  getRole() {
    return "Janitor";
  }
  getClearance() {
    return clearance;
  }
}
module.exports = Janitor;