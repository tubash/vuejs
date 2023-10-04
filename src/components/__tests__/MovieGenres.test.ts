import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MovieGenres from "@/components/MovieGenres.vue";

const genresList = ["Action", "Comedy"];

test("MovieGenres.vue", () => {
    expect(MovieGenres).toBeTruthy();
  
    const wrapper = mount(MovieGenres, {
        props: {
            genres: genresList,
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.find(".movie-genre-title").text()).toContain(genresList.join(" & "));
});
