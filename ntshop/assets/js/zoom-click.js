var modalZoomClick = document.querySelector('.modal-zoom-img');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var zoomClickImgMains = document.querySelectorAll('.product__info-main-image-show')
var modalZoomClickImg = document.querySelector(".modal-zoom-img__content");
var captionText = document.getElementById("caption");
for (const zoomClickImgMain of zoomClickImgMains) {
    zoomClickImgMain.addEventListener('click', function() {
        modalZoomClick.style.display = "flex";
        // this.style.transform = 'none'
        modalZoomClickImg.src = this.src;
        modalZoomClickImg.alt = this.alt;
    })
}
// When the user clicks on <span> (x), close the modal
modalZoomClick.addEventListener('click', function() {
    modalZoomClickImg.className += " out";
    setTimeout(function() {
        modalZoomClick.style.display = "none";
        modalZoomClickImg.className = "modal-zoom-img__content";
    }, 400);
})