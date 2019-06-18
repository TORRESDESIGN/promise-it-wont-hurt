'use strict';

const http = require("q-io/http");

http.read('http://localhost:7000')
.then(id => {
	return http.read('http://localhost:7000' + id)
})
.then(null, console.error)
.done();