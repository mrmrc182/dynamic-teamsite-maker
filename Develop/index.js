const inquirer = require("inquirer");
const fs = require("fs").promises;
getDocument = require("./src/getSite.js");
getBob = require("./bob");
getEmployee = require("./lib/Employee");

const init = () => {
    inquirer
    .prompt([
        {
            name: "position",
            type: "list",
            message: "Hello what would you like to do today?",
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
    .then((result)=>{
        if (result.choices === "Manager"){
            getEmployee();

        }
        //switch case statement
            // if add manager was selected
                // call addManager function
    })
}

init()
 
        // this stuff below is asynchronous and putting it in last
        // const siteContent = getDocument(answers);
        // fs.writeFile(`./dist/Site.html`, siteContent, (err) =>
        // err ? console.log("Site Generation failed.") : console.log("Site Created!")
        // );