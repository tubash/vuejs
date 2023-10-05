<template>
    <div class="center">
        <div class="content">
            <movie-card v-if="movie" :movie="movie" />
        </div>
    </div>
</template>
<script lang="ts">
    import { ref, onMounted } from 'vue';
    import type { Ref } from 'vue';

    import { useRoute } from 'vue-router'
        
    import useMoviesStore from '@/stores/datasource.ts'
    import MovieCard from '@/components/MovieCard.vue';

    import type Movie from '@/types/Movie.ts';

    export default {
        components: {
            MovieCard,
        },
        setup() {
            const movie: Ref<Movie | undefined> = ref(undefined);
            onMounted( async () => {
                const route = useRoute();
                const store = useMoviesStore();
                if (!store.movies || !store.movies.length) {
                    await store.loadMovies();
                }
                movie.value = store.getMovie(route.params.id as string);
            });
            return { movie };
        }
    }
</script>
<style scoped>
  .center {
    width: 845px;
    text-align: center;
    margin: 50px auto;
  }
  .content {
    text-align: left;
  }
</style>
