<template>
    <div class="search-summary-title">{{ summary }}</div>
</template>
  
<script lang="ts">
  export default {
    props: {
        summary: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
<style scoped>
    .search-summary-title {
        font-size: medium;
    }
</style>