const counter1= document.querySelector(".counter");
const load1= document.querySelector(".loader2")



 let idx = 0;
 updatenum();
function updatenum(){
     counter1.innerHTML=idx + "%"
     load1.style.width=idx + "%"
     idx++

     if(idx<101){
        setTimeout(updatenum,20)
     }
}
