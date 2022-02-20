//Declaring our dependencies and setting constants 
const fs = require('fs');
const util = require ('util');
const inquirer = require('inquirer');
const generateREADME = require('./utils/generateREADME');
const writeFileAsync = util.promisify(fs.writeFile);

