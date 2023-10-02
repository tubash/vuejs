import MovieGenres from "@/components/MovieGenres.vue";

export default {
  component: MovieGenres,
  title: "Movie Genre Title",
  tags: ["autodocs"],
};

export const ActionAndAdventure = {
  args: {
    genres: ['Action', 'Adventure'],
  },
};

export const SciFiAndXXX = {
  args: {
    genres: ['Sci-Fi', 'XXX'],
  },
};
