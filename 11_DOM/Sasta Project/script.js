let s1=document.getElementById("shape1");
s1.addEventListener("mouseenter",function(){
   //s1.style.backgroundColor="red";
   let r = Math.floor(Math.random()*100);
   s1.innerHTML=`<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    //s1.style.backgroundColor="white";
    s1.innerHTML="<h1>1</h1>";
 });

 let s2=document.getElementById("shape2");
 let clr ="red";
s2.addEventListener("mouseenter",function(){
    if(clr=="red"){
      s2.style.backgroundColor="red";
      clr= "green";
    }
    else if(clr=="green"){
        s2.style.backgroundColor="green";
        clr= "blue";
      }
      else {
        s2.style.backgroundColor="blue";
        clr= "red";
      }

});
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
    // s2.innerHTML="<h1>1</h1>";
 });

let s3 = document.getElementById("shape3");
s3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
 });
 s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
    
 });
 //shape 4
 let s4 = document.getElementById("shape4");
 s4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${a}, 255, 255)`;
    s2.style.backgroundColor=`rgb(255, ${b}, 255)`;
    s3.style.backgroundColor=`rgb(255, 255, ${c})`;
   
 });
 s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundColor="white";
    
 });