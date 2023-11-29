import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState();
  const isFirstInput = useRef(true);

  useEffect(() => {
    // Si es la primera vez que se ejecuta el useEffect, no se valida el input
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.match(/^[0-9]+$/)) {
      setError("No se puede buscar solo numeros");
      return;
    }
    if (search.length < 3) {
      setError("No se puede buscar menos de 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, error, updateSearch };
}
