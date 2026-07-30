const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex=index;
        showImage();
        lightbox.style.display="flex";
    });
});

function showImage(){
    lightboxImg.src=images[currentIndex].src;
}

closeBtn.addEventListener("click",()=>{
    lightbox.style.display="none";
});

nextBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex+1)%images.length;
    showImage();
});

prevBtn.addEventListener("click",()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    showImage();
});