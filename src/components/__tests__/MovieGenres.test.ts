import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MovieGenres from "@/components/MovieGenres.vue";

const genresList = ["Action", "Comedy"];

test("MovieGenres.vue", async () => {
    expect(MovieGenres).toBeTruthy();
  
    const wrapper = mount(MovieGenres, {
        props: {
            genres: genresList,
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.text()).toContain(genresList.join(" & "));
});
