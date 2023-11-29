import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState();
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar un producto vacio");
      return;
    }
    if (search.match(/^[0-9]+$/)) {
      setError("No se puede buscar solo numeros");
      return;
    }
    if (search.length < 2) {
      setError("No se puede buscar menos de 2 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
