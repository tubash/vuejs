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
            return { currentValue, performSearch };
        },        
    }
</script>
<style>
    .search-form {
        margin: 20px 0;
    }
    .do-search {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        border-radius: 5px;
        background-color: #e74c3c;
        color: #fff;
        border: 0;
        height: 50px;
        width: 200px;
    }
    .search-input {
        font-size: small;
        width: 60%;
        padding: 12px 20px;
        height: 25px;
        margin-right: 10px;
        }    
</style>