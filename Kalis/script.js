let cardOne = document.getElementById("card1") 
let images = document.querySelector("#grid") 

// let images = document.images
let illustrations = document.querySelector(".purp");
let temp = window.getComputedStyle(illustrations).getPropertyValue("opacity");
let myInterval;
let intervalTwo;


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
              } else{
                      console.log("interval two has cleared")        
                      clearInterval(intervalTwo)
                } 
}

let newPic = () =>{
   
        images.innerHTML = `           <a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid"
        src="img/dropouts mock.png"
         alt="Honey Ginger Magazine front, back and spine"></a>


<img    id="img2" class="img7 img-fluid"
    src="img/around the sun album cover.png"
     alt="Around the Sun album cover alone and on spotify">

<!-- </div> -->
<!-- <div class="col-lg-4"> -->


<img id="img3" class="img7 img-fluid"
    src="img/Acl ad mock.png"
    alt="Austin City Limits Ad on Billboard">



<img id="img4" class="img7 img-fluid"
    src="img/kss.png"
    alt="Kalani Surf School Design on white T shirt">


`
                intervalTwo = setInterval(fadeIn, 100)
        
}
let fadeOut = function () {
        console.log("loop one running")
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
           console.log("interval one has cleared")        
           
        }
     
      };

    

     

      
  
// console.log(images.length)
    // images.style.cssText = `transform-origin: -200% -200%;
    //                         transform: rotate(35deg);
    //                         transition: .5s ease-in `
    

// slideOne()
let startFade = ()=>{
        console.log("start fade has run")
 myInterval = setInterval(fadeOut, 50)
} 
    
        // images[i].style.cssText=`transform-origin: -200% -200%;
        //                       transform: rotate(35deg);
        //                       transition: .5s ease-in`
    
illustrations.addEventListener("click", startFade)