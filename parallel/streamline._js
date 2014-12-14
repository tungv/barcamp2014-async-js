

function eventually(number, _) {
  var ms = Math.floor(1000 + Math.random() * 1000);
  setTimeout(_, ms);
  return number;
}

function eventuallySum(a,b,c, _) {
  var future_a = eventually(a, !_);
  var future_b = eventually(b, !_);
  var future_c = eventually(c, !_);
  return future_a(_) + future_b(_) + future_c(_)
}

console.log('start');
console.log('result: ', eventuallySum(1,2,3, _));
