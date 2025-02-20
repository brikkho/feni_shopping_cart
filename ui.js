function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>BDT ${product.price}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function updateCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  cartItemsDiv.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    if (item.quantity <= 0) item.quantity = 1;
    total += item.price * item.quantity;
    count += item.quantity;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.innerHTML = `
      <span>${item.name} x ${item.quantity}=</span>
      <span>BDT ${item.price * item.quantity}=</span>
    `;
    cartItemsDiv.appendChild(cartItemDiv);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

document.getElementById('clear-cart').addEventListener('click', clearCart);

document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    let summary = 'Order Summary:\n';
cart.forEach(item => {
  summary += `${item.name} x ${item.quantity} = BDT ${item.price * item.quantity}\n`;
});
summary += `Total: BDT ${calculateTotal()}`;
alert(summary);

  }
});

renderProducts();
