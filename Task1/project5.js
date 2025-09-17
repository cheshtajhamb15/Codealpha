var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");
var images=Array.from(document.querySelectorAll('.img-gallery img'));
var currentindex=0;
function openfullimg(pic) {
    currentindex=images.findIndex(img=> img.src==pic);

    fullimgbox.style.display = "flex";
    fullimg.src=pic;
}
function closefullimg(){
    fullimgbox.style.display="none";
}
function showNext(){
currentindex=(currentindex+1)% images.length;
fullimg.src=images[currentindex].src;
}
function showPrevios(){
currentindex=(currentindex-1 + images.length)% images.length;
fullimg.src=images[currentindex].src;
}
function closefullimg() {
    fullimgbox.style.display = "none";
}
