const inquirer = require("inquirer");
const fs = require("fs");
getDocument = require("./src/getSite.js");
getBob = require("./bob");
getEmployee = require("./lib/Employee");

const init = () => {
    inquirer
    .prompt([
        {
            name: "test",
            message: "Would you like to test?",
            type: "input",
        }
    ])
    .then((answers => {  
        console.log(answers);
        console.log(getEmployee);
        // if (answers.position === "Employee"){
        //     getEmployee.then(function(employeeAnswers){
        //         console.log(employeeAnswers);
        //     })
        // }
    }))
}

init()
 
        // this stuff below is asynchronous and putting it in last
        // const siteContent = getDocument(answers);
        // fs.writeFile(`./dist/Site.html`, siteContent, (err) =>
        // err ? console.log("Site Generation failed.") : console.log("Site Created!")
        // );