const Employee = require("../lib/employee");

test('Can create object using Employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can get name via constructor", () => {
    const testName = "Haylee"
    const e = new Employee(testName);
    expect(e.staffName).toBe(testName);
});

test("Can get staff ID via constructor", () => {
    const testId = "44"
    const e = new Employee("Brian", testId);
    expect(e.staffId).toBe(testId);
});

test("Can get email via constructor", () => {
    const testEmail = "email@email.com"
    const e = new Employee("Spencer", 33, testEmail);
    expect(e.staffEmail).toBe(testEmail);
});
