let n=123456;
let sum=0;
let res=0;
while(n>0){
    sum=n%10;
    n=Math.floor(n/10);
    res=res*10+sum;
}
console.log(res);