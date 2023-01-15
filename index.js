const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const util = require('util');
const {generateHtml, generateCard} = require('./generateHtml');
const html = require("./generateHtml");

const writeFileAsync = util.promisify(fs.writeFile);


let staffArray = [];
let staffAnswers = `.`;

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

async function init() {
    try {
        await inquirerQuestions()

        for(i = 0; i < staffArray.length; i++) {
            staffAnswers = staffAnswers + html.generateCard(staffArray[i]);
        }

        let finalHtml = html.generateHtml(staffAnswers)

        writeFileAsync("./index.html", finalHtml);
        
    }
 catch (err) {
    return console.log(err);
}
 }

async function inquirerQuestions() {
    let continueQuestions = "";
    
    do {
         try {
              data = await inquirer.prompt(staffQuestions);

              let staffUnique = ""
              

              
              if (data.staffTitle === 'Team Manager') {
                staffUnique = await inquirer.prompt([{
                     type: 'input',
                     message: 'What is the manager\'s office number?',
                     name: 'finalUnique',
                }, ]);
                const manager = new Manager(data.staffName, data.staffId, data.staffEmail, staffUnique.finalUnique);
                staffArray.push(manager);
           } else if (data.staffTitle === 'Engineer') {
                staffUnique = await inquirer.prompt([{
                     type: 'input',
                     message: 'What is the engineer\'s GitHub username?',
                     name: 'finalUnique',
                }, ]);
                const engineer = new Engineer(data.staffName, data.staffId, data.staffEmail, staffUnique.finalUnique);
                staffArray.push(engineer);
           } else if (data.staffTitle === 'Intern') {
                staffUnique = await inquirer.prompt([{
                     type: 'input',
                     message: 'What is the intern\'s school name?',
                     name: 'finalUnique',
                }, ]);
                const intern = new Intern(data.staffName, data.staffId, data.staffEmail, staffUnique.finalUnique);
                staffArray.push(intern);
           }
         } catch (err) {
              return console.log(err);
         }
         console.log(staffArray)
       

         continueQuestions = await inquirer.prompt([{
              type: 'list',
              message: 'Would you like to continue adding staff?',
              choices: ['Yes', 'No'],
              name: 'continue',
         }, ]);
    } while (continueQuestions.continue === 'Yes');
}


init();