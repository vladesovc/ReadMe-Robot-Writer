// TODO: Include packages needed for this application
const promptUser = require('./utils/prompt');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFile = require('./utils/fileWriter');

promptUser()
  .then((response) => generateMarkdown(response))
  .then((mdContent) => writeFile('README.md', mdContent))
  .then(() => console.log("You have succesfully created your README file!"))
  .catch((error) => console.error(error));


  
// 

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
