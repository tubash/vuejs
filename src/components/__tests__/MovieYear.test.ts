import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MovieYear from "@/components/MovieYear.vue";

test("MovieYear.vue", async () => {
    expect(MovieYear).toBeTruthy();
  
    const wrapper = mount(MovieYear, {
        props: {
            year: "1999",
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.text()).toContain("1999");
});
