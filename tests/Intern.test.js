const Intern = require("../lib/intern");

test("Can set a school via a constructor", () => {
    const schoolName = 'U of O';
    const e = new Intern("Wolf", 1, "intern@intern.com", schoolName);
    expect(e.staffSchool).toBe(schoolName);
});

test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const e = new Intern("Charlie", 789, "email@email.com");
    expect(e.getRole()).toBe(testRole);
  });