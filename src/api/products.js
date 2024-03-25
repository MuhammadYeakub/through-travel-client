// Get all products
export const getAllProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const data = await response.json();
  return data;
};
