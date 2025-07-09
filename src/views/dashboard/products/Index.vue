<template>
    <div class="flex my-6 items-center justify-between">
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Products
        </h2>
        <span class="">
            <CustomButton>
                <font-awesome-icon :icon="['fas', 'plus']" />
                Add product
            </CustomButton>
        </span>
    </div>
    <div class="">
        <CustomTable :columns="['', 'Name', 'Category', 'Price', 'Date Added', 'Action' ]">
            <template v-slot:table-records>
                <ProductTableRow :products="allProducts" />
            </template>
        </CustomTable>
        <p class="text-center" v-if="isLoading">
            <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin" />
        </p>
        <p v-if="!isLoading && allProducts.length == 0" class="text-center text-lg font-medium text-gray-800 my-3">No product added</p>
    </div>
</template>
<script setup>
import CustomButton from '@/components/FormInputs/Button.vue';
import CustomTable from '@/components/dashboard/ui/Table.vue';
import ProductTableRow from '@/components/dashboard/ui/ProductTableRow.vue';
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/products';

const isLoading = ref(true);
const allProducts = ref([]);
const productStore = useProductStore();
onMounted( async ()=>{
    await productStore.fetchProducts();
    isLoading.value = productStore.productsLoading;
    allProducts.value = productStore.getProducts;
})
</script>