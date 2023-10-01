<template>
    <toggle-options v-model="selected" @click="doSelect" :id="searchElementId">
        <template v-slot:title>
            SEARCH BY
        </template>
        <template v-slot:first-option>
            TITLE
        </template>
        <template v-slot:second-option>
            GENRE
        </template>
    </toggle-options>
</template>
<script lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import ToggleOptions from '@/components/ToggleOptions.vue';
    export default {
        components: {
            ToggleOptions
        },
        emits: ['do-select'],
        setup(props, {emit}) {
            const searchElementId: string = "searchCategory";
            // false = first option, true = second option
            const selected = ref(true);
            const doSelect = (selected : Ref<boolean>) => {
                emit('do-select', selected);
            }
            return { doSelect, selected, searchElementId };
        }        
    }
</script>
