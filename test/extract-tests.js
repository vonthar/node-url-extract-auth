"use strict";

var tape = require("tape");
var extractAuth = require("..");

tape("extract auth", function (assert) {
  var url = extractAuth("https://user221:deletethis@www.npmjs.com");
  assert.equal(url, "https://npmjs.com");
  url = extractAuth("http://www.blacked.com/joinnow/#top");
  assert.equal(url, "http://blacked.com/joinnow");
  var auth = {};
  url = extractAuth("ftp://user221:deletethis@192.168.1.5/files/", auth);
  assert.equal(url, "ftp://192.168.1.5/files");
  assert.equal(auth.user, "user221");
  assert.equal(auth.password, "deletethis");
  assert.end();
});

