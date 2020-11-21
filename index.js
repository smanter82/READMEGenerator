const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');  
// const writeFileAsync = util.promisify(fs.writeFile)

//Import generate markdown file
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your file name?',
        name: 'fileName',  
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'projectDescription'
    },
//add the rest of the questions.
];
inquirer.prompt(questions)
.then((response) => {
    // var data = `### ${response.projectTitle}`
    writeToFile(fileName, data)
})

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, {}, (e) => console.log(e));
}


// function to initialize program
function init() {

}

// function call to initialize program
init();
