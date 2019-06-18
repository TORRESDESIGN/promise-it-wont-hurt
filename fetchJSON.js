'use strict';
const http = require("q-io/http");


http.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()


/*-----Resources----------

https://github.com/kriskowal/q-io



*/