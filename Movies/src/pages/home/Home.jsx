import {useEffect, useState} from "react";
import {getTitles} from "../../api/titles";
import Movie from "../../components/movies/Movie";
export default function Home() {
  const categories = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Todas",
  ];

  const [category, setcategory] = useState("Movies");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const loadNextPage = async () => {
    try {
      const response = await getTitles(page);
      setPage(page + 1);
      setMovies([...movies, ...response.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await loadNextPage();
    })();
  });

  const categorieSelected = (category) => {
    setcategory(category);
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="text-center text-4xl my-4">
            <span>🎬</span>Movies
          </h1>

          <ul className="space-y-2 font-medium">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => categorieSelected(category)}
                >
                  <span className="ml-3">
                    <span className="mr-2">🎫</span>
                    {category}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div
          className="p-4 flex flex-col items-center "
          style={{border: "solid"}}
        >
          <h1 className="text-center text-5xl my-4">
            <span>🎬</span>Movies
          </h1>
          <h2 className="text-center text-2xl my-4">🎆{category}</h2>

          <section className="mt-9  items-center justify-items-center grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-5">
            {movies.map((movie, index) => (
              <Movie
                key={index}
                category={category}
                data={movie}
                image={movie.primaryImage}
              />
            ))}
          </section>
          <footer className="mt-9">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>

            <a
              href="#"
              className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
