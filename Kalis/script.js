
let cardOne = document.getElementById("cardOne");
let images = document.getElementById("grid");
let logo = document.querySelector(".me-ok");


let links = document.getElementById("flex-box");

let leftLink = document.querySelector(".purple")
let rightLink = document.querySelector(".purp")

let graphic = document.querySelector(".font-st")
let isItRunning = 2;
let myInterval;

// KALI LOOK FOR THIS WHEN YOU'RE UPDATING YOUR PICTURES
let updateContent = (targetVal) =>{
  if(targetVal.includes("illustrations")){

    leftLink.innerHTML = `< see graphic designs`;
    rightLink.innerHTML = `see ui/ux designs >`;

    logo.src = "./img/me_ok.png";
    graphic.textContent = "illustration";
    // put all your pictures for the illustrations grid inside the variable below
    images.innerHTML = `
    <a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid"src="img/ppboo.png" alt="Pretty Penguin Book Mockup"></a>
      <img id="img2" class="img7 img-fluid" src="img/joshua tree cup.png" alt="Joshua Tree Mug Illustration">
      <img id="img3" class="img7 img-fluid" src="img/feature article 1-images3.png" alt="Girl walking with yoga props">
      <img id="img3" class="img7 img-fluid" src="img/runaway.png" alt="alien driving">
      <img id="img3" class="img7 img-fluid" src="img/yogastickersonmat.png" alt="yoga stickers on yoga mat">
      <img id="img3" class="img7 img-fluid" src="img/lifedrawing.jpg" alt="charcoal drawing of man on floor">
      <img id="img3" class="img7 img-fluid" src="img/selfport.jpg" alt="charcoal drawing of Kali eating thai food">
      <img id="img3" class="img7 img-fluid" src="img/untitled_artwork 3.jpg" alt="digital drawing of the water barer">
      <img id="img3" class="img7 img-fluid" src="img/takemecover.jpg" alt="two fish people in the desert">
      <img id="img3" class="img7 img-fluid" src="img/starseed cover.png" alt=" Starseed by Kali Coogan with girl floating in space">
      <img id="img3" class="img7 img-fluid" src="img/morir.png" alt="black and white drawing of a girl">
      <img id="img3" class="img7 img-fluid" src="img/memorabiliacover.jpg" alt="person with lemon head standing next to person with orange head">
  `;
    myInterval = setInterval(fade, 100,targetVal, 1)
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
      <img id="img5" class="img7 img-fluid" src="img/kc mock22.png" alt="Kieran and Corrado website design">
      <img id="img5" class="img7 img-fluid" src="img/honey ginger mag mock.png" alt="honey ginger magazine mock up">
      <img id="img3" class="img7 img-fluid" src="img/hpbook.png" alt="One thousand magical herbs and fungi book cover with collage of plants">
      <img id="img3" class="img7 img-fluid" src="img/memo_cd2.png" alt="memorabilia cd design">
      <img id="img3" class="img7 img-fluid" src="img/krittercatchers_logos-02.png" alt="kritter catchers logo design">

`;
  myInterval= setInterval(fade, 100, targetVal, 1)

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
      src="img/ksf mock.png"
      class="card-img-top"
      alt="Knot So Funny Website Design"
  /></a>
  <div class="card-body">
  <h5 class="card-title">Knot So Funny</h5>
  <p class="card-text">
  Website Design
</p>
  </div>
</div>

<div id="card1" class="card mx-auto" style="max-width: 50vh">
  <a href="https://heyzine.com/flip-book/08c238dc66.html"
  ><img
      id="img7"
      class="img-fluid"
      src="img/hitrails better.png"
      class="card-img-top"
      alt="HiTrails App Design"
  /></a>
  <div class="card-body">
  <h5 class="card-title">HiTrails</h5>
  <p class="card-text">
   App Redesign
</p>
  </div>
</div>

<div id="card1" class="card mx-auto" style="max-width: 50vh">
<a href="https://heyzine.com/flip-book/08c238dc66.html"
><img
  id="img7"
  class="img-fluid"
  src="img/symphsyn.png"
  class="card-img-top"
  alt="Symphonic Synergy kiosk design"
/></a>
<div class="card-body">
<h5 class="card-title">Music and Me</h5>
<p class="card-text">
  Kiosk Design
</p>
</div>
</div>

<div id="card1" class="card mx-auto" style="max-width: 50vh">
<a href="https://heyzine.com/flip-book/08c238dc66.html"
><img
  id="img7"
  class="img-fluid"
  src="img/kritter mock.png"
  class="card-img-top"
  alt="Kritter Catchers Web Design"
/></a>
<div class="card-body">
<h5 class="card-title">Kritter Catchers</h5>
<p class="card-text">
  Logo and Website Design
</p>
</div>
</div>
`;
  myInterval= setInterval(fade, 100, targetVal, 1)

  } 
  
}

let fade = (targetVal, endOpacity)=>{
  let fadeOpacity = Number(
    window.getComputedStyle(images).getPropertyValue("opacity")
  );
  console.log("fade")
  isItRunning += 1 

  if (fadeOpacity !== endOpacity) {
    console.log(fadeOpacity, endOpacity)
    
    fadeOpacity > endOpacity ? fadeOpacity -= 0.1 : fadeOpacity += 0.1;
    images.style.opacity = fadeOpacity;
    graphic.style.opacity = fadeOpacity;
    logo.style.opacity = fadeOpacity;
    leftLink.style.opacity = fadeOpacity;
    rightLink.style.opacity = fadeOpacity;
  }

    if (fadeOpacity === endOpacity && endOpacity === 1){
      clearInterval(myInterval)
      isItRunning = 2
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
  if (isItRunning === 2){

      if (targetVal.includes("illustrations")) {
      
        console.log("illus");
        myInterval = setInterval(fade, 100, targetVal, 0);
      } else if (targetVal.includes("graphic")) {
        console.log("des");
        console.log(targetVal)
        myInterval = setInterval(fade, 100, targetVal, 0);
      } else if (targetVal.includes("ui")){
        console.log("ui")
        myInterval = setInterval(fade, 100, targetVal, 0)
      }
  }
  let endTime = dates[-1] +2600
  if (endTime > Date.now() ){
    console.log("etst")
      
  
  }

  console.log(targetVal)
};
links.addEventListener("click", linkInterval);