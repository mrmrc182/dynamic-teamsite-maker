//this is demo code i did with a BCS tutor


const inquirer = require("inquirer");

module.exports= function(){
    return inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is Bob's favorite food?"
        },
    ])
}