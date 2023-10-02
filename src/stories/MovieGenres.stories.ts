import MovieGenres from "@/components/MovieGenres.vue";

export default {
  component: MovieGenres,
  title: "Movie Genre Title",
  tags: ["autodocs"],
};

export const Action = {
  args: {
    genres: ['Action', 'Adventure'],
  },
};

export const Adventure = {
  args: {
    genres: ['Sci-Fi', 'XXX'],
  },
};
