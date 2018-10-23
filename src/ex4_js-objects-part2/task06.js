var b = 'прошло столько времени'
var temp = new Array();
temp = b.split(' ');

s1 = temp[0].substring(0, 1);
s2 = temp[0].substring(1, 6);

k1 = temp[1].substring(0, 1);
k2 = temp[1].substring(1, 7);

z1 = temp[2].substring(0, 1);
z2 = temp[2].substring(1, 7);

console.log(s1.toUpperCase() + s2.toLowerCase())
console.log(k1.toUpperCase() + k2.toLowerCase())
console.log(z1.toUpperCase() + z2.toLowerCase())