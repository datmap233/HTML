// Menu sắp xếp sản phẩm
const menuProductBtn = document.querySelector('.products__heading-link-sort')
const menuProductModal = document.querySelector('.link-sort')
const menuProductModal_subBackground = document.querySelector('.link-sort-sub-background')
const btnProductClose = document.querySelector('#container .closeBtn')
const btnProductClose_icon = document.querySelector('#container .closeBtn-icon')

function showProductMenu() {
    menuProductModal.classList.add('link-sort--open')
    btnProductClose_icon.style.color = 'var(--white-color)'
}

function hideProductMenu() {
    menuProductModal.classList.remove('link-sort--open')
}
menuProductBtn.addEventListener('click', showProductMenu)
btnProductClose.addEventListener('click', hideProductMenu)
menuProductModal_subBackground.addEventListener('click', hideProductMenu)

// Search Giá
const filterBtn = document.querySelectorAll('#container .link-sort__active-filter')
console.log(filterBtn)
const btnFilter = document.querySelector('#container .link-sort__filter-btn')
const minPrice = document.querySelectorAll('#container .product-price-min')
const maxPrice = document.querySelectorAll('#container .product-price-max')
var minPriceCurrent, maxPriceCurrent

function showfilter() {
    for (let index = 0; index < filterBtn.length; index++) {
        filterBtn[index].classList.remove('link-sort__no-active-filter')
        minPrice[index].innerHTML = minPriceCurrent
        if (maxPriceCurrent == 'Không giới hạn')
            maxPrice[index].innerHTML = 'ထ'
        else
            maxPrice[index].innerHTML = maxPriceCurrent
    }
}
btnFilter.addEventListener('click', showfilter)


// Giới hạn giá cả sản phẩm

function formatSliderValues(value) {
    if (value == null) return 'Không giới hạn';
    var formattedNumber = value.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formattedNumber;
}

var values = [0, 100000, 200000, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000,
    4000000, 4500000, 5000000, 5500000, 6000000, 6500000, 7000000, 7500000, 8000000, 8500000,
    9000000, 9500000, 10000000, null
];

// Currency
var formatter = new Intl.NumberFormat("es-vi", {
    currency: 'VND',
})
$("#slider-range").slider({
    range: true,
    max: values.length - 1,
    values: [values[0], values.length - 1],
    slide: function(event, ui) {
        if (values[ui.values[0]] != null) {
            var min = values[ui.values[0]];
            var max = values[ui.values[1]];
            $("[name=min]").val(min);
            $("[name=max]").val(max);
            min = formatSliderValues(min)
            max = formatSliderValues(max)
            minPriceCurrent = formatter.format(min), maxPriceCurrent = max
            $("#min").text(minPriceCurrent + 'đ');
            if (max !== 'Không giới hạn') {
                maxPriceCurrent = formatter.format(max)
                $("#max").text(maxPriceCurrent + 'đ');
            } else
                $("#max").text(max);
        }
    }
});
/* show initial values */
var min = values[$("#slider-range").slider("values", 0)];
var max = values[$("#slider-range").slider("values", 1)];
$("[name='min]'").val(min);
$("[name='max]'").val(max);
min = formatSliderValues(min)
max = formatSliderValues(max)
$("#min").text(formatter.format(min) + 'đ');
minPriceCurrent = min, maxPriceCurrent = max
if (max !== 'Không giới hạn') {
    maxPriceCurrent = formatter.format(max)
    $("#max").text(maxPriceCurrent + 'đ');
} else
    $("#max").text(max);