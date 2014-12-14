/**
 * Created by siliconprime on 12/14/14.
 */
var fibrous = require('fibrous');

function eventual(number, callback) {
  var ms = Math.floor(1000 + Math.random() * 1000);
  setTimeout(function () {
    callback(null, number);
  }, ms)
}

function eventuallySum(a,b,c) {
  var futures = [eventual.future(a), eventual.future(b), eventual.future(c)];
  var numbers = fibrous.wait(futures);
  return numbers[0] + numbers[1] + numbers[2]
}

console.log("start");
fibrous.run(function () {
  console.log("results", eventuallySum(1,2,3));
  console.log("end");
});
