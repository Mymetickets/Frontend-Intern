<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="bg-red-500 text-white p-3">
        <FontAwesomeIcon icon="fa-solid fa-dog" />
        Welcome to tailwind
    </p>
    <fwb-alert type="info">
      Success! You can now use Flowbite Vue in your Vue application 🎉
    </fwb-alert>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FwbAlert } from 'flowbite-vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
