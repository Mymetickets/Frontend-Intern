<template>
    <div v-if="data" class="flex flex-col p-[10px] rounded-[10px] hover:shadow-md">
        <RouterLink :to="`/product/${data.id}`">
            <img :src="data.image" alt="Product Image" class="object-center object-cover w-full h-[210px] mb-[10px]" />
            <div v-if="data.category" class="text-grey-700 text-[80%] capitalize">{{ data.category }}</div>
            <h2 class="truncate">{{ data.title }}</h2>
            <!-- <div>Rating</div> -->
            <div class="font-bold">${{ data.price }}</div>
        </RouterLink>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>