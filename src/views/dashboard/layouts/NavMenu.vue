<script setup lang="ts">
import NavMenuItem from './NavMenuItem.vue';

</script>

<template>
  <ul>
    <NavMenuItem :link-to="{name: 'dashboard'}">
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        ></path>
      </svg>
      <span class="ml-4">Dashboard</span>
    </NavMenuItem>

    <NavMenuItem :link-to="{name: 'products'}">
      <svg class="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m16 0 13.8564065 8v16l-13.8564065 8-13.85640646-8v-16zm0 2.309-11.857 6.846v13.689l11.857 6.846 11.856-6.846v-13.689zm6.550845 8.3654304.9389431 1.7658952-6.5015238 3.4551048.0002619 7.7701392h-2l-.0002619-7.7691392-6.50100003-3.4561048.93894312-1.7658952 6.56205691 3.489z" fill="#212121" fill-rule="nonzero"></path> </g> </g></svg>
      <span class="ml-4">Products</span>
    </NavMenuItem>
  </ul>
  <!-- <div class="px-6 my-6">
    <button
      class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      Create account
      <span class="ml-2" aria-hidden="true">+</span>
    </button>
  </div> -->
</template>