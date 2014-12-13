/**
 * Created by siliconprime on 12/13/14.
 */
var q = require('q');

function asyncPromise(msg) {
  var defer = q.defer();

  setTimeout(function () {
    defer.resolve("hello " + msg)
  }, 1000);

  return defer.promise;
}

asyncPromise("promise defer").then(function (result) {
  console.log(result);
});

console.log("start");