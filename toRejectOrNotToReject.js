'use strict';

var promise = new Promise((fulfill, reject) => {
	fulfill('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
	console.log(error.message);
};

promise.then(console.log, onRejected);


/*------------ Notes ----------

Promises may only resolve one time and all future attempts 
to resolve them will simply be ignored.


*/