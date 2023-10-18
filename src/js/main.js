window.addEventListener("scroll", () => {
    const headerBottom = document.querySelector(".header-bottom")
    let headerPos = window.scrollY;
    if(headerPos > 0){
        headerBottom.classList.add("header-bottom__active")
    }else{
        headerBottom.classList.remove("header-bottom__active")
    }
})
