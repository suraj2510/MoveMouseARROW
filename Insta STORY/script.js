  var arr = [
    {
        dp:"https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRR3wVk2vMzQeyqxSLSNd1ca7xX3HZlr0LYdqhbq8Jjottdu9W1e8RbcdiF1Pb3MvZ2G66KyO7_P6FyytQ",story:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/kohli-completes-15-years-in-international-cricket-ap-185946-1x1_0.jpg?VersionId=rFGx1pS1L.mkt7WYAyhJequ3cS7FdbET"
    },
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppyykE1io034rl4ZkbEdrw9r7NEaghDWTUoIq6DmRLsWeWFKPMpFjd-QsN-csuLuCaPU&usqp=CAU",story:"https://images.news18.com/ibnlive/uploads/2022/09/virat-kohli-practice-india-leeds-ap-1600-16632141133x2.jpg?impolicy=website&width=360&height=240"
    },
    {
        dp:"https://images.news18.com/ibnlive/uploads/2022/05/virat-kohli-india-1600-ap-practice-new-16522786423x2.jpg?impolicy=website&width=360&height=240",story:"https://imgk.timesnownews.com/story/Kohli-sky-grab.jpg?tr=w-400,h-300,fo-auto"
    },
    {
        dp:"https://st1.latestly.com/wp-content/uploads/2019/03/Virat-Kohli-380x214.jpg",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B9AL6tqDYvGWr4abEmi17PJq6hjsOwtPGri5f-KriHytuGxi3j-0SDs-9wC_ITuSsa0&usqp=CAU"
    },

  ]
  var storyian=document.querySelector("#storyian");
var clutter=""
  arr.forEach(function(elem,idx){
    clutter+= `  <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
  })

 storyian.innerHTML= clutter;

 storyian.addEventListener("click",function(data){

document.querySelector("#full-screen").style.display="block";
document.querySelector("#full-screen").style.backgroundImage= `url(${arr[data.target.id].story})`;

setTimeout(function(){
    document.querySelector("#full-screen").style.display="none";
},2000);
 });
