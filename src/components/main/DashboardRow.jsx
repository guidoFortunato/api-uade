/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { MovieCard, Spinner } from "..";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DashboardRow = ({ title, movies }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    lazyLoad: true,
    speed: 1000,
    infinite: false,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      
      {
        breakpoint: 344,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log({movies})

  if (movies.length === 0) return <Spinner />;

  return (
    <div className="slider-container mb-8 md:mb-10">
      <h2 className="text-white text-base md:text-base font-bold mb-2">
        {title}
      </h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title ? movie.title : movie.name}
            image={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : movie.profile_path 
                ? `https://image.tmdb.org/t/p/original${movie.profile_path}`
                : movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : "https://placehold.co/3840x2160"
            }
            description={movie.overview}
            movie={movie}
            mediaType={ movie.media_type ? movie.media_type : movie.title ? "movie" : "tv"}
          />
        ))}
      </Slider>
    </div>
  );
};
