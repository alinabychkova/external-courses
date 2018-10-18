var user = {FirstName: "Ivan", LastName: "Ivanov", Year: 1984};
var copy = {};
function objCopy (obj){
    for (var key in obj) {
        copy [key] = obj[key];
    }
    return copy;
}
objCopy(user);
objCopy(user1);
copy.name = "Max";
console.log(copy);