let cardOne = document.getElementById("card1") 
let images = document.images
let illustrations = document.getElementById("ui-ux");



let slideOne = ()=>{
    for (let i =1; i <images.length; i ++){
        images[i].style.cssText=`transform-origin: -200% -200%;
                              transform: rotate(35deg);
                              transition: .5s ease-in`
    }

    // console.log(images.length)
    // images.style.cssText = `transform-origin: -200% -200%;
    //                         transform: rotate(35deg);
    //                         transition: .5s ease-in `
                            
}
// slideOne()
illustrations.addEventListener("click", slideOne)