// function to generate markdown for README
// Do I need to export this?

function generateMarkdown(data) {
  return `# ${data.projectTitle}

![License: ${data.license}]https://img.shields.io/badge/License-${data.projectLicense}-blue.svg)

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
* [Email Address: ](${data.emailAddress})

  

`;
}

module.exports = generateMarkdown;

// ```

// ### Deliverables: 20%

// * A sample README generated using the application must be submitted.

// * Your GitHub repository containing your application code.

// * A walkthrough video that demonstrates the functionality of the README generator must be submitted.

// * The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
// ```
