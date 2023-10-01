<template>
    <toggle-options @do-select="doSelect" v-model="sortedValue" @click="doSelect" :elementId="sortElementId">
        <template v-slot:title>
            SORT BY
        </template>
        <template v-slot:first-option>
            RELEASE DATE
        </template>
        <template v-slot:second-option>
            RATING
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
        emits: ['do-sort'],
        setup(props, {emit}) {
            const sortElementId: string = "sortElementId";
            // false = first option, true = second option
            const sortedValue = ref(true);
            const doSelect = (sorted : Ref<boolean>) => {
                emit('do-sort', sorted);
            }
            return { doSelect, sortedValue, sortElementId };
        }
    }
</script>
