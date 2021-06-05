const photo_btn = document.querySelector(".photo_btn");
const images = document.querySelector(".images");

photo_btn.addEventListener("click", generate_images);
function generate_images(){
    console.log("111");
    images.innerHTML = "<p>Hii</p>";
    
};
// generate_images();