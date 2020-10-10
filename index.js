const inquirer = require("inquirer");
const util = require("util");
var fs = require('fs');
const writeFileAsync = util.promisify(fs.writeFile);
var generateMD = require("./utils/generateMarkdown");
const questions = [
    "what is your github user? ",
    "what is the title of your readme? ",
    "type a short description: ",
    "what do you need for installation? ",
    "what is the usage? ",
    "what license do you want? ",
    "who are the contributers? ",
    "what tests? ",
    "what questions? "
];
inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "username"
    },
    {
        type:"input",
        message:questions[1],
        name: "title"
    },
    {   
        type:"input",
        message:questions[2],
        name:"desciption"
    },
    {
        type:"input",
        message:questions[3],
        name:"installation"
    },
    {
        type:"input",
        message:questions[4],
        name:"usage"
    },
    {
        type:"list",
        message:questions[5],
        name:"license",
        choices:[
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "none"
        ]
    },
    {
        type:"input",
        message:questions[6],
        name:"contributors"
    },
    {
        type:"input",
        message:questions[7],
        name:"tests"
    },
    {
        type:"input",
        message:questions[8],
        name:"questions"
    }
]).then(function(data){
    console.log(data);
    const markdown = generateMD(data);
    return writeFileAsync("README.md", markdown);

}).then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });


