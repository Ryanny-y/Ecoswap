export let cart = [];

export const loadCart = async (userId) => {
  try {
    const response = await fetch(`https://ecocycle-backend.onrender.com/cart/${userId}`, {
      method: 'GET',
      credentials: 'include'
    });
  
    if(!response.ok) {
      const errData = await response.json();
      throw new Error(`${errData.message}`);
    }

    const data = await response.json();
    
    cart = data.items;    
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (userId, productId) => {
  // product id, quantity
  // export const 
  try {
    const response = await fetch('https://ecocycle-backend.onrender.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        productId
      }),
      credentials: 'include'
    });

    if(!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message)
    }
  
    const data = await response.json();
  
    alert(data.message);
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async () => {



}

export const updateCart = async () => {

};