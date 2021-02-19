// test/server.js

var expect = require("chai").expect;
const e = require("express");
var request = require("request");

describe("Testing Article", function () {
  var url = "http://localhost:3000/articles/";
  it("add one 200", function (done) {
    var itemToBeAdded = {
      title: "title",
      body: "title",
      authorIdAuthor: 1,
    };
    request.post(
      {
        headers: { "content-type": "application/json" },
        url: url,
        body: itemToBeAdded,
        json: true,
      },
      function (error, response, body) {
        // console.log(error);
        console.log(body);
        // id = body.idAuthor;
        expect(response.statusCode).to.equal(201);
        done();
      }
    );
  });
  let id = 1;
  it("returns all 200", function (done) {
    request(url, function (error, response, body) {
      let items = JSON.parse(body);
      id = items[items.length - 1].idArticle;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("find latest id by id 200", function (done) {
    request(url + id, function (error, response, body) {
      console.log(id, body);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("find latest+1 id by id 200", function (done) {
    request(url + (id + 1), function (error, response, body) {
      console.log(body);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
  it("search for tle id by id 200", function (done) {
    request(url + "search/tle", function (error, response, body) {
      console.log(body);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it("comment for latest id", function (done) {
    request.put(
      {
        headers: { "content-type": "application/json" },
        url: url + "comment/" + id,
        body: { comment: "bla bla bla" },
        json: true,
      },
      function (error, response, body) {
        console.log(body);
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });
  it("like latest id", function (done) {
    request.get(url + "like/" + id, function (error, response, body) {
      console.log(body);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
