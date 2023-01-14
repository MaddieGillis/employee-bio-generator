const inquirer = require("inquirer");

const staffQuestions = [
    {
        type: 'input',
        message: 'What is the name of the staff?',
        name: 'staffName',
    },
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'staffId',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'staffEmail',
    },
    {
        type: 'list',
        message: 'What is their job as staff?',
        choices: ['Team Manager', 'Engineer', 'Intern'],
        name: 'staffTitle',  
    }
]

inquirer
  .prompt(staffQuestions)
  .then((data) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    }
  });