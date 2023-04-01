let [cardOne, images, logo, links, leftLink, rightLink, graphic] = document.querySelectorAll("#cardOne, #grid, .me-ok, #flexbox, .purple, .purp, .font-st")
let temp = window.getComputedStyle(leftLink).getPropertyValue("opacity");
let myInterval;

// KALI LOOK FOR THIS WHEN YOU'RE UPDATING YOUR PICTURES
let updateContent = (targetVal) =>{
  if(targetVal.includes("illustrations")){

    leftLink.innerHTML = `< see graphic designs`;
    logo.src = "./img/me_ok.png";
    graphic.textContent = "illustration";
    // put all your pictures for the illustrations grid inside the variable below
    images.innerHTML = `
    <a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid"src="img/dropouts mock.png" alt="Honey Ginger Magazine front, back and spine"></a>
      <img id="img2" class="img7 img-fluid" src="img/around the sun album cover.png" alt="Around the Sun album cover alone and on spotify">
      <img id="img3" class="img7 img-fluid" src="img/Acl ad mock.png" alt="Austin City Limits Ad on Billboard">
      <img id="img4" class="img7 img-fluid" src="img/kss.png" alt="Kalani Surf School Design on white T shirt">
  `;
    myInterval = setInterval(fade, 100,targetVal, 1)
  } 
  else if (targetVal.includes("graphic")){
    leftLink.innerHTML = `< see illustrations`;
  logo.src = "./img/me_point.png";
  graphic.textContent = "graphic design";
    // put all your pictures for the graphic designs grid inside the variable below
  images.innerHTML = 
  `<a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid" src="img/dropouts mock.png" alt="Honey Ginger Magazine front, back and spine"></a>
      <img id="img2" class="img7 img-fluid" src="img/around the sun album cover.png" alt="Around the Sun album cover alone and on spotify">
      <img id="img3" class="img7 img-fluid" src="img/Acl ad mock.png" alt="Austin City Limits Ad on Billboard">
      <img id="img4" class="img7 img-fluid" src="img/kss.png" alt="Kalani Surf School Design on white T shirt">
`;
  myInterval= setInterval(fade, 100, targetVal, 1)

  } 
  else if (targetVal.includes("ux")){
    rightLink.innerHTML = `see illustrations >`;
  logo.src = "./img/me_thumbs.png";
  graphic.textContent = "UX/UI";
    // put all your pictures for the ux/ui grid inside the variable below
  images.innerHTML = 
  `<a href="https://online.fliphtml5.com/vnnyr/abxc/#p=1"><img  id="img1" class="img7 img-fluid" src="img/dropouts mock.png" alt="Honey Ginger Magazine front, back and spine"></a>
      <img    id="img2" class="img7 img-fluid"
      src="img/around the sun album cover.png"
      alt="Around the Sun album cover alone and on spotify">
      <img id="img3" class="img7 img-fluid" src="img/Acl ad mock.png" alt="Austin City Limits Ad on Billboard">
      <img id="img4" class="img7 img-fluid" src="img/kss.png" alt="Kalani Surf School Design on white T shirt">
`;
  myInterval= setInterval(fade, 100, targetVal, 1)

  } 
  
}

let fade = (targetVal, endOpacity)=>{
  let fadeOpacity = Number(
    window.getComputedStyle(images).getPropertyValue("opacity")
  );
  console.log("fade")

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
};
links.addEventListener("click", linkInterval);