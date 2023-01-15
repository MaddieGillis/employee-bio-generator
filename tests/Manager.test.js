const Manager = require("../lib/manager");

test("Can set office number via constructor", () => {
    const officeNumber = 44;
    const e = new Manager("Shayne", 444, "manager@manager.com", officeNumber);
    expect(e.staffOffice).toBe(officeNumber);
});