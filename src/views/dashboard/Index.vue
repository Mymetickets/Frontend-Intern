<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
    </h2>
    <p v-if="loadingState.isLoading" class="text-base text-center">Loading dashboard data...</p>
    <div class="" v-else>
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div
                    class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                >
                    <svg class="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ec8846" stroke="#ec8846"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M17 8h1v11H2V8h1V6c0-2.76 2.24-5 5-5 .71 0 1.39.15 2 .42.61-.27 1.29-.42 2-.42 2.76 0 5 2.24 5 5v2zM5 6v2h2V6c0-1.13.39-2.16 1.02-3H8C6.35 3 5 4.35 5 6zm10 2V6c0-1.65-1.35-3-3-3h-.02c.63.84 1.02 1.87 1.02 3v2h2zm-5-4.22C9.39 4.33 9 5.12 9 6v2h2V6c0-.88-.39-1.67-1-2.22z"></path> </g> </g></svg>
                </div>
                <div>
                    <p
                    class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                    Total Products
                    </p>
                    <p
                    class="text-lg font-semibold text-gray-700 dark:text-gray-200"
                    >
                    {{ productCount }}
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <h2 class="text-lg font-medium my-2 text-dark">Latest 5 products</h2>
            <CustomTable :columns="['', 'Name', 'Category', 'Price', 'Date Added', 'Action' ]">
                <template v-slot:table-records>
                    <ProductTableRow @product-action="handleProductAction" :products="latestProducts" />
                </template>
            </CustomTable>
        </div>
    </div>
</template>

<script setup>
import CustomTable from '@/components/dashboard/ui/Table.vue';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { initFlowbite } from 'flowbite'
import { useToast } from 'vue-toast-notification';
import ProductTableRow from '@/components/dashboard/ui/ProductTableRow.vue';

const userRepo = RepositoryFactory.get("user");
const productRepo = RepositoryFactory.get("product");
const productCount = ref();
const latestProducts = ref([]);
const isLoading = ref(true);
const loadingState = ref({
    isLoading: true,
    productActionLoading: false
})
const router = useRouter();
const loadDashboardData = async ()=> {
    try{
        const response = await userRepo.dashboardData();
        const respData = response.data.data;
        productCount.value = respData.productCount;
        latestProducts.value = respData.latestProducts;
        loadingState.value.isLoading = false;
    }catch(error){
        RepositoryFactory.handleApiError(error.response, router);
    }
}

function handleProductAction(action, id){
    switch(action){
        case "delete":
            const index = latestProducts.value.findIndex((elem) => elem.id == id);
            latestProducts.value.splice(index, 1);
            productCount.value = productCount.value - 1;
        break;
        default:
            break;
    }
}

onMounted( async ()=>{
    await loadDashboardData();
    initFlowbite();
});

</script>