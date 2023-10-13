const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please explain your motivation behind the project, why you made it, the problem it solves and what you learned during the process:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required for installing your project if needed?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide any and all usage instructions for the project:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please list below any collaborators with GitHub links, along with any additional APIs, or other material referenced:',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Select a License:',
            choices: ["MIT", "Apache", "None"],
            name: 'license',
        }
    ]);
};

module.exports = promptUser;