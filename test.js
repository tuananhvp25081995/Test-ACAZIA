function sumNum(arr) {
  var sum = 0;
  for (var i=0; i< arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}


function mutateTheArray(n, a) {
  var b = [];
  for (var i=0; i<=n-1; i++) {
    var c = [a[i-1], a[i], a[i+1]];
    for (var j=0; j<c.length; j++) {
      if (c[j] === undefined) {
        c[j] = 0
        b[i] = sumNum(c);
        break;
      }
    }
    b[i] = sumNum(c);
  }  
  return b;
}
  
var a = [4, 0, 1, -2, 3];
console.log(mutateTheArray(5, a));