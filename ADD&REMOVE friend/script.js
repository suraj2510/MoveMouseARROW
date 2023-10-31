var AddFriend= document.querySelector("#add");
var h5= document.querySelector("h5");
var removeFriends= document.querySelector("#remove")


 var click=0;

 AddFriend.addEventListener("click",function(){
      if(click==0){
        h5.innerHTML="Friend";
        h5.style.color="green";
        click=1;
      }
    
    
 })
 removeFriends.addEventListener("click",function(){
    if(click==1){
        h5.innerHTML="Stranger";
        h5.style.color="red";
         click=0;    }
 })