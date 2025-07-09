<template>
    <button :type="type" class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
        <font-awesome-icon v-if="isLoading" :icon="['fas', 'spinner']" class="fa-spin" />
        <slot v-else />
    </button>
</template>
<script setup>
const props = defineProps({
    type: String,
    isLoading: {
        default: false
    }
})
</script>