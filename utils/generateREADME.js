function generateREADME(answers) {
    return `
    #${answers.projectTitle}

    ## Description
    ${answers.description}

    ## Table of contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [Contact](#contact)

    ## Installations
    ${answers.installation}

    ## License
    ${answers.license}

    ## Contributors
    ${answers.contributors}

    ## Tests
    ${answers.tests}

    ## Contact
    Github : [${answers.username}](https://github.com/${answers.username})
    EEmail : ${answers.email}
    `;
}

module.exports = generateREADME;