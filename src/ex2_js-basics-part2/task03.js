var i = [1,2,3,4];

function arraySum(arr, elm) {

    arr = arr.slice(0);   

    for(var sum = 0, i; i = arr.pop();) 
    sum += !elm || elm=="even" && !(i & 1) || elm== "odd" && i & 1 ? i : 0;

    return sum

}
 

console.log(arraySum(i));

console.log(arraySum(i, 'even'));

console.log(arraySum(i, 'odd'));
