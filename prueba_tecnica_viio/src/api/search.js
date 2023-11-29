import axios from "axios";

export const searchProductGet = async ({ search }) => {
  if (search === "") return null;
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${search}`
    );

    return response.data.products;
  } catch (error) {
    throw new Error(error);
  }
};
