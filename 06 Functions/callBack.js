//call back is fumction which passes in another fumction
function sumOfProducts(a,b,c){
return a*b*c;
}
//console.log(sumOfProducts(2,4,6));
function fun(x,y){
    console.log(x);
}
fun(sumOfProducts(5,7,9),5);
