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

test("Can get name via getName()", () => {
    const testName = "Breezy";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Can get id via getId()", () => {
    const testId = 369;
    const e = new Employee("Louise", testId);
    expect(e.getId()).toBe(testId);
});
  
test("Can get email via getEmail()", () => {
    const testEmail = "email@email.com";
    const e = new Employee("Jerome", 492, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});
  
test("getRole() should return \"Employee\"", () => {
    const testRole = "Employee";
    const e = new Employee("Thomas", 32, "email@email.com");
    expect(e.getRole()).toBe(testRole);
});