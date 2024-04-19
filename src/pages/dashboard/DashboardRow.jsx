import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MovieCard } from "../../components";

export const DashboardRow = ({ title, movies, id }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 1200;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 1200;
  };

  return (
    <div className="mb-5">
      <h2 className="text-white font-bold md:text-left">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block"
          size={40}
          onClick={ slideLeft }
        />
        <div
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          id={"slider" + id}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                  : "https://placehold.co/300x150"
              }
              description={movie.overview}
              movie={movie}
            />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={ slideRight }
        />
      </div>
    </div>
  );
};
