function f(x, obj){
var obj = {a:1, b:2, c:3};
 if (x in obj){
 console.log("true")}
  else {
      console.log("false")
       }
};
f("c")