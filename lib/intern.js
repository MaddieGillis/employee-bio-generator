const Employee = require('./employee');

class Manager extends Employee {
    constructor(staffName, staffId, staffEmail, staffOffice) {
        super(staffName, staffId, staffEmail);
        this.staffJob = "Manager"
        this.staffOffice = staffOffice
    }
}

getOffice() {
    console.log(`getOffice function: ${this.staffOffice}`)
    return this.staffOffice
}

module.exports = Manager;