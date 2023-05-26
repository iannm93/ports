let scrollF = ()=>{
    let box = document.getElementById("box")
    let image = document.getElementById("selfie")
    let scrollY = window.scrollY

    // box.style.transform = `scale(${1 -(scrollY*.0005)}`
    box.style.opacity = 1 -(scrollY*.002)

    image.style.transform = `scale(${1 -(scrollY*.0005)}`
    image.style.opacity = 1 -(scrollY*.002)


    // grid.style.transform = `scale(${1 +(scrollY*.0001)}`
    // grid.style.opacity = 1 +(scrollY*.0012)

}

document.addEventListener("scroll", scrollF)