// Căn giữa ảnh
var heightListImg = document.querySelectorAll('.product__info-main-image-sub-item-img')
for (let index = 0; index < heightListImg.length; index++) {
    var margin_Top = (heightListImg[index].clientHeight - 115)
    heightListImg[index].style.marginTop = '-' + margin_Top + 'px'
}



//Tăng giảm số lượng
const btnSum = document.querySelectorAll('.product__info-main-quantily-sum')
const btnSub = document.querySelectorAll('.product__info-main-quantily-sub')
var quanity = document.querySelectorAll('.quantily-value')
for (let index = 0; index < btnSum.length; index++) {
    const element = btnSum[index];
    element.addEventListener('click', function(params) {
        console.log(quanity[index].value)
        parseInt(quanity[index].value, 10)
        quanity[index].value++
    })
}
for (let index = 0; index < btnSub.length; index++) {
    const element = btnSub[index];
    element.addEventListener('click', function(params) {
        parseInt(quanity[index].value, 10)
        if (quanity[index].value != 1)
            quanity[index].value--
    })
}


// Chọn màu

var colorBtns = document.querySelectorAll('.product__info-main-color-item')
var colorCurrent = document.querySelector('.product__info-main-color-current')
var listColor = ['White', 'Black']
for (let index = 0; index < colorBtns.length; index++) {
    colorBtns[index].addEventListener('click', function(params) {
        if (colorBtns[index].style.outlineWidth == '2px') {
            colorBtns[index].style.outline = 'none'
            colorCurrent.innerHTML = null
        } else {
            colorCurrent.innerHTML = ': ' + listColor[index]
            for (let indexSub = 0; indexSub < colorBtns.length; indexSub++) {
                colorBtns[indexSub].style.outline = 'none'
            }
            colorBtns[index].style.outline = '2px solid #ccc'
        }
    })
}

// Chọn size

var sizeBtns = document.querySelectorAll('.product__info-main-size-item')
var sizeCurrent = document.querySelector('.product__info-main-size-current')
for (let index = 0; index < sizeBtns.length; index++) {
    sizeBtns[index].addEventListener('click', function(params) {
        if (sizeBtns[index].style.outlineWidth == '2px') {
            sizeBtns[index].style.outline = 'none'
            sizeCurrent.innerHTML = null
        } else {
            sizeCurrent.innerHTML = ': ' + sizeBtns[index].textContent
            for (let indexSub = 0; indexSub < sizeBtns.length; indexSub++) {
                sizeBtns[indexSub].style.outline = 'none'
            }
            sizeBtns[index].style.outline = '2px solid #ccc'
        }
    })
}

// Xóa lựa chọn: Màu, size

var clearColorSize = document.querySelector('.btn-clear')
clearColorSize.addEventListener('click', function(params) {
    for (let index = 0; index < sizeBtns.length; index++) {
        sizeBtns[index].style.outline = 'none'
    }
    for (let index = 0; index < colorBtns.length; index++) {
        colorBtns[index].style.outline = 'none'
    }
    sizeCurrent.innerHTML = colorCurrent.innerHTML = null
})


//Xem thêm List ảnh

var btnListImgLeft = document.querySelector('.product__info-main-image-btn-left')
var btnListImgRight = document.querySelector('.product__info-main-image-btn-right')
var listImgSmall = document.querySelector('.product__info-main-image-sub-list')
var coverListImgSmall = document.querySelector('.product__info-main-image-sub')
var limitWidth = listImgSmall.clientWidth
var posCurrentListImg = 0
btnListImgLeft.addEventListener('click', function(params) {
    if (posCurrentListImg < 0) {
        posCurrentListImg += 124
        listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
    }
})
btnListImgRight.addEventListener('click', function(params) {
    if (listImgSmall > coverListImgSmall.clientWidth) {
        if (-coverListImgSmall.clientWidth < posCurrentListImg - 124) {
            posCurrentListImg -= 124
            listImgSmall.style.transform = 'translateX(' + posCurrentListImg + 'px)'
        }
    }
})

// Slide image
var btnSlideLeft = document.querySelector('.product__info-main-image-btn-slide-left')
var btnSlideRight = document.querySelector('.product__info-main-image-btn-slide-right')
var sildeImgLarges = document.querySelectorAll('.product__info-main-image-large')
var slideImg = document.querySelector('.product__info-main-image')
var percentImg = 0
var percentImgStart = 0

var imgSmalls = document.querySelectorAll('.product__info-main-image-sub-item-img')
var imgSmallsActive = document.querySelectorAll('.product__info-main-image-sub-item')
var imgLarge = document.querySelector('.product__info-main-image-show')


for (const sildeImgLarge of sildeImgLarges) {
    sildeImgLarge.style.left = percentImg + '%'
    percentImg += 100
}
btnSlideLeft.addEventListener('click', function(params) {
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
})
btnSlideRight.addEventListener('click', function(params) {
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
})


// Sub Image
var indexSave = 0
for (let index = 0; index < imgSmalls.length; index++) {
    imgSmalls[index].addEventListener('click', function(params) {
        percentImgStart = -index * 100
        percentImg = percentImgStart
        for (const sildeImgLarge of sildeImgLarges) {
            sildeImgLarge.style.left = percentImg + '%'
            percentImg += 100
        }
        for (let indexSub = 0; indexSub < imgSmallsActive.length; indexSub++) {
            imgSmallsActive[indexSub].classList.remove('product__info-main-image-sub-item--active')
        }
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
    })
}


//Thu Phóng Mô Tả

var btnOpenCloseDecriptions = document.querySelectorAll('.product__info-body-heading')
var btnOpenCloseContents = document.querySelectorAll('.product__info-title')

var scrollHeightDecriptions

for (let index = 0; index < btnOpenCloseDecriptions.length; index++) {
    btnOpenCloseDecriptions[index].addEventListener('click', function(event) {
        scrollHeightDecriptions = [btnOpenCloseContents[0].scrollHeight, btnOpenCloseContents[1].scrollHeight, btnOpenCloseContents[2].scrollHeight]
        if (btnOpenCloseContents[index].className == 'product__info-title close') {
            btnOpenCloseContents[index].classList.add('open')
            btnOpenCloseContents[index].classList.remove('close')
            btnOpenCloseContents[index].style.maxHeight = scrollHeightDecriptions[index] + 'px'
        } else {
            btnOpenCloseContents[index].style.maxHeight = '52px'
            btnOpenCloseContents[index].classList.remove('open')
            btnOpenCloseContents[index].classList.add('close')
        }
    })
}

//Related Products

var btnRelatedLeft = document.querySelector('.related-products-btn-slide-left')
var btnRelatedRight = document.querySelector('.related-products-btn-slide-right')
var RelatedSmall = document.querySelector('.related-products-list-cover')
var lengthRelated = document.querySelectorAll('.related-products-item').length
var widthRelated = document.querySelector('.related-products-item').clientWidth
var allRelated = widthRelated * lengthRelated
var width_1_related = allRelated / RelatedSmall.clientWidth
width_1_related = width_1_related.toFixed(0)
var countPosIn = 0
var countPosDe = -1
btnRelatedLeft.addEventListener('click', function(params) {
    if (countPosIn > 0 && countPosDe >= 0) {
        RelatedSmall.style.transform = 'translateX(-' + RelatedSmall.clientWidth * countPosDe + 'px)'
        countPosIn--
        countPosDe--
    }
})
btnRelatedRight.addEventListener('click', function(params) {
    if (countPosIn < width_1_related - 1) {
        countPosIn++
        countPosDe++
        RelatedSmall.style.transform = 'translateX(-' + RelatedSmall.clientWidth * countPosIn + 'px)'
    }
})