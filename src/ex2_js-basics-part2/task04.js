var arr = [1,5,7,0];
function duplicate_values(arr)
{
    arr_res = [];
    arr.sort();    
    for (var i=1; i < arr.length; i++) {                   
        if (arr[i] == arr[i-1]) {
            var is_unique = true; 
            for (var k=0; k < arr_res.length; k++) {
                if (arr_res[k] == arr[i]) {
                    is_unique = false;
                    break;
                }
            }
            if (is_unique) {
                arr_res.push(is_unique); 
            }
        }            
    }
    return arr_res;
}

if (is_unique = true) {
console.log("true");
}
else {
    console.log("false");
}