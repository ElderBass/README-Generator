// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License

    Project licensed under ${license} license.`;
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    //I put new lines (\n) in for every line because otherwise the formatting was wonky on the README and things were misaligned
    return `# ${data.name} \n

    \n${renderLicenseBadge(data.license)}

    \n## Description

    \n${data.description}

    \n## Table of Contents

    \n* [Installation](#installation)

    \n* [Usage](#usage)

    \n* [Contributing](#contributing)

    \n* [Tests](#tests)

    \n* [Questions](#questions)

    ${renderLicenseLink(data.license)} 

    \n## Installation

    \nTo install dependencies, use this command:

    
    ${data.installation}
    
    \n## Usage

    \nUser information:

    \n${data.usage}

    \n## Contributing

    \nIf you wish to contribute to the repository, here's what you need to know:

    \n${data.contribute}

    \n## Tests 

    \nTo test stuff out on this respository, use this command:

    ${data.tests}

    \n## Questions

    \nSee more projects by this creator on GitHub:  https://github.com/${data.username}

   \nFor any questions, please email the creator at:

    ${data.email}


    \n${renderLicenseSection(data.license)}
    
`;
}

module.exports = generateMarkdown;