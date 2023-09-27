<template>
  <div class="search-summary-title">{{ amount }} movies found</div>
</template>

<script lang="ts">
    export default {
    props: {
        amount: {
        type: Number,
        required: true,
        },
    },
    };
</script>

<style scoped>
    .search-summary-title {
    font-size: medium;
    font-weight: bold;
    margin: 20px 0;
    }
</style>
