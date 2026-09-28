
const test = require("node:test");
const assert = require("node:assert/strict");

const { isValidNietEmail } =
    require("./email-validator.js");

const emailTests = [
    ["jatin@niet.co.in", true],
    ["student123@niet.co.in", true],
    ["jatin.chauhan@niet.co.in", true],
    ["JATIN@NIET.CO.IN", true],
    ["jatin+feedback@niet.co.in", true],
    ["jatin@gmail.com", true],
    ["jatin@niet.com", false],
    ["jatin@niet.co.in.example.com", false],
    ["jatin@niet.co.in@gmail.com", false],
    ["jatin niet.co.in", false],
    ["@niet.co.in", false],
    ["jatin@niet.co.in ", true],
    ["", false],
    [null, false],
    [12345, false]
];

for (const [email, expected] of emailTests) {
    test(`Email: ${String(email)}`, () => {
        assert.equal(isValidNietEmail(email), expected);
    });
}