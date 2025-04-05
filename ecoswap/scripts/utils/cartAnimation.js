export const cartAnimation = () => {
  const cartBtn = document.querySelector(".cart-btn");
  const closeCartBtn = document.querySelector(".close-cart");
  const cartSection = document.getElementById("cart");

  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cartSection.classList.remove("translate-x-full");
  });

  closeCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    cartSection.classList.add("translate-x-full");
  });
}