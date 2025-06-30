<template>
    <div class="bg-white rounded-[10px] shadow-md flex p-[20px] justify-center items-center">
        <div class="w-full">
            <h5 class="font-bold">{{ header }}</h5>
            <h1 class="font-extrabold w-full text-center my-[10px] text-[200%]">{{ num }}</h1>
            <h5 v-if="footer" class="w-full text-right text-[90%]">{{ footer }}</h5>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['header', 'num', 'footer'])
</script>