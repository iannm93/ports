
let cardOne = document.getElementById("cardOne");
let images = document.getElementById("grid");
let logo = document.querySelector(".me-ok");


let links = document.getElementById("flex-box");

let leftLink = document.querySelector(".purple")
let rightLink = document.querySelector(".purp")

let graphic = document.querySelector(".font-st")
let isItRunning = 0;
let myInterval;

// KALI LOOK FOR THIS WHEN YOU'RE UPDATING YOUR PICTURES
let updateContent = (targetVal) =>{
  console.log(targetVal)
  if(targetVal.includes("illustrations")){

    leftLink.innerHTML = `< see graphic designs`;
    rightLink.innerHTML = `see ui/ux designs >`;

    logo.src = "./img/me_ok.png";
    graphic.textContent = "illustration";
    // put all your pictures for the illustrations grid inside the variable below
    images.innerHTML = `
    <a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid"src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Honey Ginger Magazine front, back and spine"></a>
      <img id="img2" class="img7 img-fluid" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <img id="img3" class="img7 img-fluid" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <img id="img4" class="img7 img-fluid" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
  `;
    myInterval = setInterval(fade, 60,targetVal, 1)
  } 
  else if (targetVal.includes("graphic")){
    leftLink.innerHTML = `< see illustrations`;
    rightLink.innerHTML = `see ui/ux designs >`;

  logo.src = "./img/me_point.png";
  graphic.textContent = "graphic design";
    // put all your pictures for the graphic designs grid inside the variable below
  images.innerHTML = 
  `<a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid" src="img/dropouts mock.png" alt="Honey Ginger Magazine front, back and spine"></a>
      <img id="img2" class="img7 img-fluid" src="img/around the sun album cover.png" alt="Around the Sun album cover alone and on spotify">
      <img id="img3" class="img7 img-fluid" src="img/Acl ad mock.png" alt="Austin City Limits Ad on Billboard">
      <img id="img4" class="img7 img-fluid" src="img/kss.png" alt="Kalani Surf School Design on white T shirt">
`;
  myInterval= setInterval(fade, 60, targetVal, 1)

  } 
  else if (targetVal.includes("ux")){
    leftLink.innerHTML = ` < see illustrations `;
    rightLink.innerHTML = "see graphic designs >"
  logo.src = "./img/me_thumbs.png";
  graphic.textContent = "UX/UI";
    // put all your pictures for the ux/ui grid inside the variable below
  images.innerHTML = 
  `
  <div id="card1" class="card mx-auto" style="max-width: 50vh">
  <a href="https://heyzine.com/flip-book/08c238dc66.html"
  ><img
      id="img7"
      class="img-fluid"
      src="https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg"
      class="card-img-top"
      alt="The Pretty Penguin book cover"
  /></a>
  <div class="card-body">
  <h5 class="card-title">The Pretty Penguin</h5>
  <p class="card-text">
      Childrens book. Click
      <a href="https://heyzine.com/flip-book/08c238dc66.html">here</a> to view.
  </p>
  </div>
</div>

<div id="card1" class="card mx-auto" style="max-width: 50vh">
  <a href="https://heyzine.com/flip-book/08c238dc66.html"
  ><img
      id="img7"
      class="img-fluid"
      src="https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg"
      class="card-img-top"
      alt="The Pretty Penguin book cover"
  /></a>
  <div class="card-body">
  <h5 class="card-title">The Pretty Penguin</h5>
  <p class="card-text">
      Childrens book. Click
      <a href="https://heyzine.com/flip-book/08c238dc66.html">here</a> to view.
  </p>
  </div>
</div>

<div id="card1" class="card mx-auto" style="max-width: 50vh">
<a href="https://heyzine.com/flip-book/08c238dc66.html"
><img
  id="img7"
  class="img-fluid"
  src="https://wallpapers.com/images/hd/cat-with-shades-cool-picture-lkenou4wsqrbib37.jpg"
  class="card-img-top"
  alt="The Pretty Penguin book cover"
/></a>
<div class="card-body">
<h5 class="card-title">The Pretty Penguin</h5>
<p class="card-text">
  Childrens book. Click
  <a href="https://heyzine.com/flip-book/08c238dc66.html">here</a> to view.
</p>
</div>
</div>
`;
  myInterval= setInterval(fade, 60, targetVal, 1)

  } 
  
}

let fade = (targetVal, endOpacity)=>{
  isItRunning += 1 
  let fadeOpacity = Number(
    window.getComputedStyle(images).getPropertyValue("opacity")
  );
  console.log("fade")

  if (fadeOpacity !== endOpacity) {
    console.log(fadeOpacity, endOpacity)
    
    fadeOpacity > endOpacity ? fadeOpacity -= 0.05 : fadeOpacity += 0.05;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    logo.style.opacity = fadeOpacity;
    leftLink.style.opacity = fadeOpacity;
    rightLink.style.opacity = fadeOpacity;
  }

    if (fadeOpacity === endOpacity && endOpacity === 1){
      clearInterval(myInterval)
      isItRunning = 0
    }
    if (fadeOpacity === endOpacity && endOpacity===0){
      clearInterval(myInterval)
      updateContent(targetVal)
    }
}

// conditional statements that dictate which id is being assigned to fadeout interval 
let linkInterval = (event) => {
  console.log("start fade has run, fade out starting now");
  let targetVal = event.target.innerText;
  if (isItRunning === 0){
      if (targetVal.includes("illustrations")) {
        myInterval = setInterval(fade, 40, targetVal, 0);
      } else if (targetVal.includes("graphic")) {
        myInterval = setInterval(fade, 40, targetVal, 0);
      } else if (targetVal.includes("ui")){
        myInterval = setInterval(fade, 40, targetVal, 0)
      }
  }


  console.log(targetVal)
};
links.addEventListener("click", linkInterval);