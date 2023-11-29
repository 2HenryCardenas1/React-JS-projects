function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies?.map((movie) => (
        <li key={movie.id} className="containerInfoMovie">
          <h3>
            {movie.title.length > 20
              ? movie.title.slice(0, 20) + "..."
              : movie.title}
          </h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NotFound() {
  return <p>No se encontraron resultados</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NotFound />;
}
