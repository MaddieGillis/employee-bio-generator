const Employee = require('./employee');

class Intern extends Employee {
    constructor(staffName, staffId, staffEmail, staffSchool) {
        super(staffName, staffId, staffEmail);
        this.staffJob = "Intern"
        this.staffSchool = staffSchool
    }
}

getSchool() {
    console.log(`getSchool function: ${this.staffSchool}`);
    return this.staffSchool;
}

module.exports = Intern;