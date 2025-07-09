<template>
    <label class="block text-sm">
        <span class="text-gray-700 dark:text-gray-400">{{label}}</span>
        <input :type="type" :class="[{
            'border-red-600 focus:border-red-400 ': error
        }, 'block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input']"
            :placeholder="placeholder" :name="name" />
        <span v-if="error" class="text-xs text-red-600 dark:text-red-400">
            {{ error }}
        </span>
    </label>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        required: true
    },
    placeholder: String,
    name: {
        required: true
    },
    error: {
        default: null
    },
    label: String
})
</script>
