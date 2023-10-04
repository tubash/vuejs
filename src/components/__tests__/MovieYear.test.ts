import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MovieYear from "@/components/MovieYear.vue";

test("MovieYear.vue", () => {
    expect(MovieYear).toBeTruthy();
  
    const wrapper = mount(MovieYear, {
        props: {
            year: "1999",
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.find('div[class="movie-year"]').text()).toContain("1999");
});
