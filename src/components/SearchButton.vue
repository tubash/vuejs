<template>
    <button class="do-search" @click="performSearch">SEARCH</button>
</template>
  
<script lang="ts">
  export default {
    emits: ['do-search'],
    setup(props, { emit }) {
      const performSearch = () => emit('do-search');
      return { performSearch };
    },
  };
  </script>
  
<style scoped>
  .do-search {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius:  5px;
    border-radius:  5px;
    background-color: #e74c3c;
    color: #FFF;
    border: 0;
    height: 50px;
    width: 200px;
  }
</style>