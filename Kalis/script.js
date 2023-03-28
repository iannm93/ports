let cardOne = document.getElementById("card1");
let images = document.querySelector("#grid");
let logo = document.querySelector(".me-ok");
let links = document.querySelector("#flex-box");

// let images = document.images
let leftLink = document.querySelector(".purple");
let rightLink = document.querySelector(".purp");

let temp = window.getComputedStyle(leftLink).getPropertyValue("opacity");
let graphic = document.querySelector(".font-st");
let myInterval;
let intervalTwo;
let graphicIntervalOne;
let graphicIntervalTwo;
let illustrationIntervalTwo;

let b = 0;
let a = 0;

// fade ins start
let fadeIn = (targetVal) => {
  let fadeOpacity = Number(
    window.getComputedStyle(images).getPropertyValue("opacity")
  );
  // if the opacity is less than 1,  add 10% of the original opacity.
  if (fadeOpacity < 1) {
    fadeOpacity = fadeOpacity + 0.1;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    logo.style.opacity = fadeOpacity;
    leftLink.style.opacity = fadeOpacity;
    rightLink.style.opacity = fadeOpacity;

    b++;
    console.log("b=", b);
  } else {
    console.log(targetVal);
    if (targetVal.includes("graphic")) {
      console.log("interval two has cleared, graphic");
      clearInterval(graphicIntervalTwo);
    } else if (targetVal.includes("illustrations")) {
      console.log("interval two has cleared, illustrations");
      clearInterval(illustrationIntervalTwo);
    }
  }
};

// fade ins end

// updates start
let updateIllustrations = (targetVal) => {
  console.log("new pic running, interval two starting now");
  // opacity is currently 0, change all dom content needed
  leftLink.innerHTML = `< see graphic designs`;
  logo.src = "./img/me_ok.png";
  graphic.textContent = "illustration";
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
  illustrationIntervalTwo = setInterval(fadeIn, 100, targetVal);
};

let updateGraphics = (targetVal) => {
  console.log("new pic running, interval two starting now");
  // opacity is currently 0, change all dom content needed
  leftLink.innerHTML = `< see illustrations`;
  logo.src = "./img/me_point.png";
  graphic.textContent = "graphic design";
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
  graphicIntervalTwo = setInterval(fadeIn, 100, targetVal);
};

// updates end

// fade out interval 
let fadeOut = function (targetVal) {
  let fadeOpacity = Number(
    window.getComputedStyle(images).getPropertyValue("opacity")
  );
  // if the opacity is less than 1,  add .005 to all the below elements' opacity
  if (fadeOpacity > 0) {
    fadeOpacity = fadeOpacity - 0.1;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    logo.style.opacity = fadeOpacity;
    leftLink.style.opacity = fadeOpacity;
    rightLink.style.opacity = fadeOpacity;

    a++;
    console.log("a=", a);
  } else {
    if (targetVal.includes("illustrations")) {
      console.log(myInterval);
      clearInterval(myInterval);
      console.log("interval one has cleared| illustrations");
      updateIllustrations(targetVal);
    } else if (targetVal.includes("graphic")) {
      console.log("interval one has cleared| graphic");
      clearInterval(intervalTwo);
      updateGraphics(targetVal);
    }
  }
};



// conditional statements that dictate which id is being assigned to fadeout interval
let linkInterval = (event) => {
  console.log("start fade has run, fade out starting now");
  let targetVal = event.target.innerText;
  if (targetVal.includes("illustrations")) {
    console.log("illus");
    myInterval = setInterval(fadeOut, 100, targetVal);
  } else if (targetVal.includes("design")) {
    console.log("des");
    intervalTwo = setInterval(fadeOut, 100, targetVal);
  }
};


links.addEventListener("click", linkInterval);
