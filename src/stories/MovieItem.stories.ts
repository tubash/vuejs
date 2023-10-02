import MovieItem from "@/components/MovieItem.vue";

import posterPulpFiction from "@/stories/assets/pulpfiction.png";
import posterKillBill from "@/stories/assets/killbill.png";

export default {
  component: MovieItem,
  title: "Movie Item",
  tags: ["autodocs"],
};

export const PulpFiction = {
  args: {
    movie: {
      id: 1,
      posterurl: posterPulpFiction,
      title: "Pulp Fiction",
      year: "2004",
      genres: ["Action", "Adventure"],
    },
  },
};

export const KillBill = {
  args: {
    movie: {
      id: 2,
      posterurl: posterKillBill,
      title: "Kill Bill",
      year: "1994",
      genres: ["Oscar Winning Movie", "Sci-Fi"],
    },
  },
};
