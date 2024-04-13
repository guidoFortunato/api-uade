export const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click en buscar");
  };

  return (
    <form className="max-w-lg mx-auto px-5 md:px-0" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-800 focus:border-violet-800"
          placeholder="Buscar película por título, autor, género..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-violet-800 hover:bg-violet-900  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};
