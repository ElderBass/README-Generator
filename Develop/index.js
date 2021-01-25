// TODO: Include packages needed for this application
const inquirer = require('./inquirer');
// TODO: Create an array of questions for user input
const questions = [
    "What is your project's name?",
    "Please provide a short description of your project:",
    "What kind of license should your project have?",
    "What command should be used to install dependencies?",
    "What command should be used to run tests?",
    "What does the user need to know about using the repo?",
    "What does the suer need to know about contributing to the repo?",

];

// TODO: Create a function to write README file
function writeToFile( /*fileName, data*/ ) {
    inquirer
        .prompt([{
                type: 'input',
                message: questions[0],
                name: 'name'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'dependencies',
                default: 'npm i'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'tests',
                default: 'npm test'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'repo'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'contribute'
            }
        ])
        .then((response) => {
            console.log(response.name);
            console.log(response.description);
            console.log(response.license);
            console.log(response.dependencies);
            console.log(response.test);
            console.log(response.repo);
            console.log(response.contribute);
        })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();