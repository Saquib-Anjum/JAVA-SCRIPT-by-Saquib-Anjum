let arr=[1,2,3,4,5,6,7,8];
let max=Number.MIN_SAFE_INTEGER;
for(let i=0;i<arr.length;i++){
if(arr[i]>max){
    max=arr[i];
}
}
console.log(max);clearInterval