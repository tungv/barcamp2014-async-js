/**
 * Created by siliconprime on 12/13/14.
 */

function async(msg, callback) {
  setTimeout(function () {
    callback(msg + " world")
  }, 1000);
}

async("hello", function (result) {
  console.log(result);
});

console.log("start");

function asyncPromise(msg) {

}

asyncPromise("hello").then(...)

var emitter = new EventEmiter
emitter.on('finish async task', function () { });

function asyncEvent() {
  emitter.emit('finish async task', "abcd")
}

