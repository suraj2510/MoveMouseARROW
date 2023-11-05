const hours1= document.querySelector(".hours")
const minutes1= document.querySelector(".minutes")
const seconds1= document.querySelector(".seconds");



function updateClock(){
    const currentDate= new Date();
     const hours= currentDate.getHours()
     const min= currentDate.getMinutes()
     const sec = currentDate.getSeconds()
     const hoursDeg= (hours/12)*360;
     hours1.style.transform=`rotate(${hoursDeg}deg)`;
     const minsDeg= (min/60)*360;
     minutes1.style.transform=`rotate(${minsDeg}deg)`;
     const secondsDeg= (sec/60)*360;
     seconds1.style.transform=`rotate(${secondsDeg}deg)`;

}
setInterval(updateClock,1000);

