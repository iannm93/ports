let cardOne = document.getElementById("card1") 
let images = document.getElementById("img1") 

// let images = document.images
let illustrations = document.querySelector(".purp");
let intervalId;
let temp = window.getComputedStyle(illustrations).getPropertyValue("opacity");
let loop = ()=>{
        if (window.getComputedStyle(illustrations).getPropertyValue("opacity") > 0){
illustrations.style.opacity - .2
console.log(illustrations.style.opacity) 

   
        }


// console.log(images.length)
    // images.style.cssText = `transform-origin: -200% -200%;
    //                         transform: rotate(35deg);
    //                         transition: .5s ease-in `
    
}
// slideOne()
let slideOne = ()=>{
  setInterval(loop, 100)
} 
    
        // images[i].style.cssText=`transform-origin: -200% -200%;
        //                       transform: rotate(35deg);
        //                       transition: .5s ease-in`
    
illustrations.addEventListener("click", slideOne)