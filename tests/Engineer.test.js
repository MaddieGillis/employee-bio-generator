const Engineer = require("../lib/engineer");

test("Can set github via a constructor", () => {
    const github = 'pitterpatter'
    const e = new Engineer("Pat", 23, "engineer@engineer.com", github);
    expect(e.staffGithub).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const e = new Engineer("Hasan", 459, "email@email.com");
    expect(e.getRole()).toBe(testRole);
  });