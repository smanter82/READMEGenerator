const inquirer = require("inquirer");
const fs = require("fs");

//Import generate markdown file
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your file name?",
    name: "fileName",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Please enter project instructions.",
    name: "projectInstructions",
  },
  {
    type: "input",
    message: "Please enter a usage information for your project.",
    name: "projectUsageInfo",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines for your project.",
    name: "projectContribution",
  },
  {
    type: "input",
    message: "Please enter test instructions for your project.",
    name: "projectTestInstruct",
  },
];

// function to write README file
function writeToFile(data) {
  fs.writeFile(data.fileName + ".md", generateMarkdown(data), {}, (e) =>
    console.log(e)
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(response);
  });
}

// function call to initialize program
init();
