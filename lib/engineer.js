const Employee = require('./employee');

class Engineer extends Employee {
    constructor(staffName, staffId, staffEmail, staffGithub) {
        super(staffName, staffId, staffEmail);
        this.staffJob = "Engineer"
        this.staffGithub = staffGithub
    }
}

getGithub() {
    console.log(`getGithub function: ${this.staffGithub}`);
    return this.staffGithub;
}

module.exports = Engineer;