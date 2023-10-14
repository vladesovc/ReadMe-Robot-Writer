// TODO: Include packages needed for this application
const promptUser = require('./utils/prompt');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/fileWriter');

promptUser()
  .then((response) => generateMarkdown(response))
  .then((mdContent) => writeFile('README.md', mdContent))
  .then(() => console.log("You have succesfully created your README file!"))
  .catch((error) => console.error(error));
