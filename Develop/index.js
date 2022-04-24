const inquirer = require("inquirer");
const fs = require("fs");
getDocument = require("./src/getSite.js");

const init = () => {
    inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?"
        },
    ])
    .then((answers => {  
        const siteContent = getDocument(answers);
        fs.writeFile(`./dist/Site.html`, siteContent, (err) =>
        err ? console.log("Site Generation failed.") : console.log("Site Created!")
        );
    }))
}

init()