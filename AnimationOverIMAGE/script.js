
var box = document.querySelectorAll(".box");

box.forEach(function(val){
    val.addEventListener("mouseenter",function(){
         val.childNodes[3].style.opacity=1;
    })
    val.addEventListener("mouseleave",function(){
val.childNodes[3].style.opacity=0;
    })
 val.addEventListener("mousemove",function(dets){
    val.childNodes[3].style.left=dets.x+"px"
    
 })

})

















  //for 1 single box


// var box1= document.querySelector("#box1");
// var box1= document.querySelector("#box2");

// var box1= document.querySelector("#box3");

// var box1= document.querySelector("#box4");


// var boximg= document.querySelector("#box1 img");
// var boximg= document.querySelector("#box2 img");
// var boximg= document.querySelector("#box3 img");
// var boximg= document.querySelector("#box4 img");

// box1.addEventListener("mousemove",function(data){
//     boximg.style.left=data.x+"px"
//     boximg.style.top=data.y+"px"
// })
// box1.addEventListener("mouseenter",function(data){
//     boximg.style.opacity=1;
// })
// box1.addEventListener("mouseleave",function(data){
//     boximg.style.opacity=0;
// })

// rohit sharma
// box2.addEventListener("mousemove",function(data){
//     boximg.style.left=data.x+"px"
//     boximg.style.top=data.y+"px"
// })
// box2.addEventListener("mouseenter",function(data){
//     boximg.style.opacity=1;
// })
// box2.addEventListener("mouseleave",function(data){
//     boximg.style.opacity=0;
// })