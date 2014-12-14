/**
 * Created by siliconprime on 12/14/14.
 */

function eventually(number, callback) {
  var ms = Math.floor(1000 + Math.random() * 1000);
  setTimeout(function () {
    callback(number);
  }, ms)
}

function eventuallySum(a, b, c, callback) {
  var counter = 0;
  var sum = 0;

  function check(n) {
    sum += n;
    if( ++counter == 3) {
      callback(sum)
    }
  }

  [a,b,c].forEach(function (n) {
    eventually(n, check);
  })
}

eventuallySum(1,2,3, function (result){
  console.log("results", result)
});

console.log("start");