/**
 * Created by siliconprime on 12/13/14.
 */
var rsvp = require('rsvp');
var Promise = rsvp.Promise;

function asyncPromiseNew (msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("hello " + msg);
    }, 1000)
  });
}

asyncPromiseNew("promise new").then(function (result) {
  console.log(result)
});

console.log("start");