
//********************************* */
// update products price  in checkout
function calculateTotalPriceForAllProducts() {
    let totalPriceForAllProducts = 0;

    document.querySelectorAll('[data-product-quantity]').forEach(function (el) {
        let newVal = el.value;
        let parent = el.parentElement.parentElement;
        let pricePerUnit =  parent.getAttribute("data-product-price");
        let totalPrice = newVal * pricePerUnit;
        let totalPriceOfProduct = el.parentElement.nextElementSibling;
        totalPriceOfProduct.innerHTML = `${totalPrice}$`;
        totalPriceForAllProducts = totalPriceForAllProducts + totalPrice; 
        document.getElementById("total-price-for-all-products").innerHTML = `${totalPriceForAllProducts}$`;
    });
}

window.onload = calculateTotalPriceForAllProducts();

document.querySelectorAll("[data-remove-from-cart]").forEach(function (el) {
    el.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
        calculateTotalPriceForAllProducts();
    })
});

document.querySelectorAll('[data-product-quantity]').forEach(function (el) {
    el.addEventListener('change', function () {
        calculateTotalPriceForAllProducts();
    });
});
//********************************* */
