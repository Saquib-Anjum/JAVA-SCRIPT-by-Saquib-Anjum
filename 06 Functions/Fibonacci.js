function fibo(a){
    if(a<=1) return a;
    return fibo(a-1)+fibo(a-2);
}
console.log(fibo(5));