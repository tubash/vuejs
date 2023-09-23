import MovieGrid from "../components/MovieGrid.vue";
import * as MovieItemStories from './MovieItem.stories';

export default {
    component: MovieGrid,
    title: 'Movie Grid',
    tags: ["autodocs"],
  };


export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    movies: [
      { ...MovieItemStories.PulpFiction.args.movie },
      { ...MovieItemStories.KillBill.args.movie },
      { ...MovieItemStories.PulpFiction.args.movie },
      { ...MovieItemStories.KillBill.args.movie },
      { ...MovieItemStories.PulpFiction.args.movie },
      { ...MovieItemStories.KillBill.args.movie },
    ],
  },
}
