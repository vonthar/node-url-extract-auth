node-url-extract-auth
==========================================================================================
[![NPM Package](https://img.shields.io/npm/v/url-extract-auth.svg)](https://www.npmjs.org/package/url-extract-auth)
[![Build Status](https://travis-ci.org/vonthar/node-url-extract-auth.svg?branch=master)](https://travis-ci.org/vonthar/node-url-extract-auth/branches)
[![Coverage Status](https://coveralls.io/repos/github/vonthar/node-url-extract-auth/badge.svg?branch=master)](https://coveralls.io/github/vonthar/node-url-extract-auth?branch=master)
[![Dependency Status](https://david-dm.org/vonthar/node-url-extract-auth.svg)](https://david-dm.org/vonthar/node-url-extract-auth)

**Example**  
```js
var extractAuth = require("url-extract-auth");
extractAuth("https://user221:deletethis@www.npmjs.com");
//"https://npmjs.com"
```
Installation
------------
`npm i url-extract-auth`

API Reference
-------------
<a name="exp_module_url-extract-auth--extractAuth"></a>

### extractAuth(url, [authObject]) ⇒ <code>string</code> ⏏
Extract auth string from URL. If provided, sets values to auth object.

**Kind**: Exported function  
**Params**

- url <code>string</code>
- [authObject] <code>Object</code>

**Example**  
```js
var authObject = {};
extractAuth("ftp://user221:deletethis@192.168.1.5/files", authObject);
//"ftp://192.168.1.5/files"
authObject
//{ username: "user221", password: "deletethis" }
```



License
-------
MPL 2.0
