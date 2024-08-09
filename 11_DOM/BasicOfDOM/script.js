console.log("kiya hal bro");
let x = document.getElementById("hw");
console.log(x);
x.style.color="blue"
let y = document.getElementById("ha");
y.style.backgroundColor="pink";
y.style.color="red";
y.style.fontFamily = "Gill Sans"; // Use //fontFamily instead of fontStyle
setTimeout(function(){
    y.innerHTML="fuck you";
},3*1000);
setTimeout(function(){
    y.style.fontFamily = "Arial";
},4*1000);


// let k = document.getElementById("bihari");
// k.addEventListener("mousemove",function(){
    
//     k.style.color="yellow";
//     k.style.backgroundColor="red";
// });
// Select the <h1> with the id "bihari" and add a mousemove event listener
let k = document.getElementById("hb");
k.addEventListener("click", function() {
    k.style.color = "yellow";
    k.style.backgroundColor = "red";
});
k.addEventListener("mousemove",function(){
    y.style.color="orange";
    
})