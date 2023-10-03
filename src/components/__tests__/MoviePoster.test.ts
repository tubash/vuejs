import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";
import MoviePoster from "@/components/MoviePoster.vue";

import defaultImage from '@/assets/default.png';

const MockIntersectionObserver = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}))
vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver)

test("MoviePoster.vue", async () => {
    expect(MoviePoster).toBeTruthy();
  
    const wrapper = mount(MoviePoster, {
        props: {
            source: defaultImage,
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.find('img').classes('movie-poster-parameters')).toBe(true);
    expect(wrapper.find('img').attributes('data-src')).toBe(defaultImage);
});
