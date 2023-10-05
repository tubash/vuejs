<template>
    <div class="movie-card">
        <movie-poster :source="movie.posterurl" />
        <div>
            <h1>{{ movie.title }}</h1>
            <h3>{{ genres }}</h3>
            <div class="movie-meta">
                <span class="highlight">{{ movie.year}}</span><span style="padding-right: 20px;"> year</span><span class="highlight">{{ duration }}</span> min
            </div>
            <div class="movie-storyline">{{ movie.storyline }}</div>

        </div>
    </div>
    <div class="movie-card-footer"><router-link to="/" class="nav-link">&lt;&lt;&lt; back to the main page</router-link></div>
</template>
<script lang="ts">
    import { computed } from 'vue';

    import type { PropType } from 'vue';
    import type Movie from '@/types/Movie.ts';

    import MoviePoster from '@/components/MoviePoster.vue';

    import { parse } from "iso8601-duration";

    export default {
        components: {
            MoviePoster,
        },
        props: {
            movie: {
                type: Object as PropType<Movie>,
                required: true,
            }
        }, 
        setup(props) {
            const genres = computed(() => props.movie.genres.join(" & "));
            const duration = computed(() => parse(props.movie.duration).minutes);
            return {genres, duration};
        }
    }
</script>
<style scoped>
    .movie-card {
        display: flex;
    }
    h1 {
        font-size: xx-large;
        margin: 0;
        padding: 0 20px;
    }
    h3 {
        font-size: small;
        padding: 0 20px;
    }
    .movie-meta {
        padding: 0 20px;
    }
    .highlight {
        font-size: x-large;
        font-weight: 100;
    }
    .movie-storyline {
        padding: 20px;
    }
    .movie-card-footer {
        padding: 30px 0;
        text-align: right;
    }
    .movie-card-footer a {
        color: blue;
        text-decoration: none;
    }
</style>