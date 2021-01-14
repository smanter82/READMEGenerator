// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

[![License: ${data.projectLicense}](https://img.shields.io/badge/License-${data.projectLicense}-yellow.svg)](https://opensource.org/licenses/${data.projectLicense})

## Description:

_${data.projectDescription}_

## Table of Contents:

* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## Installation:

${data.projectInstructions}

## Usage:

${data.projectUsageInfo}

## Contributing:

Here are the ways in which you can contribute to this project:

${data.projectContribution}

## Tests:

${data.projectTestInstruct}

## License:

Licensed under the ${data.projectLicense} license.

## Questions:

Contact me through GitHub or by email with any questions.

* [GitHub Profile: ](https://github.com/${data.gitHubName}/)
* Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
