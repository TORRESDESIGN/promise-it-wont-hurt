'use strict';

var promise = new Promise((fulfill, reject) => {
	setTimeout(() => {
		fulfill('FULFILLED!');
	}, 300);
});


promise.then(console.log);



/*-------Promise Notes--------

Promise States:
	1. Fullfilled: AKA Resolved
	2. Rejected: AKA Resolved
	3. Pending: waiting to be fullfilled or rejected

*/