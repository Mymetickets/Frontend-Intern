<template>
    <div class="flex flex-col gap-[20px] p-[20px]">
        <div class="grid gap-[20px] grid-cols-2 sm:grid-cols-4">
            <Box_V2 header="Sales" num="120" footer="-30%" />
            <Box_V2 header="Revenue" num="$4,500" footer="+2%" />
            <Box_V2 header="Visitors" num="360" />
            <Box_V2 header="Stock" num="164" />
        </div>
        <Box>
            <div class="flex justify-between gap-[10px] mb-[20px]">
                <h1 class="flex-1 font-bold text-[120%]">Manage Products:</h1>
                <div class="flex gap-[10px]">
                    <RouterLink to="add-product">
                        <Button label="Add New Product" input-class="w-max" />
                    </RouterLink>
                    <Button label="View All" input-class="w-max" />
                </div>
            </div>
            <div v-if="isLoading">Fetching Products...</div>
            <div v-else>
                <div v-if="products.length > 0" class="grid grid-cols-2 sm:grid-cols-6 gap-[20px]">
                    <ProductSingle v-for="(item, index) in products" :key="index" :data="item" />
                </div>
                <div v-else>Empty Product List!</div>
            </div>
        </Box>
    </div>
</template>

<script setup>
import Box from '@/components/Box/Box.vue';
import Box_V2 from '@/components/Box/Box_V2.vue';
import Button from '@/components/Button/Button.vue';
import ProductSingle from '@/components/Product/ProductSingle.vue';

import axios from 'axios';
import { onBeforeMount, ref } from 'vue';

const isLoading = ref(true);
const products = ref([])

onBeforeMount(async () => {
    isLoading.value = true;
    try {
        const res = await axios.get('https://fakestoreapi.com/products?limit=12');
        if (res.status === 200) {
            products.value = res.data;
            return;
        }

        throw new Error('Error fetching products!')
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }
});
</script>

<style lang="scss" scoped></style>