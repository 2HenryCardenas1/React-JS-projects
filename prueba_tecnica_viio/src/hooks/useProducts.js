import { searchProductGet } from "@/api/search";
import { useCallback, useRef, useState } from "react";

export function useProducts({ search }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const previusSearch = useRef(search);

  const searchProduct = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;
      const newProducts = await searchProductGet({ search });
      setProducts(newProducts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, error, loading, searchProduct };
}
