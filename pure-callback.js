/**
 * Created by siliconprime on 12/13/14.
 */

function async(msg, callback) {
  setTimeout(function () {
    callback("hello " + msg)
  }, 1000);
}

async("callback", function (result) {
  console.log(result);
});

console.log("start");


