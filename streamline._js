/**
 * Created by siliconprime on 12/13/14.
 */

function asyncStreamline(msg, _) {
  setTimeout(_, 1000);
  return "hello " + msg;
}

console.log("start");
console.log(asyncStreamline("streamline", _));
console.log("test");