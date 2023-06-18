let checkTotal = 0;

displayCheck = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let item = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    for(let i = 0; i < data.lenght; i++) {
        let name = data[i].subName;
        let bread = data[i].breadType;
        let cooked = data[i].subToppings;
        let toppings = data[i].sauce;
        let price = data[i].superSubTotal;

        checkTotal += price;


        items.innerHTML += `
        <div class="orderLine">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Bread:</strong>${bread}</p>
            <p><strong>Cooked:</strong>${cooked}</p>
            <p><strong>Toppings:</strong>${toppings.join(', ')}</p>
            <p><strong>Sauce:</strong>${sauce}</p>
        </div>
        `
        totalArea.innerHTML = "R" + checkTotal + ".00";

    }
}

addDiscount = () => {
    let discount = document.getElementById('totalOut').value;
    if (discount === "3182") {
        checkTotal = checkTotal - (0.2*100);
    }
    discount.innerHTML = `<h2 id="totalOut" class="total">R ${checkTotal}</h2>`
}

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../index.html'
}
