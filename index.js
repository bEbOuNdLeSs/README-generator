//Declaring our dependencies and setting constants 
const fs = require('fs');
const util = require ('util');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateREADME');
const writeFileAsync = util.promisify(fs.writeFile);

// Prompting the user with questions to fill out the README.md
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of this project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a description about this project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Describe the usage of this project: ",
        },
        {
            type: "list",
            name: "license",
            message: "Choose one of the follow licenses for this project that are appropriate:  ",
            choices: [
                'ISC',
                'MIT'
            ],
        },
        {
            type: "input",
            name: "contributors",
            message: "Were there any contributors for this project?: ",
        },
        {
            type: "input",
            name: "test",
            message: "Are there any tests for this project: ",
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your username: ",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
        },
    ]);
}

// Async function 
    async function init() {
        try {
            const answers =  await promptUser();
            const generateContent = generateREADME(answers);
            //Writing them README.md to a directory
            await writeFileAsync('./dist/README.md', generateContent);
            console.log('Your README.md file is ready.');
        } catch (err) {
            console.log(err);
        }
    }

    init();