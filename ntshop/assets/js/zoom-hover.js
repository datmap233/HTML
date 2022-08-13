var areaZoom = document.querySelectorAll('.product__info-main-image-large')
var imgZoom = document.querySelectorAll('.product__info-main-image-show')
var scaleZoom = 3
var mulNumverX = (2 ** (scaleZoom) + 2) * 10
    // var mulNumverY = (2 ** (scaleZoom) + 2) * 10 180
if (document.querySelector('.web').clientWidth >= 1024)
    for (let index = 0; index < areaZoom.length; index++) {
        areaZoom[index].addEventListener('mousemove', function(event) {
            clientX = event.clientX - areaZoom[index].offsetLeft
            clientY = event.clientY - areaZoom[index].offsetTop

            mWidth = areaZoom[index].offsetWidth
            mHeight = areaZoom[index].offsetHeight

            clientX = -(clientX / mWidth - 0.6) * 180
            clientY = -(clientY / mHeight - 0.8) * 210
            imgZoom[index].style.transform = 'translate(' + clientX + '%,' + clientY + '%) scale(' + scaleZoom + ')'
        })
        areaZoom[index].addEventListener('mouseleave', function() {
            imgZoom[index].style.transform = 'none'
        })
    }