<template>
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-sm">
        <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
            <thead>
            <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
                <th class="px-4 py-3" v-for="column in columns">{{ column }}</th>
            </tr>
            </thead>
            <tbody
            class="bg-white divide-y divide-gray-300 dark:divide-gray-700 dark:bg-gray-800"
            >
                <slot name="table-records"></slot>
            </tbody>
        </table>
        </div>
        <div v-if="paginate"
        class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-gray-300 border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
        >
            <span class="flex items-center col-span-3">
                Showing 21-30 of 100
            </span>
            <span class="col-span-2"></span>
            <!-- Pagination -->
            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                <ul class="inline-flex items-center">
                    <li>
                    <button
                        class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Previous"
                    >
                        <svg
                        aria-hidden="true"
                        class="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                        >
                        <path
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                        ></path>
                        </svg>
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        1
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        2
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        3
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        4
                    </button>
                    </li>
                    <li>
                    <span class="px-3 py-1">...</span>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        8
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                    >
                        9
                    </button>
                    </li>
                    <li>
                    <button
                        class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Next"
                    >
                        <svg
                        class="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        >
                        <path
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                        ></path>
                        </svg>
                    </button>
                    </li>
                </ul>
                </nav>
            </span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    columns: {
        required: true,
        type: Array
    },
    paginate: {
        default: false
    }
})
</script>