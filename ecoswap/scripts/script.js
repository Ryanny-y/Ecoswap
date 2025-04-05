// Change quantity

// Seams Products
// const seamsItemHTML = products
import { getProducts } from "../data/products.js";
import { cart, addToCart, loadCart } from '../data/cart.js'; 
import { cartAnimation } from "./utils/cartAnimation.js";
import { user, getUserData } from "../data/user.js";

async function renderHomePage() {
  await getUserData();
  await loadCart(user._id);

  const products = await getProducts();

  cartAnimation();

  const cropsItemsHTML = products.map((item) => {
    return `
      <div
        class="item bg-gray-200 p-4 rounded-md flex items-center justify-start flex-col gap-1"
      >
        <img src="${`https://ecocycle-backend.onrender.com/images/crops/${item.image}`}" alt="Item Image" class="h-20 w-20" />

        <div class="grow">
          <p class="font-bold text-lg">${item.name}</p>
          <p class="text-sm">${item.description}</p>
          <p class="text-sm">${item.exchange_for} ${item.unit} of plastic bottles</p>
        </div>
        
        <button class="add-btn bg-sage text-white py-1 w-full" data-product-id=${item._id}>Add To Cart</button>
      </div>
    `;
  }).join('');

  const cropsContainer = document.querySelector('.crops-products-container');
  cropsContainer.innerHTML = cropsItemsHTML;


  // CART FUNCTIONALITIES 
  // load products from cart
  const cartProductsHTML = cart.map(item => {
    
    return `
    <div id="cart-item" class="flex items-center justify-start gap-3 px-2 py-5 border border-white relative rounded-md">
      <img src="https://ecocycle-backend.onrender.com/images/crops/${item.productId.image}" alt="" class="h-14">
      
      <div class="grow">
        <h1>${item.productId.name}</h1>
        <p>${item.productId.exchange_for} ${item.productId.unit} plastic bottles</p>
      </div>

      <div class="self-end justify-self-end bg-white w-14 relative h-8 rounded-md">
        <box-icon name='chevron-up' class="absolute right-0 -top-0.5"></box-icon>
        <input type="text" placeholder="1" class="w-10 h-full outline-none text-black text-center rounded-md" value="${item.quantity}">
        <box-icon name='chevron-down' class="absolute right-0 -bottom-0.5"></box-icon>
      </div>

      <box-icon name='trash' class="absolute top-2 right-2" color="red"></box-icon>
    </div>
    `
  }).join('');
  const cartItemContainer = document.querySelector('#cart-item-container');
  cartItemContainer.innerHTML = cartProductsHTML;

  // ADD TO CART
  cropsContainer.removeEventListener('click', handleAddToCart);
  cropsContainer.addEventListener('click', handleAddToCart, { capture: true });
}

async function handleAddToCart(e) {
  const target = e.target;
  if(target.nodeName === "BUTTON" && target.classList.contains('add-btn')) {
    const { productId } = target.dataset;
    
    await addToCart(user._id, productId);
    renderHomePage();
  }
}

renderHomePage();