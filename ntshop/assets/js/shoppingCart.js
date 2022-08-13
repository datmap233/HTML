var caclBtn = document.querySelector('.cart-selected__totals-btn')
var shippingItem = document.querySelector('.cart-selected__totals-shipping')
var heightShippingCalc = document.querySelector('.cart-selected__totals-address-ship').clientHeight
var caclInfoBtn = document.querySelector('.cart-selected__totals-address-ship')
    // caclInfoBtn.style.height = heightShipping - heightShippingCalc + 'px'
shippingItem.style.height = (shippingItem.clientHeight - heightShippingCalc) + 'px'

caclBtn.addEventListener('click', function(event) {
    if (shippingItem.classList != 'cart-selected__totals-shipping open')
        shippingItem.style.height = shippingItem.clientHeight + heightShippingCalc + 'px'
    shippingItem.classList.add('open')
})