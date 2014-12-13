/**
 * Created by siliconprime on 12/13/14.
 */
var emitter = new EventEmitter;

emitter.on("task done", function (result) {
  console.log(result);
});

function asyncEvent(msg) {
  setTimeout(function () {
    emitter.emit("task done", "hello " + msg)
  }, 1000)
}

asyncEvent("first event ever");
asyncEvent("another event");