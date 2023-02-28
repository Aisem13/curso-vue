<template>
    <button :style="{ backgroundColor }" :class="{circle : applyCircleClass}" v-bind="$attrs">
        <slot/>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { useBackgroundColor, backgroundColorProps } from '../composables/backgroundColor';

const props = defineProps({
    variant: {
        required: false,
        default: "succes",
        valedator(value) {
            const options = ["danger", "warning", "info", "succes", "secondary"];
            return options.includes(value);
        },
        ...backgroundColorProps,
    },

    circle: {
        default: false,
        type: Boolean,
    },
});

const backgroundColor = useBackgroundColor(props);

const applyCircleClass = computed(() => {
    return props.circle;
});

</script>

<style scoped>
button {
    color: var(--text-color);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn:disabled {
    opacity: 80%;
}

.circle{
    border-radius: 50%;
}
</style>