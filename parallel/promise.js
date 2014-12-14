/**
 * Created by siliconprime on 12/14/14.
 */

var rsvp = require('rsvp');
var Promise = rsvp.Promise;

function eventually(number) {
  return new Promise(function (resolve, reject) {
    var ms = Math.floor(1000 + Math.random() * 1000);
    setTimeout(function () {
      resolve(number);
    }, ms)
  });
}

function eventuallySum(a,b,c) {
  var promises = [a,b,c].map(eventually);
  return rsvp.all(promises).then(function (numbers) {
    var sum = 0;
    numbers.forEach(function (n) {
      sum += n;
    });

    return sum;
  })
}

eventuallySum(1,2,3).then(function (result) {
  console.log("result:", result);
});

console.log("start");