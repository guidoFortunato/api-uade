import Slider from "react-slick";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MovieCard, Spinner } from "../../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DashboardRow = ({ title, movies }) => {
  
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (movies.length === 0) return <Spinner />;

  return (
    <>
      <div className="slider-container mb-10">
      <h2 className="text-white text-base md:text-2xl font-bold mb-8 md:mb-1">
        {title}
      </h2>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </>
  );
};
