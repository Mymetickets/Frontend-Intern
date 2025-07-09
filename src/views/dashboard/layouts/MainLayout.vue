<template>
    <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': isSideMenuOpen}" x-data="{}"
    >
        <!-- Deskotp navbar -->
        <aside class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <a
                    class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    href="#">
                    {{ appName }}
                </a>
                <div class="mt-6">
                    <NavMenu />
                </div>
            </div>
        </aside>
        <div
            v-show="isSideMenuOpen"
            x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="fixed inset-0 z-10 flex items-end bg-black opacity-35 sm:items-center sm:justify-center"
        ></div>
        <aside
            class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
            v-show="isSideMenuOpen"
            x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0 transform -translate-x-20"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0 transform -translate-x-20"
            @click.away="toggleSideMenu(false)"
            @keydown.escape="toggleSideMenu(false)"
        >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <a
                    class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    href="#"
                >
                    {{ appName }}
                </a>
                <div class="mt-6">
                    <NavMenu />
                </div>
            </div>
        </aside>
        <div class="flex flex-col flex-1">
            <TopNav @side-menu-toggle="toggleSideMenu" />
            <main class="h-full pb-16 overflow-y-auto">
                <div class="container px-6 mx-auto grid">
                    <RouterView />
                </div>
            </main>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TopNav from './TopNav.vue';
import NavMenu from './NavMenu.vue';
const appName = import.meta.env.VITE_APP_NAME;
const isSideMenuOpen = ref(false);
function toggleSideMenu(value){
    isSideMenuOpen.value = value;
}
</script>