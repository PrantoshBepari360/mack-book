// Total price function
function totalPrice() {
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery').innerText);
    const BetaPrice = parseFloat(document.getElementById('beta-price').innerText);
    const grandTotal = memoryCost + storageCost + deliveryCost + BetaPrice;
    document.getElementById('total-price').innerText = grandTotal;
    document.getElementById('sub-total').innerText = grandTotal;
}

// col function
document.getElementById('memory-8gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '0';
    totalPrice();
});

document.getElementById('memory-16gb').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = '180';
    totalPrice();
});

document.getElementById('storage-256gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '0';
    totalPrice();
});

document.getElementById('storage-512gb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '100';
    totalPrice();
});

document.getElementById('storage-1tb').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = '180';
    totalPrice();
});

document.getElementById('delivery-free').addEventListener('click', function () {
    document.getElementById('delivery').innerText = '0';
    totalPrice();
});

document.getElementById('delivery-charge').addEventListener('click', function () {
    document.getElementById('delivery').innerText = '20';
    totalPrice();
});

// pomo code stevekaku discount 20%
document.getElementById('pomo-button').addEventListener('click', function () {
    const userPomoCode = document.getElementById('pomo-input');
    const pomoCode = userPomoCode.value;

    if (pomoCode == 'stevekaku') {
        const subTotal = document.getElementById('sub-total').innerText;
        const descountTotal = parseFloat(subTotal);
        const descount = (descountTotal / 100) * 20;
        document.getElementById('sub-total').innerText = descountTotal - descount;
        userPomoCode.value = '';
    } else {
        alert('Your code is not valid please try again, pomo code is (stevekaku).');
    }
});