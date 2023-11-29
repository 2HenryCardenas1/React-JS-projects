const API_KEY = "d9061786";

export const searchMovie = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();
    const movie = json.Search;

    const mapMovies = movie.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));

    return mapMovies;
  } catch (error) {
    throw new Error("Error en la busqueda");
  }
};
