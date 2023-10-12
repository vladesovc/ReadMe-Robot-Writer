const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your projects Title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'For the description, please explain your motivation behind this, why you made it, the problem it solves and what you learned',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required for installing your project?',
            name: '',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
    ]);
};

module.exports = promptUser;