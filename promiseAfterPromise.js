'use strict';
/*
 Parse.User.logIn('user', 'pass').then(function (query) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // the object was saved
});
*/

function first(promise) {
	new Promise.resolve('FULFILLED');

promise.then(console.log);
}

function second() {

}

first();

