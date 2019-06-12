'use strict';

var promise = new Promise((fulfill, reject) => {
	fulfill('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');

/* ------- Asynchronous proof ---

output//

	"MAIN PROGRAM"
	"PROMISE VALUE"

*/