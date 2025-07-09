import {AuthRepository} from "./apis/AuthRepository";
import { useToast } from "vue-toast-notification";
import { UserRepository } from "./apis/UserRepository";
import { useAuthStore } from "@/stores/auth";
import { ProductRepository } from "./apis/ProductRepository";

const repositories = {
    auth: AuthRepository,
    user: UserRepository,
    product: ProductRepository
}
const toastAlert = useToast();
export const RepositoryFactory = {
    get(repoName){
        return repositories[repoName];
    },
    async handleApiError(response, router){
        const respStatus = response.status ?? 500;
        const respData = response.data ?? {};
        let errors = null;
        if(respStatus == '401'){
            useAuthStore().destroyAuthUser();
            location.reload();
        }else if(respStatus == '400'){
            console.log('Bad Request');
            errors = respData.errors;
        }
        toastAlert.error(respData.message??'Error occured. Try again', {
            position: 'top-right'
        });
        return respData.errors
    }
}