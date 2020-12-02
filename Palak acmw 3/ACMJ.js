const homeimg=document.querySelector(".home-img");
const slide=document.querySelector(".slide");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".slider img");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const size=1075;
let i=1;
const tl= new TimelineMax();
tl.fromTo(".homeimg",0.8,{height:"0%"},{height:"80%", ease: Power2.easeInOut})
.fromTo(".homeimg",1.2,{width:"100%"},{width:"80%", ease: Power2.easeInOut})
.fromTo(".slide",1.2,{x:"-100%"},{x:"0%",ease: Power2.easeInOut},"-=1.2")
.fromTo(".motto",1,{x:"-200%"},{x:"0%",ease: Power2.easeInOut},"-=1.2")
.fromTo(".social",1,{x:"175%"},{x:"0%",ease: Power2.easeInOut},"-=1.2")
.fromTo("nav",1,{y:"-85%"},{y:"0%",ease: Power2.easeInOut},"-=1.2");
slider.style.transform="translateX("+(-size*i)+"px)";
next.addEventListener("click",function(){
  prev.style.display="block";
  if(i>=images.length-1) return;
  slider.style.transition="transform 0.4s ease-in-out";
  i++;
  slider.style.transform="translateX("+(-size*i)+"px)";
});
prev.addEventListener("click",function(){
  prev.style.display="block";
  if(i<=0) return;
  slider.style.transition="transform 0.4s ease-in-out";
  i--;
  slider.style.transform="translateX("+(-size*i)+"px)";
});
slider.addEventListener("transitionend",function(){
  console.log("fired");
  if(images[i].id==="first"){
    slider.style.transition="none";
    i=0;
  }
  else if(images[i].id==="last"){
    slider.style.transition="none";
    i=images.length-1;
  }
});