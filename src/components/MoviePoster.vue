<template>
  <img 
    class="movie-poster-parameters" 
    v-lazyload
    :data-src="source" />
</template>

<script lang="ts">
import LazyLoadDirective from "@/directives/LazyLoadDirective";

export default {
  props: {
    source: {
      type: String,
      required: true,
    },
  },
  directives: {
    lazyload: LazyLoadDirective,
  }
};
</script>

<style scoped>
.movie-poster-parameters {
  width: 275px;
  height: 400px;
}
</style>
