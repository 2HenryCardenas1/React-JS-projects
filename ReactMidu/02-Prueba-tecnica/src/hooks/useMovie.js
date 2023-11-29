import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovie } from "../services/movies";
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;
      const newMovies = await searchMovie({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    const newMovies = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
    return newMovies;
  }, [movies, sort]);

  return { movies: sortMovies, getMovies, error, loading, sortMovies };
}
