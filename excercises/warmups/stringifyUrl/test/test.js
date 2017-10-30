const chai = require("chai");
const assert = chai.assert;

const stringifyURL = require("../App.js");

const tests = {
    endpoint: "http://localhost:9099/",
    case0: {},
    case1: {
        species: "trex"
    },
    case2:{
        species: "growler",
        color: "magenta"
    }
}

describe("these should all create a query URL", () => {
    it("should return just the endpoint", () => {
        assert.equal(stringifyURL(tests.case0), tests.endpoint);
    });
    it("should return a URL", () => {
        assert.equal(stringifyURL(tests.endpoint, tests.case0), tests.endpoints);
    });
    it("should return a URL and a query string with species", () => {
        assert.equal(stringifyURL(tests.endpoint, tests.case1), "http://localhost:9099/?species=growler");
    });
    it("should return a URL with a query string that has the species and color", () => {
        assert.equal(stringifyURL(tests.endpoint, tests.case2), "http://localhost:9099/?species=howler&color=magenta");
    });
});
