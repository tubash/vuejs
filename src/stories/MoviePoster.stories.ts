import MoviePoster from "../components/MoviePoster.vue";

import posterPulpFiction from "./assets/pulpfiction.png";
import posterKillBill from "./assets/killbill.png";

export default {
  component: MoviePoster,
  title: "Movie Poster",
  tags: ["autodocs"],
};

export const PulpFiction = {
  args: {
    source: posterPulpFiction,
  },
};

export const KillBill = {
  args: {
    source: posterKillBill,
  },
};
