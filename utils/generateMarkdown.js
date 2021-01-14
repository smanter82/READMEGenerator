// function to generate markdown for README
// Do I need to export this?

function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description:

${data.projectDescription}

## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation:

* ${data.projectInstructions}

## Usage:

* ${data.projectUsageInfo}

## Contributing:

Here are the ways in which you can contribute to this project:

* ${data.projectContribution}

## Tests:

* ${data.projectTestInstruct}

## License:

Licensed under the [${data.projectLicense}](LICENSE.txt) license.

## Questions:

Contact me through GitHub or by email with any questions.

* [GitHub Profile: ](https://github.com/${data.gitHubName}/)
* [Email Address: ](${data.emailAddress})

  

`;
}

module.exports = generateMarkdown;

//WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// ```

// ### Deliverables: 20%

// * A sample README generated using the application must be submitted.

// * Your GitHub repository containing your application code.

// * A walkthrough video that demonstrates the functionality of the README generator must be submitted.

// * The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
// ```
