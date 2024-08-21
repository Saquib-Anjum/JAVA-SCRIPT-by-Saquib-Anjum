var main = document.getElementById("main");
var s = "";
for(let i=0;i<=59;i++){
    let arr = ["image1.jpeg","image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg","image5.jpeg"];
    let a =Math.floor(Math.random()*5)
    s+=`<div class="card"><img src="${arr[a]}"></div>`;
}
main.innerHTML=s;
// alert("ruk ja bhai ")