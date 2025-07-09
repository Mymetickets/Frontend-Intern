<template>
    <tr v-for="(product, index) in products" :key="'prod-'+index" class="text-gray-700 dark:text-gray-400">
        <td class="px-4 py-3">
            <img :src="product.image_url??product.image" loading="lazy" class="object-cover w-15 h-15 rounded-full" />
        </td>
        <td class="px-4 py-3 text-sm">
            {{ product.name }}
        </td>
        <td class="px-4 py-3 text-xs">
            {{ product.category }}
        </td>
        <td class="px-4 py-3 text-sm">
            {{ product.price }}
        </td>
        <td class="px-4 py-3 text-sm">
            {{ product.created_at }}
        </td>
        <td>
            <button :data-dropdown-toggle="'dropdownDots-'+product.id" class="inline-flex items-center p-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
            </button>

            <!-- Dropdown menu -->
            <div :id="'dropdownDots-'+product.id" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                    <li>
                        <a href="#" :disabled="productActionLoading" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Edit
                        </a>
                    </li>
                    <li>
                        <button :disabled="productActionLoading" @click="deleteProduct(product.id)" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
</template>
<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/products';

const productActionLoading = ref(false);
const productStore = useProductStore();
const props = defineProps({
    products: {
        type: Array
    }
})
const emit = defineEmits(['productAction']);
async function deleteProduct(id){
    productActionLoading.value = true;
    await productStore.deleteProduct(id);
    emit("productAction", 'delete', id);
    productActionLoading.value = false;
}
</script>