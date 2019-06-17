'use strict';

function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

function onReject(error) {
  console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);





/*--------------Rule of thumb--------------
  > If you are **not** returning a value from your promise to a caller,
  > then attach a `done` handler to guard against uncaught exceptions.

An example is shown below:
    doStuff()
    .then(doMoreStuff)
    .then(null, complainAboutJavascript)
    .done();
*/