<template>
    <button :type="type" :disabled="isLoading" class="text-white disabled:bg-purple-200 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 w-full">
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