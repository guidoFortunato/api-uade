export const getGenres = (genresMovies, genresSeries) => {
  const mergedGenres = {};

  genresMovies.forEach((genre) => {
    mergedGenres[genre.id] = genre;
  });

  genresSeries.forEach((genre) => {
    mergedGenres[genre.id] = genre;
  });

  const mergedGenresArray = Object.values(mergedGenres);

  return mergedGenresArray;
};