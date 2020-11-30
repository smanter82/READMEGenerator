// function to generate markdown for README
// var data = `### ${response.projectTitle}`
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  

`;
}

module.exports = generateMarkdown;
