<template>
  <div class="relative z-0 w-full group">
      <input :type="type" :name="name" @input="(event) => $emit('inputValue', name, event.target.value)" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" :placeholder="placeholder " required />
      <!-- <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label> -->
  </div>
</template>

<script setup>
defineProps({
  name: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
 
});
</script>
