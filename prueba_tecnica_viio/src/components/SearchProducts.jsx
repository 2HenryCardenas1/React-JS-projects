"use client";

import { useProducts } from "@/hooks/useProducts";
import { useSearch } from "@/hooks/useSearch";
import debounce from "just-debounce-it";
import { useCallback } from "react";
import CardProduct from "./CardProduct";

export default function SearchProducts() {
  const { search, updateSearch } = useSearch();
  const { products, error, loading, searchProduct } = useProducts({ search });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      if (search === "") return;
      searchProduct({ search });
    }, 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    searchProduct({ search });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div>
      <header className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold">Search Products</h1>
        <p>Find your favorites products here!</p>
      </header>
      <form className="flex justify-center mt-10" onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="border-2 border-gray-200 rounded-l px-4 py-2 w-72 lg:w-96 focus:outline-none "
          placeholder="Search products"
        />
        <button
          className="bg-slate-800 hover:bg-slate-700 text-white rounded-r px-4 py-2"
          type="submit"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <main className="mt-10">
        {loading && <p className="text-center">Loading...</p>}
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </div>
  );
}
