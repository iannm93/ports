let cardOne = document.getElementById("card1");
let images = document.querySelector("#grid");

// let images = document.images
let illustrations = document.querySelector(".purp");
let temp = window.getComputedStyle(illustrations).getPropertyValue("opacity");
let graphic = document.querySelector(".font-st");
let myInterval;
let intervalTwo;
let b = 0;
let a = 0;


let fadeIllustrationsIn = () => {
        let fadeOpacity = Number(
                window.getComputedStyle(images).getPropertyValue("opacity")
  );
  // if the opacity is less than 1,  add 10% of the original opacity.
  if (fadeOpacity < 1) {
          fadeOpacity = fadeOpacity + 0.1;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    b++
    console.log("b=", b)
  } else {
    console.log("interval two has cleared");
    clearInterval(intervalTwo);
  }
};

let newPic = () => {
  console.log("new pic running, interval two starting now");
  // opacity is currently 0, change all dom content needed
  graphic.textContent = "illustrations";
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


`;
  intervalTwo = setInterval(fadeIllustrationsIn, 100);
};
let fadeIllustrationsOut = function () {
        let fadeOpacity = Number(
                window.getComputedStyle(images).getPropertyValue("opacity")
                );
                // if the opacity is less than 1,  add .005 to all the below elements' opacity
                if (fadeOpacity > 0) {
    fadeOpacity = fadeOpacity - 0.1;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    a++
    console.log("a=",a)
  } else {
    clearInterval(myInterval);
    console.log("interval one has cleared");
    newPic();
  }
};

// console.log(images.length)
// images.style.cssText = `transform-origin: -200% -200%;
//                         transform: rotate(35deg);
//                         transition: .5s ease-in `

// slideOne()
let startFade = () => {
  console.log("start fade has run, fade out starting now");
  myInterval = setInterval(fadeIllustrationsOut, 100);
};

// images[i].style.cssText=`transform-origin: -200% -200%;
//                       transform: rotate(35deg);
//                       transition: .5s ease-in`

illustrations.addEventListener("click", startFade);
