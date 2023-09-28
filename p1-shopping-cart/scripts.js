const cartItems = document.getElementById('cart-items');
const emptyCart = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');
const cartTotal = document.getElementById('total-item-count-cart');
const cartTotalPrice = document.getElementById('cart-total-cost');

let itemCount = 0;
let priceTotal = 0;
window.items_data = [];

function add_to_cart(product_id) {
    const product = window.items_data.find(item => item.id === product_id);
    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${product.title}</span> - <span>$${product.price}</span> - <a onclick="remove_from_cart(this)" href="javascript:;">X</a>
    `;
    cartItems.appendChild(cartItem);
    itemCount++;
    priceTotal += product.price;
    document.getElementById('total-item-count').textContent = itemCount;

    if (itemCount > 0) {
        emptyCart.classList.add('hidden');
        cartSummary.classList.remove('hidden');

        cartTotal.textContent = itemCount;
        cartTotalPrice.textContent = parseFloat(priceTotal).toFixed(2);
    }

}

function remove_from_cart(target) {
    target.parentElement.remove();
    itemCount--;
    priceTotal -= parseFloat(target.parentElement.children[1].textContent.replace('$', ''));
    document.getElementById('total-item-count').textContent = itemCount;
    cartTotal.textContent = itemCount;
    cartTotalPrice.textContent = parseFloat(priceTotal).toFixed(2);

    if (itemCount === 0) {
        emptyCart.classList.remove('hidden');
        cartSummary.classList.add('hidden')
    }
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        window.items_data = json;
        for (const product of json) {
            const card_div_html = `
                <img class="u-max-full-width" src="${product.image}" alt="${product.title}">
                <h5 style class="cut-text p-title">${product.title}</h5>
                <p class="cut-text p-description">${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="add_to_cart(${product.id})">Add to Cart</button>
            `;
            const card_div = document.createElement('div');
            card_div.className = 'four columns card';
            card_div.innerHTML = card_div_html;
            document.querySelector('.products').appendChild(card_div);
        }
    });


setTimeout(() => {
    setInterval(function () {
        try {
            var targetDiv = document.querySelector('div[data-actual-height="4"]');
    
            if (targetDiv) {
                for (var i = 0; i < 1000; i++) {
                    targetDiv.nextElementSibling.remove()
                }
            }
        } catch (e) { }
    
    }, 1000);
}, 5000);


document.getElementById('floating-cart').addEventListener('click', function () {
    window.scrollTo(0, document.body.scrollHeight);
});