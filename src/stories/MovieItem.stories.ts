import MovieItem from "../components/MovieItem.vue";

import posterPulpFiction from "./assets/pulpfiction.png";
import posterKillBill from "./assets/killbill.png";

export default {
  component: MovieItem,
  title: "Movie Item",
  tags: ["autodocs"],
};

export const PulpFiction = {
  args: {
    movie: {
      id: 1,
      image: posterPulpFiction,
      title: "Pulp Fiction",
      year: 2004,
      genre: "Action & Adventure",
    },
  },
};

export const KillBill = {
  args: {
    movie: {
      id: 2,
      image: posterKillBill,
      title: "Kill Bill",
      year: 1994,
      genre: "Oscar Winning Movie",
    },
  },
};
