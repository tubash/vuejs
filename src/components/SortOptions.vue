<template>
    <toggle-options @do-toggle="doSelect" :element-id="sortElementId" :element-value="true">
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
    import ToggleOptions from '@/components/ToggleOptions.vue';
    export default {
        components: {
            ToggleOptions
        },
        emits: ['do-sort'],
        setup(props, {emit}) {
            const sortElementId: string = "sortElementId";
            // false = first option, true = second option
            const doSelect = (sorted: boolean) => {
                emit('do-sort', sorted);
            }
            return { doSelect, sortElementId };
        }
    }
</script>
