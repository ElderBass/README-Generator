// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//require the exported module from the generateMarkdown.js file and setting it to a const 'markdown'
const markdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [ //made this an array of objects
    {
        type: 'input',
        message: "What is your project's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please provide a short description of your project:",
        name: 'description'
    },
    {
        type: 'list',
        message: "What kind of license should your project have? (choose one)", //maybe make this a list type?
        name: 'license',
        choices: ['ISC', 'CC', 'MIT', 'ZLIB', 'None']
    },
    {
        type: 'input',
        message: "What command should be used to install dependencies?",
        name: 'installation',
        default: 'npm i'
    },
    {
        type: 'input',
        message: "What command should be used to run tests?",
        name: 'tests',
        default: 'npm test' //added default option but doesn't always work
    },
    {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contribute'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
    }

];
//make this a clean one-line fxn to capture the user input for future manipulation
const getInput = () => inquirer.prompt(questions)

// TODO: Create a function to write README file 
function writeToFile(fileName, data) {
    //this seems redundant but okay here's the fs.writeFile function
    //takes a fileName and data, then creates a file of that type/name, then writes the 'data' into it
    //if there's an error code, it will be logged to the console, else it will log 'Success!'
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
async function init() {
    //so basically put it all together - getInput will get and return user's answers to prompts...
    //...then those answers are used to generate custom markdown for the README file...
    //...the README is then written using the markdown function's output for its data parameter
    await getInput()
        .then(answers => {
            writeToFile('NEWREADME.md', markdown(answers));
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment");
            } else {
                console.log("Something else went wrong");
            }
        });
}


// Function call to initialize app
init();