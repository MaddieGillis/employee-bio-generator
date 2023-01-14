const inquirer = require('inquirer');
//Employee();
//Engineer();
//Intern();
//Manager(); 

function managerTemplet(data) {
  return `<div id="card" class="card">
        
            <p id="employee-name">
                Name: ${data.managerName}
            </p>
            <p id="employee-number">
                Employee ID: ${data.managerId}
            </p>
            <p id="employee-email">
                Email:<a href="mailto:${data.managerEmail}">${data.managerEmail}</a>
            </p>
            <p id="employee-office">
                Office Number: ${data.managerOffice}
            </p>
        
    </div>`;
}

function engineerTemplet(data) {
   return `<div id="card" class="card">
        
    <p id="employee-name">
        Name: ${data.engineerName}
    </p>
    <p id="employee-number">
        Employee ID: ${data.engineerId}
    </p>
    <p id="employee-email">
        Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a>
    </p>
    <p id="employee-github">
        GitHub: <a href="https://github.com/${data.engineerGithub}>${data.engineerGithub}</a>
    </p>

</div>`;
}

function internTemplet(data) {
    return `<div id="card" class="card">
        
    <p id="employee-name">
        Name: ${data.internName}
    </p>
    <p id="employee-number">
        Employee ID: ${data.internId}
    </p>
    <p id="employee-email">
        Email: <a href="mailto:${data.internEmail}> ${data.internEmail}</a>
    </p>
    <p id="employee-school">
        School: ${data.internSchool}
    </p>

</div>`;
}


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
  .prompt(managerQuestions, engineerQuestions, internQuestions)
  .then((data) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    }
  });
