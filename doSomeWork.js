'use strict';

const http = require("q-io/http");

http.read('http://localhost:7000')
.then(id => {
	return http.read('http://localhost:7001/' + id);
})
.then(json => {
	console.log(JSON.parse(json));
})
.then(null, console.error)
.done();

/*-------Alternate Solution-------

var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();

*/