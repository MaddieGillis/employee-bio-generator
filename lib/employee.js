class Employee {
    constructor(staffName, staffId, staffEmail) {
        this.name = staffName;
        this.id = staffId;
        this.email = staffEmail;
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
    getStaff(){
        console.log(`getStaff function: ${this.staffJob}`);
        return this.staffJob;
    }
}

