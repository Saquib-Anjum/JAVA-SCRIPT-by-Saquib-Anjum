let num = 123455;
console.log(num);
console.log(num/10);
let n=50;

let count= 0;
while(num>0){
    num=Math.floor(num/10);
    count++;
}
console.log(count);