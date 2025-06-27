<template>
    <div class="flex flex-col gap-[20px] p-[20px]">
        <Box>
            <div class="flex gap-[10px]">
                <RouterLink to="/">Home</RouterLink>
                <span>-</span>
                <span>Add Product</span>
            </div>
        </Box>

        <Box>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                <div>
                    <div
                        class="flex justify-center items-center w-full h-full bg-[#EEEFF2] rounded-[10px] cursor-pointer">
                        <div class="text-center">
                            <div class="text-black font-bold">@</div>
                            <div class="text-black">Click to select image!</div>
                        </div>
                    </div>
                </div>
                <div>
                    <form class="flex flex-col gap-[10px] p-[20px]">
                        <h1 class="font-bold mb-[20px] text-[150%]">Product Details:</h1>
                        <div>
                            <InputTextCustom input-class="!mb-0 flex-1" v-model="data.name" type="text" required="true"
                                label="Product Title:" />
                        </div>
                        <div>
                            <InputTextAreaCustom input-class="!mb-0 flex-1" v-model="data.description" type="text"
                                required="true" label="Product Description:" />
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
                            <div class="_col-span-2">
                                <InputSelect input-class="!mb-0 flex-1" v-model="data.category" required="true"
                                    label="Product Category:">
                                    <option value="cat-1">Category 1</option>
                                    <option value="cat-2">Category 2</option>
                                </InputSelect>
                            </div>
                            <div>
                                <InputTextCustom input-class="!mb-0 flex-1" v-model="data.price" type="number"
                                    required="true" label="Product Price:" />
                            </div>
                            <div>
                                <InputTextCustom input-class="!mb-0 flex-1" v-model="data.discount_price" type="number"
                                    required="true" label="Dicount Price:" />
                            </div>
                        </div>
                        <div class="mt-[20px]">
                            <Button label="Upload Product" />
                        </div>
                    </form>
                </div>
            </div>
        </Box>
    </div>
</template>

<script setup>

import axios from 'axios';
import { onBeforeMount, ref } from 'vue';

import Box from '@/components/Box/Box.vue';
import Button from '@/components/Button/Button.vue';
import InputSelect from '@/components/Input/InputSelect.vue';
import InputTextAreaCustom from '@/components/Input/InputTextAreaCustom.vue';
import InputTextCustom from '@/components/Input/InputTextCustom.vue';

const isLoading = ref(true);
const data = ref({
    name: '',
    description: '',
    price: 0,
    discount_price: 0,
    category: 'cat-1'
})
</script>

<style lang="scss" scoped></style>