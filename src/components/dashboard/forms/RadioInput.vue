<template>
    <label class="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
        <input
            type="radio"
            class="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            :name="name"
        />
        <span class="ml-2">{{text}}</span>
    </label>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    name: {
        required: true
    },
    error: {
        default: null
    }
})
</script>