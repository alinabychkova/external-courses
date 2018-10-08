var a = [1,2,3,4,5,6,7,8,9];

function arraySum(arr, elm) {

    arr = arr.slice(0);   

    for(var sum = 0, a; a = arr.pop();) sum += !elm || elm=="even" && !(a & 1) || elm== "odd" && a & 1 ? a : 0;

    return sum

}
08
 

alert(arraySum(a)); //сумма всех

alert(arraySum(a, 'even')); //сумма четных

alert(arraySum(a, 'odd')); //сумма нечетных
