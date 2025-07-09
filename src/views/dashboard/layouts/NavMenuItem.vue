<template>
    <li class="relative px-6 py-3">
        <span v-if="curRoute == linkTo.name"class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true">
        </span>
      <router-link
        class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
        :to="linkTo"
      >
      <slot />
      </router-link>
    </li>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
const curRoute = ref(route.name);
const props = defineProps({
    linkTo: {
        type: Object,
        required: true
    },

});
onBeforeRouteUpdate((to, from) => {
  console.log(to.name);
  curRoute.value = to.name ?? route.name
});
</script>