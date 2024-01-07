const slideshow = document.querySelector(".slideshow-container")
//console.log(slideshow.childNodes)
const allSlides =  slideshow.querySelectorAll("div.mySlides.fade")
const prev = slideshow.querySelector(".prev")
const next = slideshow.querySelector(".next")
const dottarna = slideshow.querySelector(".dottarna")


let activeIndex = 0
let totalCount = allSlides.length
const setActiveSlide = function(index){
    activeIndex = index
    for(let i = 0; i < totalCount; i++){
        if (i === index){
            allSlides[i].style.display="block";
            dottarna.querySelectorAll("span.dot")[i].classList.add("active")
        }else {
            allSlides[i].style.display="none";
            dottarna.querySelectorAll("span.dot")[i].classList.remove("active")
        }
    }
}


prev.addEventListener("click",function(){
    if(activeIndex === 0){
        activeIndex = totalCount - 1
    }else{
        activeIndex = activeIndex - 1 
    }
    setActiveSlide(activeIndex)
})


next.addEventListener("click",function(){
    if(activeIndex === totalCount - 1){
        activeIndex = 0
    }else{
        activeIndex = activeIndex + 1 
    }
    setActiveSlide(activeIndex)
})


for(let i = 0;i < totalCount; i++){
    let span = document.createElement("span")
    span.classList.add("dot")
    dottarna.appendChild(span)

    span.addEventListener("click",function(){
        console.log("aaa")
        setActiveSlide(i)        
    })


    //<div class="mySlides fade">
    let el = allSlides[i].querySelector("div.numbertext") 
    el.textContent = (i+1) + " / " +  totalCount
}

setActiveSlide(0)
