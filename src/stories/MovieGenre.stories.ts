import MovieGenre from "../components/MovieGenre.vue";

export default {
  component: MovieGenre,
  title: "Movie Genre Title",
  tags: ["autodocs"],
};

export const Action = {
  args: {
    genre: "Action",
  },
};

export const Adventure = {
  args: {
    genre: "Adventure",
  },
};
