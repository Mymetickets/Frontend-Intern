import { defineStore } from "pinia";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
import { useToast } from "vue-toast-notification";
import { useRouter } from "vue-router";

const productRepo = RepositoryFactory.get("product");
const toastAlert = useToast();
export const useProductStore = defineStore('products', {
    state: ()=>({
        products: [],
        productsLoading: true
    }),
    actions: {
        async fetchProducts(reload = false){
            if(!reload && this.products.length > 0)
                return;
            try{
                const response = await productRepo.getProducts();
                this.products = response.data.data;
            }catch(error){
                RepositoryFactory.handleApiError(error.response, useRouter());
            }finally{
                this.productsLoading = false;
            }
        },
        async deleteProduct(id){
            try{
                const response = await productRepo.deleteProduct(id);
                const index = this.products.findIndex(elem => elem.id == id);
                if(index)
                    this.products.splice(index, 1);
                toastAlert.success(response.data.message);
            }catch(error){
                RepositoryFactory.handleApiError(error.response, useRouter());
            }finally{
            }
        }
    },
    getters: {
        getProducts: (state)=>{
            return state.products;
        }
    }
})