"use strict";

var normalizeUrl = require("normalize-url");
var urlPattern = /^((?:\w+:)?\/\/)?([^@\/]+)@(.*)$/;
/**
 * @module url-extract-auth
 * @example
 * ```js
 * var extractAuth = require("url-extract-auth");
 * extractAuth("https://user221:deletethis@www.npmjs.com");
 * //"https://npmjs.com"
 * ```
 */
module.exports = extractAuth;

/**
 * @alias module:url-extract-auth
 * @param {string} url
 * @param {Object=} authObject
 * @returns {string}
 * @description
 * Extract auth string from URL. If provided, sets values to auth object.
 * @example
 * ```js
 * var authObject = {};
 * extractAuth("ftp://user221:deletethis@192.168.1.5/files", authObject);
 * //"ftp://192.168.1.5/files"
 * authObject
 * //{ username: "user221", password: "deletethis" }
 * ```
 */
function extractAuth(url, authObject) {
  url = normalizeUrl(url, { normalizeProtocol: false });
  var matches = url.match(urlPattern);
  if (matches) {
    url = matches[1] ? matches[1] + matches[3] : matches[3];
    if (authObject) {
      var values = matches[2].split(":");
      authObject.user = authObject.username = values[0];
      if (values[1]) {
        authObject.pass = authObject.password = values[1];
      }
    }
  }
  return url;
}

