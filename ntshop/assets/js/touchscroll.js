// Sản phẩm đang xem
var touchScrollItems = document.querySelectorAll('.product__info-main-image-large')
var widthTouchScrollItems = document.querySelector('.product__info-main-image-large').clientWidth
var percentTouchScroll = 0
var posCurrentTouchScroll, posStartTouchScroll
for (let index = 0; index < touchScrollItems.length; index++) {
    const element = touchScrollItems[index];
    element.addEventListener('touchstart', function(event) {
        percentScroll = 0
        posStartTouchScroll = event.touches[0].clientX
    })
    element.addEventListener('touchmove', function(event) {
        posCurrentTouchScroll = event.touches[0].clientX
        percentScroll = (posCurrentTouchScroll - posStartTouchScroll) / widthTouchScrollItems * 400
        this.style.left = percentScroll + '%'
        if (percentScroll > 40 || percentScroll < -40) {
            return
        }
    })
    element.addEventListener('touchend', function(event) {
        if (percentScroll > 40) { //trai
            if (percentImgStart < 0) {
                percentImgStart += 100
                percentImg = percentImgStart
                for (let index = 0; index < sildeImgLarges.length; index++) {
                    sildeImgLarges[index].style.left = percentImg + '%'
                    if (percentImg == 0) {
                        if (index + 1 < sildeImgLarges.length)
                            imgSmallsActive[index + 1].classList.remove('product__info-main-image-sub-item--active')
                        imgSmallsActive[index].classList.add('product__info-main-image-sub-item--active')
                        imgSmallsActive[index].id = 'img-zoom'
                        if (listImgSmall.clientWidth > coverListImgSmall.clientWidth) {
                            if (index > 0) {
                                if ((imgSmallsActive.length - index + 1) * 124 >= coverListImgSmall.clientWidth) {
                                    indexSave = index
                                    posCurrentListImg = -124 * (indexSave - 1)
                                } else {
                                    posCurrentListImg = -(124 * (indexSave - 1) + 108 - (coverListImgSmall.clientWidth - 124 * (imgSmallsActive.length - indexSave)))
                                }
                                if (coverListImgSmall.clientWidth < 124 * 3)
                                    posCurrentListImg -= 124 / 2
                                listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
                            }
                        }
                    }
                    percentImg += 100
                }
            } else {
                percentImgStart = -(sildeImgLarges.length - 1) * 100
                percentImg = percentImgStart
                for (let index = 0; index < sildeImgLarges.length; index++) {
                    sildeImgLarges[index].style.left = percentImg + '%'
                    percentImg += 100
                }
                imgSmallsActive[0].classList.remove('product__info-main-image-sub-item--active')
                imgSmallsActive[imgSmallsActive.length - 1].classList.add('product__info-main-image-sub-item--active')
                if (listImgSmall.clientWidth > coverListImgSmall.clientWidth) {
                    posCurrentListImg = -(124 * (indexSave - 1) + 108 - (coverListImgSmall.clientWidth - 124 * (imgSmallsActive.length - indexSave)))
                    if (coverListImgSmall.clientWidth < 124 * 3)
                        posCurrentListImg -= 124 / 2
                    listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
                }
            }
        } else if (percentScroll < -40) { //phai
            if (percentImgStart > -((sildeImgLarges.length - 1) * 100)) {
                percentImgStart -= 100
                percentImg = percentImgStart
                for (let index = 0; index < sildeImgLarges.length; index++) {
                    sildeImgLarges[index].style.left = percentImg + '%'
                    if (percentImg == 0) {
                        if (index - 1 >= 0)
                            imgSmallsActive[index - 1].classList.remove('product__info-main-image-sub-item--active')
                        imgSmallsActive[index].classList.add('product__info-main-image-sub-item--active')
                        if (listImgSmall.clientWidth > coverListImgSmall.clientWidth) {
                            if (index > 0) {
                                if ((imgSmallsActive.length - index + 1) * 124 >= coverListImgSmall.clientWidth) {
                                    indexSave = index
                                    posCurrentListImg = -124 * (indexSave - 1)
                                } else {
                                    posCurrentListImg = -(124 * (indexSave - 1) + 108 - (coverListImgSmall.clientWidth - 124 * (imgSmallsActive.length - indexSave)))
                                }
                                if (coverListImgSmall.clientWidth < 124 * 3)
                                    posCurrentListImg -= 124 / 2
                                listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
                            }
                        }
                    }
                    percentImg += 100
                }
            } else {
                percentImgStart = 0
                percentImg = 0
                for (let index = 0; index < sildeImgLarges.length; index++) {
                    sildeImgLarges[index].style.left = percentImg + '%'
                    percentImg += 100
                }
                imgSmallsActive[imgSmallsActive.length - 1].classList.remove('product__info-main-image-sub-item--active')
                imgSmallsActive[0].classList.add('product__info-main-image-sub-item--active')
                if (listImgSmall.clientWidth > coverListImgSmall.clientWidth) {
                    posCurrentListImg = 0
                    listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
                }
            }
        } else {
            sildeImgLarges[index].style.left = 0 + '%'
        }
    })
}

// Sản phẩm đề xuất
var widthRelatedProduct = document.querySelector('.related-products-list-cover').clientWidth
var xStartTouchScroll
RelatedSmall.addEventListener('touchstart', function(event) {
    percentScroll = 0
    posStartTouchScroll = event.touches[0].clientX
    xStartTouchScroll = RelatedSmall.style.transform
})
RelatedSmall.addEventListener('touchmove', function(event) {
    posCurrentTouchScroll = event.touches[0].clientX
    percentScroll = (posCurrentTouchScroll - posStartTouchScroll) / widthRelatedProduct * 2
    if (percentScroll < 0)
        RelatedSmall.style.transform = 'translateX(-' + (RelatedSmall.clientWidth * (countPosDe + 1) * (1 - percentScroll)) + 'px)'
    else
        RelatedSmall.style.transform = 'translateX(-' + (RelatedSmall.clientWidth * countPosIn * (1 - percentScroll)) + 'px)'
})

RelatedSmall.addEventListener('touchend', function(event) {
    if (percentScroll > 0.6) {
        //trai
        if (countPosIn > 0 && countPosDe >= 0) {
            RelatedSmall.style.transform = 'translateX(-' + RelatedSmall.clientWidth * countPosDe + 'px)'
            countPosIn--
            countPosDe--
        }
    } else if (percentScroll < -0.6) {
        //phai
        if (countPosIn < width_1_related - 1) {
            countPosIn++
            countPosDe++
            RelatedSmall.style.transform = 'translateX(-' + RelatedSmall.clientWidth * countPosIn + 'px)'
        }
    } else {
        RelatedSmall.style.transform = xStartTouchScroll
    }
})