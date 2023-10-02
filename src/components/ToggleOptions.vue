<template>
    <div class="toggleComponent">
        <div class="toggleTitle">
            <slot name="title"></slot>
        </div>
        <div>
            <input 
                type="checkbox" 
                :id="elementId" 
                :checked="elementValue"
                @input="(event) => $emit('do-toggle', (event.target as HTMLInputElement).checked)" 
                class="toggleCheckbox"
            />
            <label :for="elementId" class='toggleContainer'>
                <div><slot name="first-option"></slot></div>   
                <div><slot name="second-option"></slot></div>
            </label> 
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        emits: ['do-toggle'],
        props: {
            elementId: {
                type: String,
                required: true,
            },
            elementValue: {
                type: Boolean,
                required: true,
            }
        }
    }
</script>
<style scoped>
    .toggleComponent {
        display: flex;
        vertical-align: middle;
        margin: 12px 0;
        margin-left: auto;
    }
    .toggleTitle {
        padding: 6px;
    }
    .toggleContainer {
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: fit-content;
        border: 0;
        border-radius: 3px;
        background: #343434;
        font-weight: normal;
        color: #FFF;
        cursor: pointer;
    }
    .toggleContainer::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0%;
        border-radius: 3px;
        background: #e74c3c;
        transition: all 0.3s;
    }
    .toggleCheckbox:checked + .toggleContainer::before {
        left: 50%;
    }
    .toggleContainer div {
        padding: 6px 12px;
        text-align: center;
        z-index: 1;
    }
    .toggleCheckbox {
        display: none;
    }
    .toggleCheckbox:checked + .toggleContainer div:first-child{
        transition: color 0.3s;
    }
    .toggleCheckbox:checked + .toggleContainer div:last-child{
        transition: color 0.3s;
    }
    .toggleCheckbox + .toggleContainer div:first-child{
        transition: color 0.3s;
    }
    .toggleCheckbox + .toggleContainer div:last-child{
        transition: color 0.3s;
    }
</style>
