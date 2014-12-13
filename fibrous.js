var fibrous = require('fibrous');

function sleep(ms, cb) {
  setTimeout(cb, ms);
}

function asyncFiber(msg) {
  sleep.sync(1000);
  return "hello " + msg;
}

console.log('started');
fibrous.run(function () {
  console.log(asyncFiber("fibrous"));
});