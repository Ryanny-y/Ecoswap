
export async function getProducts() {
  try {
    const response = await fetch("https://ecocycle-backend.onrender.com/products");

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error("Something went wrong" + errorData.message);
    }

    const data = await response.json();

    return data;
  } catch (error) {

  }
}
