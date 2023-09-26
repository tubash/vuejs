<template>
    <div class="search-component">
        <search-input :text="text" />
        <search-button @do-search="() => { $emit('do-search') }" />
    </div>
</template>
<script lang="ts">
    import SearchInput from '@/components/SearchInput.vue';
    import SearchButton from '@/components/SearchButton.vue';

    export default {
        emits: ["do-search"],
        components: {
            SearchInput,
            SearchButton
        },
        props: {
            text: {
                type: String,
                required: false,
            }
        },     
    }
</script>
<style>
    .search-component {
        margin: 20px 0;
    }
</style>