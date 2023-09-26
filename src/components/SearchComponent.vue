<template>
    <div class="search-component">
        <search-input :text="text" />
        <search-button />
    </div>
</template>
<script lang="ts">
    import SearchInput from '@/components/SearchInput.vue';
    import SearchButton from '@/components/SearchButton.vue';

    export default {
        components: {
            SearchInput,
            SearchButton
        },
        props: {
            text: {
                type: String,
                required: false,
            }
        }
    }
</script>
<style>
    .search-component {
        margin: 20px 0;
    }
</style>