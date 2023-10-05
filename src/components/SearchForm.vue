<template>
    <form class="search-form" @submit.prevent="performSearch">
        <input
            type="text"
            class="search-input"
            placeholder="Enter movie name..."
            v-model="currentValue"
        />
        <button type="submit" class="do-search" @click="performSearch">SEARCH</button>
    </form>
</template>
<script lang="ts">
    import { ref } from 'vue';
    import type { PropType } from 'vue';
    import { useRoute } from 'vue-router'

    export default {
        emits: ['do-search'],
        props: {
            text: {
                type: String as PropType<string|undefined>,
                required: false,
            }
        },
        setup(props, { emit }) {
            const currentValue = ref<string|undefined>(props.text);
            const performSearch = () => emit("do-search", currentValue.value);

            const route = useRoute();
            if (route.query.query) {
                currentValue.value = route.query.query as string;
                performSearch();
            }

            return { currentValue, performSearch };
        },        
    }
</script>
<style>
    .search-form {
        margin: 20px 0;
        display: flex;
    }
    .do-search {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        border-radius: 3px;
        background-color: #e74c3c;
        color: #fff;
        border: 0;
        height: 50px;
        width: 200px;

        font-size: medium;
        margin-left: auto;
    }
    .search-input {
        font-size: small;
        width: 100%;
        padding: 12px 20px;
        height: 22px;
        margin-right: 10px;
    }    
</style>