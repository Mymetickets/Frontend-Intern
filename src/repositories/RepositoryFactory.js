import {AuthRepository} from "./apis/AuthRepository";
import { useToast } from "vue-toast-notification";

const repositories = {
    auth: AuthRepository
}
const toastAlert = useToast();
export const RepositoryFactory = {
    get(repoName){
        return repositories[repoName];
    },
    handleApiError(response){
        const respStatus = response.status ?? 500;
        const respData = response.data ?? {};
        let errors = null;
        if(respStatus == '401'){
            console.log('Unahtorized');
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