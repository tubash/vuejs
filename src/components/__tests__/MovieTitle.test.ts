import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MovieTitle from "@/components/MovieTitle.vue";

test("MovieTitle.vue", async () => {
    expect(MovieTitle).toBeTruthy();
  
    const wrapper = mount(MovieTitle, {
        props: {
            title: "Guess User Age App",
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.text()).toContain("Guess User Age App");
});
