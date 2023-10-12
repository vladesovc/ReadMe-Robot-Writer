// TODO: Include packages needed for this application
const promptUser = require('./prompt');
const createMD = require('./mdcreator');
const writeFile = require('./fileWriter');

promptUser()
  .then((response) => createMD(response))
  .then((htmlContent) => writeFile('README.md', htmlContent))
  .then((successMessage) => console.log(successMessage))
  .catch((error) => console.error(error));

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
