<template>
    <div v-if="isLoading">Fetching Product...</div>
    <div v-else class="flex flex-col gap-[20px] p-[20px]">
        <Box>
            <div class="flex gap-[10px]">
                <RouterLink to="/">Home</RouterLink>
                <span>-</span>
                <span>Product</span>
                <span>-</span>
                <span class="font-bold">{{ product.title }}</span>
            </div>
        </Box>

        <Box>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                <div>
                    <img :src="product.image" alt="Product Image"
                        class="object-center object-cover w-full max-h-[500px]" />
                </div>
                <div>
                    <h6 class="text-grey-700 text-[80%] capitalize">{{ product.category }}</h6>
                    <h1 class="text-[200%] font-bold">{{ product.title }}</h1>
                    <div class="text-[90%]">{{ `${product.rating.rate} - (${product.rating.count} reviews)` }}</div>
                    <div class="text-[#55585b] mt-[10px]">{{ product.description }}</div>
                    <h1 class="mt-[30px] font-bold">${{ product.price }}</h1>
                    <Button label="Add To Cart" input-class="mt-[20px] w-max" />
                </div>
            </div>
        </Box>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import Box from '@/components/Dashboard/Box/Box.vue';
import Button from '@/components/Dashboard/Button/Button.vue';

const isLoading = ref(true);
const product = ref([])

onBeforeMount(async () => {
    isLoading.value = true;
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${route.params.id}`);
        if (res.status === 200) {
            product.value = res.data;
            return;
        }

        throw new Error('Error fetching product!')
    } catch (error) {
        console.log(error)
    } finally {
        isLoading.value = false;
    }
});
</script>

<style lang="scss" scoped></style>