let cardOne = document.getElementById("card1") 
let images = document.querySelector(".img7") 

// let images = document.images
let illustrations = document.querySelector(".purp");
let intervalId;
let temp = window.getComputedStyle(illustrations).getPropertyValue("opacity");
let myInterval;


let fadeIn = () =>{
        let fadeOpacity = Number(
                window.getComputedStyle(images).getPropertyValue("opacity")
              );
              console.log(fadeOpacity)
              // if the opacity is less than 1,  add .005 to all the below elements' opacity
              if (fadeOpacity < 1) {
                fadeOpacity = fadeOpacity + 0.1;
               images.style.opacity = fadeOpacity
               console.log(images.style.opacity)
              }
}

let newPic = () =>{
   
                setInterval(fadeIn, 100)
        
}
let loop = function () {
        console.log("loop rujnning")
        let fadeOpacity = Number(
          window.getComputedStyle(images).getPropertyValue("opacity")
        );
        console.log(fadeOpacity)
        // if the opacity is less than 1,  add .005 to all the below elements' opacity
        if (fadeOpacity > 0) {
          fadeOpacity = fadeOpacity - 0.1;
         images.style.opacity = fadeOpacity
         console.log(images.style.opacity)
        } else{
           newPic()
           clearInterval(myInterval)
           console.log("cleared")
        }
     
      };

    

     

      
  
// console.log(images.length)
    // images.style.cssText = `transform-origin: -200% -200%;
    //                         transform: rotate(35deg);
    //                         transition: .5s ease-in `
    

// slideOne()
let slideOne = ()=>{
 myInterval = setInterval(loop, 50)
  console.log("test")
} 
    
        // images[i].style.cssText=`transform-origin: -200% -200%;
        //                       transform: rotate(35deg);
        //                       transition: .5s ease-in`
    
illustrations.addEventListener("click", slideOne)