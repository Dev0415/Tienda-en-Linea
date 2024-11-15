const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const quantityDisplay = document.getElementById('quantity');
    let quantity = 1;

    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });
    let currentSlide = 0;

  // Array para almacenar los productos en el carrito
let cart = [];

// Actualizar la visualización del contador del carrito
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Calcular el total del carrito
function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2); // Redondea a dos decimales
}

// Función para mostrar los productos en el carrito junto con el total
function showCartItems() {
    let cartItems = document.createElement('div');
    cartItems.setAttribute('id', 'cart-items');
    cartItems.style.position = 'absolute';
    cartItems.style.top = '50px';
    cartItems.style.right = '20px';
    cartItems.style.backgroundColor = '#fff';
    cartItems.style.padding = '10px';
    cartItems.style.border = '1px solid #ccc';
    cartItems.innerHTML = "<h4>Tu Carrito</h4>";

    // Mostrar cada producto en el carrito
    cart.forEach(item => {
        let product = document.createElement('p');
        product.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(product);
    });

    // Mostrar el total
    let total = document.createElement('p');
    total.innerHTML = `<strong>Total: $${calculateTotal()}</strong>`;
    cartItems.appendChild(total);

    // Limpiar elementos anteriores antes de mostrar
    let existingCartItems = document.getElementById('cart-items');
    if (existingCartItems) {
        existingCartItems.remove();
    }
    document.body.appendChild(cartItems);
}

// Escuchar el clic en el ícono del carrito para mostrar los elementos agregados
document.getElementById('cart-icon').addEventListener('click', showCartItems);

// Escuchar el clic en cada botón "Agregar al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let productName = button.getAttribute('data-name');
        let productPrice = parseFloat(button.getAttribute('data-price'));

        // Agregar el producto al array del carrito
        cart.push({ name: productName, price: productPrice });

        // Actualizar el contador del carrito
        updateCartCount();
    });
});
