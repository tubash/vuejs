import type Movie from "@/types/Movie";

export default function useSearch() { 

  const process = (movies: Movie[], query: string, searchOption: boolean , sortOption: boolean) => {
    if (!movies) {
      return [];
    }

    if (!query) {
      return sortOption
        ? movies.sort((a, b) => a.ratings.reduce((c, d) => c + d) - b.ratings.reduce((c, d) => c + d))
        : movies.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    }

    const filtered = movies.filter(movie => {
      const title = movie?.title.toLocaleLowerCase();
      const genre = movie?.genres.join().toLocaleLowerCase();

      return searchOption 
        ? genre.includes(query.toLocaleLowerCase())
        : title.includes(query.toLocaleLowerCase());
    });

    return sortOption
      ? filtered.sort((a, b) => a.ratings.reduce((c, d) => c + d) - b.ratings.reduce((c, d) => c + d))
      : filtered.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
  };

  return { process };
};
