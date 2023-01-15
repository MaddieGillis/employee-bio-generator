const Manager = require("../lib/manager");

test("Can set office number via constructor", () => {
    const officeNumber = 44;
    const e = new Manager("Shayne", 444, "manager@manager.com", officeNumber);
    expect(e.staffOffice).toBe(officeNumber);
});

test("getRole() should return \"Manager\"", () => {
    const testRole = "Manager";
    const e = new Manager("Ludwig", 949, "email@email.com");
    expect(e.getRole()).toBe(testRole);
  });