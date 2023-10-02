<template>
    <toggle-options @do-toggle="doSelect" :element-id="searchElementId" :element-value="false">
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
    import ToggleOptions from '@/components/ToggleOptions.vue';
    export default {
        components: {
            ToggleOptions
        },
        emits: ['do-select'],
        setup(props, {emit}) {
            const searchElementId: string = "searchElementId";
            // false = first option, true = second option
            const doSelect = (toggled: boolean) => emit('do-select', toggled);
            return { doSelect, searchElementId };
        }        
    }
</script>
