const inquirer = require("inquirer");
const fs = require('fs');

const staffQuestions = [
    {
        type: 'input',
        message: 'What is the name of the staff?',
        name: 'staffName',
    },
    {
        type: 'input',
        message: 'What is the staff\'s employee ID?',
        name: 'staffId',
    },
    {
        type: 'input',
        message: 'What is the staff\'s email?',
        name: 'staffEmail',
    },
    {
        type: 'list',
        message: 'What is the staff\'s job?',
        choices: ['Team Manager', 'Engineer', 'Intern'],
        name: 'staffTitle',  
    }
]

inquirer
  .prompt(staffQuestions)
  .then((data) => {
    let FinalstaffUnique = ''
    if (data.staffTitle === 'Team Manager') {
        inquirer.prompt([{
            type: 'input',
            message: 'What is the manager\'s office number?',
            name: 'staffUnique',
        },
        ]);
        const manager = data.staffUnique ;      
    } else if (data.staffTitle === 'Engineer') {
        inquirer.prompt([{
            type: 'input',
            message: 'What is the engineer\'s GitHub?',
            name: 'staffUnique',
        },]);
        const engineer = data.staffUnique;
    } else if (data.staffTitle === 'Intern') {
        inquirer.prompt([{
            type: 'input',
            message: 'What is the intern\'s school?',
            name: 'staffUnique',
        },]);
        const Intern = data.staffUnique;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    }
  });