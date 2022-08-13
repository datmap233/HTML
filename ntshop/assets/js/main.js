// Mobile Menu
const menuBtn = document.querySelector('.mobile-menu')
const menuModal = document.querySelector('.mobile__header')
const menuModal_subBackground = document.querySelector('.mobile__header-sub-background')
const btnClose = document.querySelector('#header .closeBtn')
const btnClose_icon = document.querySelector('#header .closeBtn-icon')

function showMenu() {
    menuModal.classList.add('mobile__header--open')
    btnClose_icon.style.color = 'var(--white-color)'
}

function hideMenu() {
    menuModal.classList.remove('mobile__header--open')
}
menuBtn.addEventListener('click', showMenu)
btnClose.addEventListener('click', hideMenu)
menuModal_subBackground.addEventListener('click', hideMenu)





// Mobile Cart List
const CartBtn = document.querySelector('.header__cart-show')
const CartModal = document.querySelector('.mobile__cart')
const CartModal_subBackground = document.querySelector('.mobile__cart-sub-background')

function showCart() {
    CartModal.classList.add('mobile__cart--open')
    btnClose_icon.style.color = 'var(--text-color)'
}

function hideCart() {
    CartModal.classList.remove('mobile__cart--open')
}
CartBtn.addEventListener('click', showCart)
btnClose.addEventListener('click', hideCart)
CartModal_subBackground.addEventListener('click', hideCart)



//Scroll: Back to top
btnScroll = document.getElementById("go-to-top");
btnScrollHeader = document.getElementById("header");
var height = document.getElementById("header").scrollHeight;
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnScroll.classList.add('go-to-top--open')
        btnScroll.classList.remove('go-to-top--close')
    } else {
        btnScroll.classList.add('go-to-top--close')
        btnScroll.classList.remove('go-to-top--open')
    }
    if (document.body.scrollTop >= height || document.documentElement.scrollTop >= height) {
        btnScrollHeader.classList.add('header__scroll')
    } else if (document.body.scrollTop <= 46 && document.documentElement.scrollTop <= 46) {
        btnScrollHeader.classList.remove('header__scroll')
    }
}