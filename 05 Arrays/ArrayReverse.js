let arr = [2,3,4,5,6,7];
let n=arr.length-1;
let lo=0;

while(lo<n){
    let temp=arr[lo];
    arr[lo]=arr[n];
    arr[n]=temp;
    lo++;
    n--;
}
arr.reverse();
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}