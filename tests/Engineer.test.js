const Engineer = require("../lib/engineer");

test("Can set github via a constructor", () => {
    const github = 'pitterpatter'
    const e = new Engineer("Pat", 23, "engineer@engineer.com", github);
    expect(e.staffGithub).toBe(github);
});