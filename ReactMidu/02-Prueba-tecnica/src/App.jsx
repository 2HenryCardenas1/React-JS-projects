import { useCallback, useState } from "react";
import "./App.css";

import Movies from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";

import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, error, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({
    search,
    sort,
  });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newSearch = event.target.value;
    if (newSearch.startsWith(" ")) return;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            placeholder="Avengers, Matrix, Roblox..."
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
