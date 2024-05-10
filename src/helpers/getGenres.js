export const getGenres = (genresMovies, genresSeries) => {
  const mergedGenres = {};

  genresMovies.forEach((genre) => {
    mergedGenres[genre.id] = { ...genre, usedBy: "movie" };
  });

  genresSeries.forEach((genre) => {
    if (mergedGenres[genre.id]) {
      mergedGenres[genre.id].usedBy = "both";
    }else{
      mergedGenres[genre.id] = { ...genre, usedBy: "tv" };;
    }
    
  });
  //Convierto en un array de objetos
  const mergedGenresArray = Object.values(mergedGenres);  
  // console.log({mergedGenresArray})

  // Ordena los géneros alfabéticamente
  const sortedGenres = mergedGenresArray.sort((a, b) => a.name.localeCompare(b.name));
  // console.log({sortedGenres})
  return sortedGenres;
};