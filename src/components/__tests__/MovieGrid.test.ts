import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";

import MovieGrid from "@/components/MovieGrid.vue";

import moviesData from '@/assets/movies.json'

const MockIntersectionObserver = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));
vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);

const wrapper = mount(MovieGrid, {
    props: {
        movies: moviesData,
    }
});

test("MovieGrid.vue", () => {
    expect(MovieGrid).toBeTruthy();
    expect(wrapper).toBeTruthy();

    expect(wrapper.findAll(".movie-poster-parameters").length).toBe(moviesData.length);
    expect(wrapper.findAll(".movie-poster-parameters").at(0)!.attributes('data-src')).toBe(moviesData![0].posterurl);
    
    expect(wrapper.findAll(".movie-title").length).toBe(moviesData.length);
    expect(wrapper.findAll(".movie-title").at(0)!.text()).toBe(moviesData![0].title);
    expect(wrapper.findAll(".movie-year").length).toBe(moviesData.length);
    expect(wrapper.findAll(".movie-year").at(0)!.text()).toBe(moviesData![0].year);
    expect(wrapper.findAll(".movie-genre-title").length).toBe(moviesData.length);
    expect(wrapper.findAll(".movie-genre-title").at(0)!.text()).toContain(moviesData![0].genres.join(" & "));
});
