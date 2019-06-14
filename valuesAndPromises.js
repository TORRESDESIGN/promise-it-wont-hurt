'use strict';

let attachTitle = (name) => {
	return 'DR. ' + name;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

/*--------Alternate Solution---------

'use strict';

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);

*/