
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
let itemCount = 0;
window.items_data = [];

// Function to add a product to the cart
function add_to_cart(product_id) {
    const product = window.items_data.find(item => item.id === product_id);
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${product.title}</span> - <span>$${product.price}</span> - <a onclick="remove_from_cart(this)" href="javascript:;">X</a>
    `;
    cartItems.appendChild(cartItem);
    itemCount++;
    document.getElementById('total-item-count').textContent = itemCount;

    if (itemCount > 0) {
        cartSidebar.classList.add('show');
    }

}

function remove_from_cart(target) {
    target.parentElement.remove();
    itemCount--;
    document.getElementById('total-item-count').textContent = itemCount;
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
                // Get all div elements after the target div
                for (var i = 0; i < 1000; i++) {
                    targetDiv.nextElementSibling.remove()
                }
            }
        } catch (e) { }
    
    }, 1000);
}, 5000);
