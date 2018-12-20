const test = require("tape");
const request = require("supertest");
const app = require("../src/app");

test("Tape is working", t => {
  request(app)
    .get("/")
    .end((err, res) => {
      if (err) {
        return `You have an error: ${err}`;
      } else {
        t.equal(1, 1);
        t.end();
      }
    });
});

test("add-tech is getting a status of 200", t => {
  request(app)
    .get("/add-tech")
    .end((err, res) => {
      if (err) {
        return `You have an error: ${err}`;
      } else {
        t.equal(res.status, 200);
        t.end();
      }
    });
});

test("technology is getting a status of 200", t => {
  request(app)
    .get("/technology")
    .end((err, res) => {
      if (err) {
        return `You have an error: ${err}`;
      } else {
        t.equal(res.status, 200);
        t.end();
      }
    });
});
