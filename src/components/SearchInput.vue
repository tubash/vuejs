<template>
  <input
    type="text"
    class="search-input"
    placeholder="Enter movie name..."
    :value="text"
  />
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.search-input {
  font-size: small;
  width: 90%;
  padding: 12px 20px;
  height: 25px;
}
</style>
