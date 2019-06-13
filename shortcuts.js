'use strict';

 /*----examples----------------------------------
--fulfill long method(LM)--

 var promise = new Promise((fulfill, reject) => {
	setTimeout(() => {
		fulfill('FULFILLED!');
	}, 300);
});


promise.then(console.log);


--to short this fulfill short method(SM)--


var promise = Promise.resolve('FULFILLED');

promise.then(console.log);
*/

/*-----examples----------------------------------
--reject long method(LM)


var promise = new Promise((fulfill, reject) => {
	setTimeout(() => {
		reject(new Error('REJECTED!'));
	}, 300);
});

function onReject(error) {
	console.log(error.message);
}

//--LM-- promise.then(console.log, onReject);

//--SM:
promise.catch(onReject);
*/

//---fulfill and reject in one example------------
var promise = Promise.resolve('FULFILLED');

promise.then(console.log);

function onReject(error) {
	console.log(error.message);
}

promise.catch(onReject);
