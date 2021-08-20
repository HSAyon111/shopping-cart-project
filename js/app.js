function productPurchase(product, isIncrease, price) {
    // update product quantity
    const productInput = document.getElementById(product + '-input');
    let productQuantity = parseInt(productInput.value);
    if (isIncrease == true) {
        productQuantity = productQuantity + 1;
    }
    else if (productQuantity > 0) {
        productQuantity = productQuantity - 1;
    }
    productInput.value = productQuantity;
    // update product price
    const priceField = document.getElementById(product + '-price');
    const updatedPrice = productQuantity * price;
    priceField.innerText = updatedPrice;
    // get total price
    calculateTotal();
}

function getProductQuantity(product) {
    const productInput = document.getElementById(product + '-input');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}
function calculateTotal() {
    const phoneTotal = getProductQuantity('phone') * 1219;
    const caseTotal = getProductQuantity('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    // set total price to the website
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

// handle phone increase-decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    productPurchase('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    productPurchase('phone', false, 1219)
});

// handle case increase-decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    productPurchase('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    productPurchase('case', false, 59);
});