const Intern = require("../lib/intern");

test("Can set a school via a constructor", () => {
    const schoolName = 'U of O';
    const e = new Intern("Kali", 1, "intern@intern.com", schoolName);
    expect(e.staffSchool).toBe(schoolName);
});
