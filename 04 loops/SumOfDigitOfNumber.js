let num= 123456789;
let sum = 0;
console.log("Hello World");

while(num>0){
    let digit =num %10;
    num =Math.floor(num/10);
    sum=sum+digit;
}
console.log(sum);