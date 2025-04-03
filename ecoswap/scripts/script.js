const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const cartSection = document.getElementById('cart');

cartBtn.addEventListener('click', () => {
  cartSection.classList.remove('translate-x-full');
});

closeCartBtn.addEventListener('click', () => {
  cartSection.classList.add('translate-x-full');
});

// Change quantity

