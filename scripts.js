
//open menu
document.getElementById("open").addEventListener("click", function(){
    document.getElementById("nav-list").classList.add("active")
})

//close menu
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("nav-list").classList.remove("active")
})

//slider
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

console.log(slides);
console.log(indicatorImages);

for(let i=0; i<indicatorImages.length; i++){
    indicatorImages[i].addEventListener("click", function(){
        
        for(let j=0; j<indicatorImages.length; j++){
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id = this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    })
}
