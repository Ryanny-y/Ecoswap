// Change quantity

// Seams Products
// const seamsItemHTML = products
import { getProducts } from "../data/products.js";
import { addToCart } from '../data/cart.js'; 
import { cartAnimation } from "./utils/cartAnimation.js";

async function renderHomePage() {
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
  cropsContainer.addEventListener('click', async (e) => {
    const target = e.target;
    if(target.nodeName === "BUTTON" && target.classList.contains('add-btn')) {
      const { productId } = target.dataset;
      
      await addToCart(productId);
    }
    
  }, { capture: true })

}

renderHomePage();
