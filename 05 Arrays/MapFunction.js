let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
let brr=arr.map(twice);
// for(const ele of arr){
// brr.push(ele*2);
// }
// console.log(brr);
function twice(x){
    return x*2;
}
console.log(brr);