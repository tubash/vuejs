import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";

import MovieItem from "@/components/MovieItem.vue";

import moviesData from '@/assets/movies.json'

const MockIntersectionObserver = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));
vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);

const wrapper = mount(MovieItem, {
    props: {
        movie: moviesData[0],
    }
});

test("MovieItem.vue", () => {
    expect(MovieItem).toBeTruthy();
    expect(wrapper).toBeTruthy();

    expect(wrapper.find('img').classes('movie-poster-parameters')).toBe(true);
    expect(wrapper.find('img').attributes('data-src')).toBe(moviesData![0].posterurl);

    expect(wrapper.find(".movie-title").text()).toBe(moviesData![0].title);
    expect(wrapper.find(".movie-year").text()).toBe(moviesData![0].year);
    expect(wrapper.find(".movie-genre-title").text()).toContain(moviesData![0].genres.join(" & "));
});
