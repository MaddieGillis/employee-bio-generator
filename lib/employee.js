class Employee {
    constructor(staffName, staffId, staffEmail) {
        this.staffName = staffName;
        this.staffId = staffId;
        this.staffEmail = staffEmail;
        this.staffJob = "Employee";
    }
    getName(){
        console.log(`getName function: ${this.staffName}`);
        return this.staffName;
    }
    
    getId(){
        console.log(`getId function: ${this.staffId}`);
        return this.staffId;
    }
    
    getEmail(){
        console.log(`getEmail function: ${this.staffEmail}`);
        return this.staffEmail;
    }
    getRole(){
        console.log(`getStaff function: ${this.staffJob}`);
        return this.staffJob;
    }
}

module.exports = Employee;
