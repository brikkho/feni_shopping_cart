let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
