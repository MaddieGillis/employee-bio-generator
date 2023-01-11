var inquirer = require('inquirer');
//Employee();
//Engineer();
//Intern();
//Manager(); 


const managerQuestions = [
    {
        type: 'input',
        message: 'Welcome Team Manager! What is your name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'managerOffice',
    },
    {
        type: 'list',
        message: 'Who would you like to add?',
        choices: ['Team Manager', 'Engineer', 'Intern', 'finish'],
        name: 'employeeChoice',    
    }
];


const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Who would you like to add?',
        choices: ['Team Manager', 'Engineer', 'Intern', 'finish'],
        name: 'employeeChoice',    
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What is your school?',
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Who would you like to add?',
        choices: ['Team Manager', 'Engineer', 'Intern', 'finish'],
        name: 'employeeChoice',    
    }
]

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    }
  });
