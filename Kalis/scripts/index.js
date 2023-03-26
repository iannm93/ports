let scrollF = ()=>{
    let box = document.getElementById("box")
    let grid = document.getElementById("grid")
    let scrollY = window.scrollY

    box.style.transform = `scale(${1 -(scrollY*.0005)}`
    box.style.opacity = 1 -(scrollY*.002)

    // grid.style.transform = `scale(${1 +(scrollY*.0001)}`
    // grid.style.opacity = 1 +(scrollY*.0012)

}

document.addEventListener("scroll", scrollF)